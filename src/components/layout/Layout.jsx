import styled from "styled-components";
import Article from "./Article";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Container>
        <Article />
        <Article />
      </Container>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 50px 30px;
`;

export default Layout;
