import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/allproduct");
  const data = await res.json();

  const paths = data.map((id) => {
    return {
      params: {
        id: id._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/allproduct/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const SingleProduct = ({ data }) => {
  const { name, category, img, price, ratings } = data;
  return (
    <div>
      <div className="card mb-3 mx mx-auto mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>

              <h6>{category}</h6>
              <h6>{price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
