/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/oldstuff-logo.jpg";
import { Affix, Badge, Input } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

function Header() {
  return (
    <Affix offsetTop={0}>
      <div className="bg-white px-8 ">
        <div className="flex items-center justify-center ">
          <div className="flex lg:flex-1">
            <img src={Logo} alt="logo" className="h-28 w-auto" />
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <a href="#" className="text-lg font-semibold leading-6 text-black">
              Men
            </a>
            <a href="#" className="text-lg font-semibold leading-6 text-black">
              Women
            </a>
            <a href="#" className="text-lg font-semibold leading-6 text-black">
              Kid
            </a>
            <a href="#" className="text-lg font-semibold leading-6 text-black">
              Sale
            </a>
            <a href="#" className="text-lg font-semibold leading-6 text-black">
              New & Features
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            <Input className="w-44" placeholder="Search" />
            <Badge count={1} overflowCount={10} size="small">
              <ShoppingCartOutlined style={{ fontSize: "1rem" }} />
            </Badge>
            <a href="#" className="text-lg font-semibold leading-6 text-black">
              Log in
            </a>
            <SearchOutlined
              className="relative right-[8.5rem]"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
      </div>
    </Affix>
  );
}

export default Header;
