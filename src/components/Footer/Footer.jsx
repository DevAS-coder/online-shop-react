import React from "react";

function Footer() {
  return (
    <footer className="bg-pink-500 text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg font-bold">Online Shop</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="hover:underline hover:text-pink-200 transition-all"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline hover:text-pink-200 transition-all"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:underline hover:text-pink-200 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
