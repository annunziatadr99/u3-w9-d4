import { ListGroup } from "react-bootstrap";

const CommentList = ({ reviews }) => (
  <>
    <ListGroup>
      {reviews.map((review) => (
        <ListGroup.Item key={review._id}>
          {" "}
          review={review.comment}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>
);
export default CommentList;
