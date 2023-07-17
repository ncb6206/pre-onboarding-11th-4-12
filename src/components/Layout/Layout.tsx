import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
