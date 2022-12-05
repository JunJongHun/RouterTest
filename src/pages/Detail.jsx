import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail(props) {
  let [text, setText] = useState("");
  const navigate = useNavigate();
  let handleText = (e) => {
    setText(e.target.value);
  };
  let onSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/detail/${text}`);
  };
  return (
    <>
      <div>Detail</div>
      <form onSubmit={onSubmit} action="">
        <input onChange={handleText} type="text" name="" id="" value={text} />
        <button type="submit">search</button>
      </form>
    </>
  );
}

export default Detail;
