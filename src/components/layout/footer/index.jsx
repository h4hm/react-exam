import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <h1>Footer</h1>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  display: flex;
  justify-content: left;
  padding: 0 30px;
  background: #bbb;
`;
