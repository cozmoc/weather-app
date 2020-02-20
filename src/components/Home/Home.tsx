import React from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Enter a City and State</Title>
      <FreeArea height={20} />
      <Search />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: .5rem 1rem;
`;

const FreeArea = styled.div`
  height: ${(props: { height: number }) => props.height}px;
`;

const Title = styled.span`
  font-size: 45px;
  color: #fff;
  font-weight: 100;
  @media only screen and (max-width: 400px) {
    font-size: 30px;
  }
`;
