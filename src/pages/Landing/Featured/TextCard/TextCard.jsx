import React from "react";

const TextCard = ({ img, title, desc, price, available }) => {
  return (
    <div className="text-card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>

      <div className="card-text">
        <h5>{title}</h5>
        <p className="small">{desc}</p>

        <div className="mt-4 d-flex justify-content-between">
          <p className="small">Lowest</p>
          <p className="small">Available</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="small">${price}</p>
          <p className="small">{available}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
