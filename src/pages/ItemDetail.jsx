import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail(props) {
  const params = useParams();
  console.log(params);
  return <div>ItemDetail {params.detailId}</div>;
}

export default ItemDetail;
