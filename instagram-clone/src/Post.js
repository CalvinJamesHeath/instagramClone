import React from "react";
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post() {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar className="post_avatar"
            alt="Calvin"
            src="https://avatars1.githubusercontent.com/u/72168052?s=460&u=195f5b794f0672b65a541b365bb1a296cb215e7b&v=4"/>
            <h3>Username</h3>
        </div>
      <img className="post__image" 
      src="https://img.freepik.com/free-photo/view-sandy-beach_23-2147836788.jpg?size=626&ext=jpg" />
      <h4 className="post__text"><strong>Calvin </strong>caption</h4>
    </div>
  );
}

export default post;
