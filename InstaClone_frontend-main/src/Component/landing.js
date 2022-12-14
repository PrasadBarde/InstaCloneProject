import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landingimg">
          <img
            width={400}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu16nm9skvG9WFPK0ju3qCNB4mAth60cxWhB40yqV2kytlEa6pqS3KkDrT81CSKnjdt3g&usqp=CAU"
            alt="WelcomeImage"
          />
        </div>
        <div className="enter">
          <h1>Welcome To InstaClone</h1>
          <button style={{backgroundColor: "grey"}} >
            {" "}
            <Link to="/main" style={linkStyle}>
              Enter
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
