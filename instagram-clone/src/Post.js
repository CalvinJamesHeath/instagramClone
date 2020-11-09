import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
import firebase from 'firebase';

function Post({user, postId, username, caption, imageURL }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setComment('');
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post_avatar"
          alt="Calvin"
          src="https://avatars1.githubusercontent.com/u/72168052?s=460&u=195f5b794f0672b65a541b365bb1a296cb215e7b&v=4"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageURL} />

      <div className="post__comments">
        {comments.map((comment) => {
          <h1>
            ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
           {/* <strong>{comment.username}</strong> {comment.text}  */}
          </h1>
        })}
      </div>

      <h4 className="post__text">
        <strong> {username} </strong> {caption}{" "}
      </h4>
      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          // class="btn btn-primary"
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
          </button>
      </form>

      
    </div>
  );
}

export default Post;
