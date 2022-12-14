import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Postview } from "../PostView/postview";
import * as ReactBootstrap from "react-bootstrap";

export default function Main() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://instacloneproject1.onrender.com/posts"
      )
      .then((res) => {
        setusers(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <>
      <Header />
      {[...users].reverse().map((user) => {
        return (
          <Postview
            key={user._id}
            name={user.author}
            location={user.location}
            image={`https://instacloneproject1.onrender.com/${user.imagename}`}
            date={user.Date}
            likes={user.likes}
            description={user.description}
          />
        );
      })}

      <div className="spinner">
        {loading && (
          <ReactBootstrap.Spinner
            className="spinner"
            animation="border"
            variant="primary"
          />
        )}
      </div>
    </>
  );
}
