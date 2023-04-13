import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Article from "./Article";
import { IArticle } from "./IArticle";

const Fetch = () => {
    const URL = 'https://api.spaceflightnewsapi.net/v4/articles'

    const [articles, setArticles] = useState<IArticle[]>([])

    const article = async () => {
    try {
      const r = await fetch(URL);
      if (r.ok) {
        const  articleApi= await r.json();
        setArticles(articleApi);
      }
    } catch (error) {
      console.log(error);
    }
}

useEffect(() => {
    article();
  }, []);

  return (
    <Container>
      <Row md={3} className="justify-content-center">
        {articles.map(art => (
          <Col key={art.id}>
            <Article art={art} />
          </Col>
        ))}
      </Row>
    </Container>
  );

}

export default Fetch