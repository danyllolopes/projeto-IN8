import React from "react";

const Error = ({ error }) => {

  if (!error) return null;
  return <p style={{textAlign: "center", color: "#f31", margin: "1rem 0", fontFamily: "Roboto" }}>{error}</p>;
};

export default Error;
