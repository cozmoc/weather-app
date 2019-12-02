import styled from 'styled-components';

export const ErrorMessage = styled.span`
  font-size: 30px;
`;

export const ErrorWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TextTheme = styled.span`
  color: #333;
  font-weight: 100;
  text-align: center;
`;

export const Title = styled(TextTheme)`
  font-size: 3rem;
  margin-top: 30px;
`;

export const Subtitle = styled(TextTheme)`
  font-size: 1rem;
`;

export const ForecastDayImage = styled.img`
  height: 130px;
`;

export const ForecastDay = styled.div`
  width: 30%;
  display: flex;
  margin: 10px;
  flex-direction: column;
`;

export const ForecastDays = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ForecastSubheader = styled(TextTheme)`
  font-size: 2em;
`;

export const ForecastCaption = styled(TextTheme)`
  font-size: 1em;
`;

export const Wrapper = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const FreeArea = styled.div`
  height: ${(props: { height: number }) => props.height}px;
`;
