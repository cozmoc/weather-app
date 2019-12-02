import styled from 'styled-components';

export const Image = styled.img`
  height: 130px;
`;

export const Parent = styled.div`
  background-color: white;
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: .3s;
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TextTheme = styled.span`
  color: #333;
  font-weight: 100;
  text-align: center;
`;

export const Subheader = styled(TextTheme)`
  font-size: 2em;
  margin-top: 10px;
`;

export const Caption = styled(TextTheme)`
  font-size: 1.5em;
  margin-top: 10px;
`;
