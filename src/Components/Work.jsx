//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
//img
import Img1 from "../assets/UI design.png";
import Img2 from "../assets/Ridely screenshot.png";
import Img3 from "../assets/softy.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent ">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum
                rem doloribus vitae officiis animi ab, ipsum dolor distinctio
                odio.
              </p>
              <button className="btn btn-sm"> View All Projects</button>
            </div>
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/*  pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
              >
                <span className="text-gradient text-2xl"> UI/UX Design</span>{" "}
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
               transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white"> Sample Project </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/*  pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
              >
                <span className="text-gradient text-2xl"> Innovation </span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
               transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white"> Ridely </span>
              </div>
            </div>

            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/*  pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all
              duration-500 z-50"
              >
                <span className="text-gradient text-2xl"> Development </span>{" "}
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
               transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white"> Websites and apps </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
