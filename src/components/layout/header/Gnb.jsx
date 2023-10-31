import styled from "styled-components";

const Gnb = () => {
  return (
    <div>
      <GnbStyled>
        <ul>
          <li>
            <a href="/">Menu1</a>
          </li>
          <li>
            <a href="/">Menu2</a>
          </li>
          <li>
            <a href="/">Menu3</a>
          </li>
          <li>
            <a href="/">Menu4</a>
          </li>
        </ul>
      </GnbStyled>
    </div>
  );
};

const GnbStyled = styled.nav`
  ul {
    display: flex;
    li {
      position: relative;
      margin-left: 30px;
    }
  }
`;

export default Gnb;
