/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Affix, Badge, Drawer, Input } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Affix>
        <div className="bg-white">
          <div className="flex lg:items-center lg:justify-center py-8">
            <div className="flex lg:flex-1">
              <h1 className="text-2xl font-black text-[#543310] ml-8 lg:ml-40">
                OLDSTUFF
              </h1>
            </div>
            <div className="flex flex-1 justify-end items-center lg:hidden pr-8">
              <MenuOutlined
                style={{ fontSize: "1.5rem" }}
                onClick={showDrawer}
                aria-hidden="true"
              />
            </div>
            <div className="hidden lg:flex lg:gap-x-8 text-[#543310]">
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
              <Input className="w-44 border-[#543310]" placeholder="Search" />
              <Badge count={0} overflowCount={10} size="small">
                <ShoppingCartOutlined style={{ fontSize: "1rem" }} />
              </Badge>
              <a
                href="#"
                className="text-lg font-light leading-6 text-[#543310]"
              >
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
      <Drawer
        title={
          <h1 className="text-lg font-black text-[#543310]">
            OLDSTUFF
          </h1>
        }
        onClose={onClose}
        open={open}
        width="50%"
      >
        <div className="text-[#543310] lg:hidden">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Men
          </a>
        </div>
        <div className="text-[#543310] lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Women
          </a>
        </div>
        <div className="text-[#543310] lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Kid
          </a>
        </div>
        <div className="text-[#543310] lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Sale
          </a>
        </div>
        <div className="text-[#543310] lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            New & Features
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
