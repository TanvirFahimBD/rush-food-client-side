import React from "react";

const BookOther = (props) => {
  const { img } = props.otherService;
  return (
    <div>
      <img src={img} alt="" style={{ width: "130px" }} />
    </div>
  );
};

export default BookOther;
