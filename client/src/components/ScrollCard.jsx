import React from "react";

const ScrollCard = ({ title }) => {
  return (
    <div className=" p-4 m-20 rounded-lg ">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export default React.memo(ScrollCard);
