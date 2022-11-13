import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dasboard.css";

const Dasboard = () => {
  const [status, setStatus] = useState("1");
  const [post, setPost] = useState([]);

  useEffect(() => {
    getNewPost();
  }, []);
  const handleSubmit = async (id) => {
    console.log("run");
    try {
      const req = await axios.patch("http://localhost:5000/api/approve", {
        id,
        status,
      });
      if (req.status === 200) alert("Success!");
      getNewPost();
    } catch (error) {}
  };
  const getNewPost = async () => {
    try {
      const req = await axios.get("http://localhost:5000/api/newPost");
      setPost(req.data.posts);
      console.log(req.data.posts);
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
              <Link to="/dasboard">Post</Link>
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
                if (item.status === 0)
                  return (
                    <li>
                      <span>
                        <h1>{item.content} </h1>
                        <select onChange={(e) => setStatus(e.target.value)}>
                          <option value="1">Approve</option>
                          <option value="2">Reject</option>
                        </select>
                        <button onClick={() => handleSubmit(item._id)}>
                          Accept
                        </button>
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
