import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
    <nav>
      <ul className="flex items-center justify-between py-4 px-8">
        <li>
          <Link to="/">
          <p  className="text-gray-900">SiteName</p>
          </Link>
        </li>
        <div className="flex items-center">
          <li className="mr-8">
            <a href="#" className="text-gray-900">Page </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-900">Page </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-gray-900">Page </a>
          </li>
          <li>
            <button className="text-white bg-black py-2 px-4 rounded cursor-pointer text-xs">
              Button
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;