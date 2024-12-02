import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    recens: [],
  };

  getReviews = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzMxNDc3MTQsImV4cCI6MTczNDM1NzMxNH0.zK3SRDeWuPDXRseaF0OFJXDQxgh2IF6OpeT2VujQJz4",
        },
      }
    )
      .then((resp) => resp.json())
      .then((reviews) => {
        this.setState({ recens: reviews });
      });
  };

  componentDidMount() {
    this.getReviews();
  }

  render() {
    console.log(this.state.recens);
    return (
      <div>
        <CommentList reviews={this.state.recens} />
        <AddComment />
      </div>
    );
  }
}
export default CommentArea;
