import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dateStyle = {
      marginLeft: 5
    };

    return (
      <div>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                {this.props.comment.message}
                <br />
                <small>
                  <FontAwesomeIcon icon={faClock} />
                  <span style={dateStyle}>{this.props.comment.date}</span>
                </small>
              </p>
            </div>
          </div>
        </article>
        <br />
      </div>
    );
  }
}

export default Comments;
