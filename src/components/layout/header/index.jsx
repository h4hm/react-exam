import styled from "styled-components";
import Gnb from "./Gnb";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Header</h1>
      <Gnb />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #bbb;
`;
