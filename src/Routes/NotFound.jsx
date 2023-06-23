import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>404 | Not Found</h2>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default NotFound;
