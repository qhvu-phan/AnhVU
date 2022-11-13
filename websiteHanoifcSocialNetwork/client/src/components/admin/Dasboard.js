import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dasboard.css";

const Dasboard = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getNewPost();
  }, []);
  const getNewPost = async () => {
    try {
      const req = await axios.get("http://localhost:5000/api/newPost");
      setPost(req.data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="navagate">
          <ul>
            <li>
              <Link to="/NewPost">New Post</Link>
            </li>
            <li>
              <Link to="/dasboardPost">Post</Link>
            </li>
            <li>
              <Link to="/user">Member</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <ul>
            {post &&
              post.map((item) => {
                if (item.status === 1)
                  return (
                    <li>
                      <span>
                        <h1>{item.content} </h1>
                      </span>
                    </li>
                  );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dasboard;
