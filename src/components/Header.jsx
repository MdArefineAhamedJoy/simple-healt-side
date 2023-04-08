import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="px-3 bg-yellow-500 flex justify-between items-center py-1 ">
      <div>
        <span className="mx-5 font-bold text-3xl ">Supplero</span>
        <Link
          to=""
          className="  ps-8  shadow pt-8 pb-6  px-6 hover:text-white font-bold"
        >
          HOME
        </Link>
        <Link
          to=""
          className=" font-bold   shadow pt-8 pb-6 px-6 hover:text-white"
        >
          SHOP
        </Link>
        <Link
          to=""
          className=" font-bold shadow pt-8 pb-6 px-6 hover:text-white"
        >
          PAGES
        </Link>
        <Link
          to=""
          className=" shadow pt-8 pb-6 font-bold   px-6 hover:text-white"
        >
          CONTACT
        </Link>
      </div>
      <nav>
        <div className=" flex">
          <p className=" hover:text-white font-bold shadow-2xl border-s border-gray-900 py-6 px-8">
            <FontAwesomeIcon icon={faSearch} />
          </p>
          <p className="me-5 hover:text-white font-bold shadow-2xl border-s border-gray-900 p-6 ">
            <FontAwesomeIcon icon={faUser} />
          </p>
          <p className="me-5 hover:text-white font-bold shadow-2xl border-s border-gray-900 p-6">
            <FontAwesomeIcon icon={faHeart} />
          </p>
          <p className="me-5 hover:text-white font-bold shadow-2xl border-x border-gray-900 p-6">
            <FontAwesomeIcon icon={faBagShopping} />
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
