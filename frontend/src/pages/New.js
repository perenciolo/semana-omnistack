import React from 'react';

// Services
import api from '../services/api';

import './New.css';

class New extends React.Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);

    this.props.history.push('/');
  }

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input type="text" name="author" onChange={this.handleChange} value={this.state.author} placeholder="Autor do post" />
        <input type="text" name="place" onChange={this.handleChange} value={this.state.place} placeholder="Local do post" />
        <input type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Descrição do post" />
        <input type="text" name="hashtags" onChange={this.handleChange} value={this.state.hashtags} placeholder="Hashtags do post" />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default New;