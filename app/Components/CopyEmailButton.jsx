import React from 'react'
import { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from "@/data/confetti.json"

const CopyEmailButton = () => {

const [buttonText, setButtonText] = useState("Copy My Email");
const [showAnimation, setShowAnimation] = useState(false);
const email = "taresy.dev@gmail.com";

const handleCopy = async() => {
    try {
        await navigator.clipboard.writeText(email);
        setButtonText("Email Copied!");
        setShowAnimation(true);

        setTimeout(() => { 
            setButtonText("Copy My Email");
    setShowAnimation(false);
    }, 2000);
    } catch (error) {
        console.log("Failed to copy:", error.message);
    }
};

  return (
    <div>
      <button
      onClick={handleCopy}
    className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
  > 
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
    {buttonText}
    </span>
  </button>
  
  {
    showAnimation && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
 <Lottie 
        height={300}
        width={300}
        className="absolute bottom-0 right-0"
        options={{
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            }
          }}
        />
        </div>
       
    )
  }
    </div>
  )
}

export default CopyEmailButton;
