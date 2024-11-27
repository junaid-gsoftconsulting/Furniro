import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import logo from "../assets/logo.svg";
import account from "../assets/navbar/account.svg";
import cart from "../assets/navbar/cart.svg";
import heart from "../assets/navbar/heart.svg";
import search from "../assets/navbar/search.svg";
import SidebarCart from "./cart/SidebarCart";
// import { RiMenu3Fill } from "react-icons/ri";
// import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuItems = ["Home", "Shop", "About", "Contact"];
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
        <NavbarBrand className="gap-1">
          <img src={logo} alt="logo" width={40} />
          <p className="font-bold text-inherit text-xl">Furniro</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/Shop" color="foreground">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/About">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex gap-3">
            <Link href="#">
              <img src={account} alt="account" width="80%" />
            </Link>
            <Link href="#">
              <img src={search} alt="account" width="70%" />
            </Link>
            <Link href="#">
              <img src={heart} alt="account" width="70%" />
            </Link>
            <Link href="#" onClick={handleCartToggle}>
              <img src={cart} alt="account" width="80%" />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="flex md:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarMenu className="items-center">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={"foreground"}
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
      {isCartOpen && <SidebarCart onClose={handleCartToggle} />}
      {isCartOpen && (
        <div
          onClick={handleCartToggle}
          className="fixed inset-0 bg-black opacity-50 z-20"
        ></div>
      )}
    </>
  );
}
