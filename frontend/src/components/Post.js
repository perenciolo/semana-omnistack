import React from 'react';

// IMG
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

const Post = (props) => {
  const handleClick = () => props.handleLike(props.id);

  return (
    <article>
      <header>
        <div className="user-info">
          <span>{props.author}</span>
          <span className="place">
            {props.place}
          </span>
        </div>
        <img src={more} alt="Mais" />
      </header>

      <img src={`http://localhost:3333/files/${props.image}`} alt="" />

      <footer>
        <div className="actions">
          <button onClick={handleClick}>
            <img src={like} alt="" />
          </button>
          <img src={comment} alt="" />
          <img src={send} alt="" />
        </div>

        <strong>{props.likes} curtidas</strong>
        <p>
          {props.description}
          <span>{props.hashtags}</span>
        </p>
      </footer>
    </article>
  )
};

export default Post;