import React from "react";
import { connect } from "react-redux";
import { addComment } from "./../actions/index";
import store from "./../store/index";
import Comments from "./Comments";
import _ from "lodash";
import moment from "moment";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };

    this.changeComment = this.changeComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  changeComment(e) {
    this.setState({ comment: e.target.value });
  }

  clearComment() {
    this.setState({ comment: "" });
    document.getElementById("commentApp").value = "";
  }

  saveComment(e) {
    e.preventDefault();
    let state = store.getState();
    let comment = this.state.comment;
    if (comment === undefined || comment === "") return;
    store.dispatch(
      addComment({
        id: parseInt(state.comments.length + 1),
        message: comment,
        date: moment().format("DD/MM/YYYY, h:mm a")
      })
    );
    this.clearComment();
  }

  render() {
    return (
      <div>
        {this.props.comments
          .sort((a, b) => parseInt(b.id) > parseInt(a.id))
          .map(comment => (
            <Comments comment={comment} />
          ))}

        <article class="media">
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea
                  id="commentApp"
                  class="textarea"
                  placeholder="Add a comment..."
                  onChange={this.changeComment}
                />
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <a
                    onClick={this.saveComment}
                    href="javascript:;"
                    class="button is-info"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}

// start of code change
const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(Comment);
