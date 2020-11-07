import React from "react";
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post({username, caption, imageURL}) {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar className="post_avatar"
            alt="Calvin"
            src="https://avatars1.githubusercontent.com/u/72168052?s=460&u=195f5b794f0672b65a541b365bb1a296cb215e7b&v=4"/>
            <h3>{username}</h3>
        </div>
      <img className="post__image" 
      src={imageURL} />
      <h4 className="post__text"> <strong> {username} </strong> {caption} </h4>
    </div>
  );
}

export default post;
