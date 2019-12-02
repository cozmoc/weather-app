import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import styled from 'styled-components';
import Search from '../Search/Search';

const App: React.FC = ({ children }) => {
  return (
    <>
      <Nav dark>
        <NavbarBrand href={'/'}>{'Weather App'}</NavbarBrand>
        <Search />
      </Nav>

      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  background-image: url(/assets/pattern.svg);
`;

const Nav = styled(Navbar)`
  background: rgba(252,90,44,.89);
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
