import React from "react";
// import ProfileTab from "components/ProfileTab";
// import PostsTab from "components/PostsTab";

class PostsAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      postsData: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  /**
   *
   */
  fetchPosts = () => {
    // fetch user id from session
    const userId = 1;

    // GET call to JSON API https://jsonplaceholder.typicode.com/posts?userId={}
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) =>
        // console.log(response);
        response.json()
      )
      .then((json) => this.setState({ postsData: json }));
    // Set to state
  };

  render() {
    // const postsData = this.state.postsData;
    // this.profileDate = this.state
    // Render tabbed interface (profile + post listing)
    console.log(this.state.postsData[0]);
    return (
      <div className="outerContainer">
        {this.state.postsData.map((post) => {
          return <p>{post.title}</p>;
        })}
      </div>
    );
  }
}

export default PostsAppContainer;
