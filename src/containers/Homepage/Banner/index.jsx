import React from "react";
import { motion } from "framer-motion";
import Banner from "../../../assets/oldstuff-banner.jpg";
import Banner1 from "../../../assets/oldstuff-jacket.jpg";
import Banner2 from "../../../assets/oldstuff-kakipain.jpg";
import Banner3 from "../../../assets/oldstuff-jeanjacket.jpg";
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
function BannerHomepage() {
  return (
    <div className="bg-[#F8F4E1] h-[610px] lg:px-40 px-8 py-8">
      <div className="flex-row lg:flex justify-center items-center h-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:flex-1 "
        >
          <h1 className="text-4xl font-black text-[#543310]">
            OLDSTUFF OLD BUT GOOD
          </h1>
          <h2 className="mt-4 text-xl text-[#543310] lg:mr-20 text-left">
            Tự tin đem đến những món đồ second hand mang nhiều giá trị thương
            hiệu, tinh thần và nghệ thuật
          </h2>
          <button className="mt-4 px-[15px] py-[4px] bg-[#543310] text-[#F8F4E1] hover:bg-[#F8F4E1] hover:text-[#543310]  rounded-[6px] text-[14px] font-black border-2 border-black">
            Shopping
          </button>
        </motion.div>
        <motion.div
          className="lg:flex-1 lg:flex mt-8 lg:mt-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 vs:grid-cols-1 gap-4 w-full">
            <motion.div variants={item}>
              <img
                src={Banner}
                alt=""
                className="w-full h-[16rem] object-cover rounded-md"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                src={Banner1}
                alt=""
                className="w-full h-[16rem] hidden lg:flex  object-cover rounded-md"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                src={Banner2}
                alt=""
                className="w-full h-[16rem] hidden lg:flex object-cover rounded-md"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                src={Banner3}
                alt=""
                className="w-full h-[16rem] hidden lg:flex object-cover rounded-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BannerHomepage;
