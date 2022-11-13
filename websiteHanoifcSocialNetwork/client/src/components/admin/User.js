import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dasboard.css";

const Dasboard = () => {
  const [status, setStatus] = useState("1");
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);
  const handleSubmit = async (id) => {
    try {
      const req = await axios.patch(
        "http://localhost:5000/api/updateStatusUser",
        {
          id,
          status,
        }
      );
      if (req.status === 200) alert("Success!");
      getAllUser();
    } catch (error) {}
  };
  const getAllUser = async () => {
    try {
      const req = await axios.get("http://localhost:5000/api/getAll");
      setUser(req.data.users);
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
            {user &&
              user.map((item) => {
                if (item.role !== "admin" && item.status === 1)
                  return (
                    <li>
                      <span>
                        <h1>{item.fullname} </h1>
                        <select onChange={(e) => setStatus(e.target.value)}>
                          <option value="1">Unblock</option>
                          <option value="2">Block</option>
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
