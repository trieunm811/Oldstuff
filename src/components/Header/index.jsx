/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/oldstuff-logo.jpg";
import { Affix, Badge, Input } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <Affix offsetTop={0}>
      <motion.div
        className="bg-black"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center py-8">
          <div className="flex lg:flex-1">
            <h1 className="text-2xl font-black text-white ml-40">OLDSTUFF</h1>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 text-white">
            <a href="#" className="text-lg font-semibold leading-6 ">
              Men
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              Women
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              Kid
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              Sale
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              New & Features
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4 mr-32">
            <Input className="w-44" placeholder="Search" />
            <Badge count={0} overflowCount={10} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "1rem", color: "white" }}
              />
            </Badge>
            <a href="#" className="text-lg font-light leading-6 text-white">
              Log in
            </a>
            <SearchOutlined
              className="relative right-[8.5rem]"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
      </motion.div>
    </Affix>
  );
}

export default Header;
