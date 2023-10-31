import styled from "styled-components";

const Article = () => {
  return (
    <ArticleStyle>
      <h2>Title</h2>
      <p>Text</p>
    </ArticleStyle>
  );
};

const ArticleStyle = styled.article`
  height: 315px;
  text-align: left;
  margin-top: 30px;
`;

export default Article;
