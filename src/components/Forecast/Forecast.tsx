import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Fade, Container, Spinner } from 'reactstrap';
import styled from 'styled-components';
import actions from '../../actions';
import ForecastList from './ForecastList';
import Weather from '../../interfaces/Weather';

interface ForecastInterface extends RouteComponentProps<{ city: string }> { }

const Forecast: React.FC<ForecastInterface> = ({ match }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const { isLoading, data, error } = useSelector((state: { weather: Weather }) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.city && !error) dispatch(actions.weather.fetchWeather(match.params.city));
  }, [error, data, match.params, dispatch]);

  useEffect(() => {
    setFadeIn(true);
  }, [data.city]);

  return (
    <Parent>
      <Container>
        {isLoading && <Spinner width={3} height={3} type="grow" color="warning" />}
        {!isLoading && <FadeWrapper in={fadeIn} tag="div">
          <ForecastList />
        </FadeWrapper>}
      </Container>
    </Parent>
  );
}

export default withRouter(Forecast);

const Parent = styled.div`
  background-color: white;
`;

const FadeWrapper = styled(Fade)`
  height: 100%;
`;
