import React, { useCallback, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { InputGroup, InputGroupAddon, Button, Input, Form } from 'reactstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import actions from '../../actions';

interface SearchInterface extends RouteComponentProps {
  dir?: string;
}

const Search: React.FC<SearchInterface> = props => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const onCityChange = useCallback(e => {
    setCity(e.target.value);
  }, []);

  const preventSubmit = useCallback(e => e.preventDefault(), []);

  const getWeather = () => {
    dispatch(actions.weather.clearWeather());
    props.history.push(`/forecast/${city}`);
  };

  return (
    <Wrapper>
      <Form onSubmit={preventSubmit}>
        <InputWrapper dir={props.dir}>
          <Input placeholder={'St. George, Utah'} value={city} valid={city.length > 2} onChange={onCityChange} />
          <InputGroupAddon addonType="append">
            <Button onClick={getWeather} color="success" disabled={city.length < 3} type={'submit'}>Get Weather</Button>
          </InputGroupAddon>
        </InputWrapper>
      </Form>
    </Wrapper>
  );
}

export default withRouter(Search);

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;

const InputWrapper = styled(InputGroup)`
  flex-direction: ${props => props.dir || 'row'};
  justify-content: space-around!important;
  align-items: center!important;
`;
