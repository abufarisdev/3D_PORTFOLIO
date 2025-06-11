import React from "react";

const FullscreenLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-[9999]">
      <p className="text-white text-xl animate-pulse">Loading 3D model...</p>
    </div>
  );
};

export default FullscreenLoader;
