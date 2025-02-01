import Lottie from "react-lottie"
import React from 'react'

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all">
       EmptyChatContainer
       <Lottie
       isClickToPauseDisabled={true}
       height={200}
       width={200}
       options={}
       />
       </div>
  );
};

export default EmptyChatContainer;