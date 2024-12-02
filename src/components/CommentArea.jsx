import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = { reviews: [] };
  getReviews = (_id) => {
    if (_id) {
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${_id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzMxNDc3MTQsImV4cCI6MTczNDM1NzMxNH0.zK3SRDeWuPDXRseaF0OFJXDQxgh2IF6OpeT2VujQJz4",
        },
      })
        .then((resp) => {
          if (!resp.ok) return resp.json();
        })
        .then((reviews) => {
          this.setState({ reviews });
        })
        .catch((error) => {
          console.error("Errore nella fetch", error);
        });
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps._id !== this.props._id) {
      this.getReviews(this.props._id);
    }
  }
  render() {
    console.log(this.state.reviews);
    return (
      <div>
        {" "}
        <CommentList reviews={this.state.reviews} />
        <AddComment _id={this.props._id} />
      </div>
    );
  }
}
export default CommentArea;
