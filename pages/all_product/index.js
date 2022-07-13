import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/allproduct");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const all_product = ({ data }) => {
  console.log(data);
  return <div></div>;
};

export default all_product;
