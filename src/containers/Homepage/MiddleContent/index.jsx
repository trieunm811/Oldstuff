import React from "react";
import Carousel from "react-grid-carousel";
import Tshirt from "../../../assets/t-shirt.jpg";
import { motion } from "framer-motion";
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
function MiddleContent() {
  return (
    <>
      <motion.div
        className=" lg:px-40 py-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-2xl font-semibold text-[#543310] mb-8 w-full">
          Sản phẩm nổi bật
        </h2>
        <div>
          <Carousel cols={4} rows={1} gap={30}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
              return (
                <Carousel.Item>
                  <img
                    src={Tshirt}
                    alt="product-best"
                    className="rounded-lg hover:scale-105"
                  />
                  <h3 className="text-xl font-normal text-[#AF8F6F] mt-2">
                    Vintage 1990s T-Shirt 2hand
                  </h3>
                  <button className="mt-2 px-[15px] py-[4px] bg-[#543310] text-[#F8F4E1] hover:bg-[#F8F4E1] hover:text-[#543310]  rounded-[6px] text-[14px] font-black border-2 border-black">
                    Shopping
                  </button>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </motion.div>
      {[1, 2, 3].map(() => {
        return (
          <>
            <h2 className="text-2xl pl-5 font-semibold text-[#543310] my-4 w-full">
              T-shirt/Jacket
            </h2>
            <div className="w-full">
              <Carousel cols={2} rows={1} gap={20}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                  return (
                    <Carousel.Item>
                      <div className="flex-1 bg-[url('/src/assets/t-shirt.jpg')] h-[600px] bg-cover bg-center mb-8 hover:opacity-40"></div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MiddleContent;
