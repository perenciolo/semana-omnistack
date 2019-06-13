import React from 'react';
import io from 'socket.io-client';

// Services
import api from '../services/api';

// Components
import Post from '../components/Post';

// CSS
import './Feed.css';

class Feed extends React.Component {

  state = {
    feed: [],
  };

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post => post._id === likedPost._id ? likedPost : post)
      })
    })
  }

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get('posts');

    this.setState({ feed: response.data });
  }

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <Post key={post._id} author={post.author} place={post.place} image={post.image} likes={post.likes} description={post.description} hashtags={post.hashtags} handleLike={this.handleLike} id={post._id} />
        ))}
      </section>
    )
  }
}

export default Feed;