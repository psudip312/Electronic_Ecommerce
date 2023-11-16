import React from "react";

const Btn = (props) => {
  const { title } = props;
  return (
    <div>
      <button className="rounded-md px-4 py-2 bg-[#0056D1] flex items-center">
        <p className="font-normal text-white">{title}</p>
      </button>
    </div>
  );
};

export default Btn;
