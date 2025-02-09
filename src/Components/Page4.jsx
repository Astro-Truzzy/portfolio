import { Link } from "react-router-dom";
const No = "NO";
const Yes = "YES";

const Page4 = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" h-[20rem] w-[40rem] mt-[10rem]">
          <p className="text-black text-[1.8rem] font-tertiary text-center">
            <i>
              <b> Ok, good! </b> I&apos;m truly happy to hear that because what
              I have for you will definitely CHANGE YOUR LIFE.
            </i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="h-[13rem]  w-[45rem] relative bottom-[10rem]">
          <b>
            <h2 className="text-black text-[2.3rem] text-center">
              {" "}
              But...Are you willing to invest{" "}
              <span>
                <u>at least N20,000</u>
              </span>{" "}
              to start this new business?{" "}
            </h2>
          </b>
        </div>
      </div>
      <div className="relative bottom-[8rem] sm:top-4rem">
        <center>
          {" "}
          <p> CHOOSE YOUR ANSWER BELOW </p>{" "}
        </center>
      </div>
      <div className="flex align-center justify-center w-full">
        <div className="flex align-center justify-center gap-[8rem] relative bottom-[6rem] w-full ">
          <button className="bg-red-700 text-white hover:bg-red-500">
            {" "}
            {No}{" "}
          </button>
          <Link to="/page5">
            {" "}
            <button className="bg-green-700 text-white hover:bg-green-500">
              {" "}
              {Yes}{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
      <center>
        <p>
          {" "}
          Copyright Esosa John&apos;s Foundation 2025. All rights reserved.{" "}
        </p>
      </center>
    </>
  );
};

export default Page4;
