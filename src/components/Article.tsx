import { Card } from "react-bootstrap";
import { IArticle } from "./IArticle";

interface ArticleProps {
  art: IArticle
}


const Article = ({art }: ArticleProps) => {
  return (
    <Card className="mb-3 text-dark">
      <Card.Img variant="top" src={art.image_url} />
      <Card.Body>
        <Card.Title>{art.title}</Card.Title>
        <Card.Text>{art.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Article