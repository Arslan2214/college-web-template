import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="banter-loader bg-[#111827] h-[80vh] z-50 absolute top-[50%] left-[50%] translate-[(-50%,-50%)]">
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
    </div>
  );
};

export default Loader;
