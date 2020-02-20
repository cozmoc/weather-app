import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { sentenceCase } from 'sentence-case';
import { ErrorMessage, ErrorWrapper, Title, Subtitle, ForecastDayImage, ForecastDay, ForecastDays, Wrapper, FreeArea, ForecastSubheader, ForecastCaption } from './ForecastListComponents';
import Search from '../Search/Search';
import Weather from '../../interfaces/Weather';
import { dateAt } from '../../helpers';

interface ForecastListInterface extends RouteComponentProps<{ city: string }> { }

const ForecastList: React.FC<ForecastListInterface> = props => {

  const { data, error } = useSelector((state: { weather: Weather }) => state.weather);

  const goToDetails = (id: number) => {
    props.history.push(`/details/${props.match.params.city}/${id}`);
  }

  return (
    <>
      {error && <ErrorWrapper>
        <ErrorMessage>{sentenceCase(error.message)}</ErrorMessage>
        <Search />
      </ErrorWrapper>}
      {
        !!data.city && <Wrapper>
          <Title>{sentenceCase(data.city.name)}, {data.city.country}</Title>
          <Subtitle>Population: {data.city.population}</Subtitle>
          <FreeArea height={50} />
          <ForecastDays>
            {(data.list || []).map((el, index) => <ForecastDay onClick={() => goToDetails(el.weather[0].id)} key={index}>
              <ForecastDayImage src={`/assets/weather-icons/${el.weather[0].icon}.svg`} />
              <ForecastSubheader>{dateAt(index)}</ForecastSubheader>
              <ForecastCaption>{el.weather[0].main}</ForecastCaption>
            </ForecastDay>)}
          </ForecastDays>
        </Wrapper>
      }
    </>
  );
}

export default withRouter(ForecastList);
