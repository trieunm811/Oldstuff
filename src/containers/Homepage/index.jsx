import React, { useRef } from "react";
import { motion } from "framer-motion";
import Banner from "../../assets/oldstuff-banner.jpg";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function HomePage() {
  return (
    <div>
      <div className="bg-white h-[500px] px-40">
        <div className="flex justify-center items-center h-full">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-black leading-6 text-black">
              OLD STUFF
            </h1>
            <h2 className="mt-4 text-xl text-black mr-20 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quae nesciunt consequatur!
            </h2>
            <button className="mt-4 px-[15px] py-[4px] bg-black text-white hover:bg-white hover:text-black  rounded-[6px] text-[14px] font-black border-2 border-black">
              Shopping
            </button>
          </motion.div>
          <motion.div
            className="lg:flex-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
              <motion.div variants={item}>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-52 object-cover rounded-lg"
                />
              </motion.div>
              <motion.div variants={item}>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-52 object-cover rounded-lg"
                />
              </motion.div>
              <motion.div variants={item}>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-52 object-cover rounded-lg"
                />
              </motion.div>
              <motion.div variants={item}>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-52 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] px-40 py-8">
        <h2 className="text-center text-2xl font-semibold">
          Các dòng sản phẩm chính
        </h2>
        <div></div>
      </div>
    </div>
  );
}

export default HomePage;
