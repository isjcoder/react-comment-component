import { connect } from "react-redux";
import React from "react";
import Comment from "./Comment";

class App extends React.Component {
  render() {
    return (
      <section class="section">
        <div className="container App">
          <img
            src="https://cdn-images-1.medium.com/max/1600/1*VeM-5lsAtrrJ4jXH96h5kg.png"
            width="240"
          />
          <br />

          <h1 class="title">React + Redux comments component</h1>
          <br />
          <Comment />
        </div>
      </section>
    );
  }
}

// start of code change
const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(App);
