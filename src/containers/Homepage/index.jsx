import React, { useRef } from "react";
import { motion } from "framer-motion";
import Banner from "../../assets/oldstuff-banner.jpg";
function HomePage() {
  return (
    <div>
      <div className="bg-[#f4f4f4] h-96 px-40">
        <div className="flex justify-center items-center h-full">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-semibold leading-6 text-black">
              Old Stuff
            </h1>
            <h2 className="mt-4 text-xl text-black mr-20 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quae nesciunt consequatur! Totam, aut, deleniti atque excepturi
              inventore quas enim tempore consectetur quo fuga fugiat. Ut quis
              aliquam magnam unde?
            </h2>
            <button className="mt-4 px-[15px] py-[4px] bg-black text-white rounded-[6px] text-[14px]">
              Shopping
            </button>
          </motion.div>
          <motion.div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
