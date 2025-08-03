import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12 gap-5 top-0 left-0">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="Devflow Logo"
        />
        <p className="h2-bold space-grotesk text-dark100_light900">
          Dev
          <span className="primary-text-gradient">flow</span>
        </p>
      </Link>

      <p>Global Search</p>
      <div className="flex-between gap-5">Theme</div>
    </nav>
  );
};

export default Navbar;
