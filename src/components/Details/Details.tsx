import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Button } from 'reactstrap';
import { sentenceCase } from 'sentence-case';
import { Parent, Wrapper, Image, Subheader, Caption } from './DetailsComponents';
import { dateAt } from '../../helpers';
import actions from '../../actions';
import Weather from '../../interfaces/Weather';

const kelvin = -273.15;

interface DetailsInterface extends RouteComponentProps<{ id: string, city: string }> { }

const Details: React.FC<DetailsInterface> = ({ history, match }) => {

  const { data, error } = useSelector((state: { weather: Weather }) => state.weather);
  const dispatch = useDispatch();
  const selected = (data.list || []).findIndex(
    forecast => forecast.weather[0].id.toString() === match.params.id
  );

  useEffect(() => {
    if (!data.city && !error) {
      dispatch(actions.weather.fetchWeather(match.params.city));
    } else if (error || !data.city || selected < 0) history.push(`/`);
  }, [error, data, selected, match.params, dispatch, history]);

  const goBack = () => {
    history.push(`/forecast/${match.params.city}`)
  };

  return (
    <Parent>
      <Container>
        <Wrapper>
          {
            selected > -1 && <>
              <Image src={`/assets/weather-icons/${data.list[selected].weather[0].icon}.svg`} />
              <Subheader>{dateAt(selected)}</Subheader>
              <Caption>{sentenceCase(data.city.name)}</Caption>
              <Caption>{data.list[selected].weather[0].description}</Caption>
              <Caption>Min temp: {(data.list[selected].temp.min + kelvin).toFixed(2)}°C</Caption>
              <Caption>Max temp: {(data.list[selected].temp.max + kelvin).toFixed(2)}°C</Caption>
              <Caption>Humidity: {data.list[selected].humidity}</Caption>
            </>
          }
          <br />
          <Button onClick={goBack} close />
        </Wrapper>
      </Container>
    </Parent>
  );
}

export default withRouter(Details);
