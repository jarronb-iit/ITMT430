import React, { Component } from "react";
import SampleComponent from "../../components/SampleComponent/SampleComponent";
import "./SampleContainer.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class SampleContainer extends Component {
  state = {
    hasPosts: false
  };
  btnOnClick = event => {
    this.props.getPosts();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.posts) {
      return {
        hasPosts: true
      };
    }
  }

  render() {
    let sampleComponents = <SampleComponent />;
    if (this.state.hasPosts) {
      sampleComponents = this.props.posts.map(post => {
        return (
          <SampleComponent key={post.id} title={post.title} id={post.id} />
        );
      });
    }
    return (
      <div className="SampleContainer">
        <h1>I am a container</h1>
        <a href="##" className="btn" onClick={event => this.btnOnClick(event)}>
          Send request!
        </a>
        {sampleComponents}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.sample.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(actions.getPostsInit()),
    getError: () => dispatch(actions.getErrors({ error: "Error" }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleContainer);
