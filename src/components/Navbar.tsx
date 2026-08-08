"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BASE_PATH = "/muftiservicesltd.com";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            href={`${BASE_PATH}/`}
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <Image
              src={`${BASE_PATH}/images/logo.png`}
              alt="Mufti Services Limited"
              width={55}
              height={55}
              className="object-contain"
              priority
            />

            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-green-700">
                Mufti Services Limited
              </h1>

              <p className="text-xs text-gray-500">
                Technology • Innovation • Skills Development
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7">

            {/* HOME */}
            <Link
              href={`${BASE_PATH}/`}
              className="font-semibold text-gray-700 hover:text-green-700 transition"
            >
              Home
            </Link>

            {/* ABOUT */}
            <Link
              href={`${BASE_PATH}/#about`}
              className="font-semibold text-gray-700 hover:text-green-700 transition"
            >
              About
            </Link>

            {/* SERVICES */}
            <Link
              href={`${BASE_PATH}/#services`}
              className="font-semibold text-gray-700 hover:text-green-700 transition"
            >
              Services
            </Link>

            {/* MUFTIPAY */}
            <Link
              href={`${BASE_PATH}/muftipay/`}
              className="font-bold text-green-700 hover:text-green-800 transition"
            >
              MuftiPay
            </Link>

            {/* PROJECTS */}
            <Link
              href={`${BASE_PATH}/#projects`}
              className="font-semibold text-gray-700 hover:text-green-700 transition"
            >
              Projects
            </Link>

            {/* CONTACT */}
            <Link
              href={`${BASE_PATH}/#contact`}
              className="font-semibold text-gray-700 hover:text-green-700 transition"
            >
              Contact
            </Link>

            {/* GET STARTED */}
            <Link
              href={`${BASE_PATH}/#contact`}
              className="bg-green-700 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-800 transition"
            >
              Get Started
            </Link>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="text-3xl">✕</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="lg:hidden pb-6">

            <div className="flex flex-col gap-2 pt-3">

              {/* HOME */}
              <Link
                href={`${BASE_PATH}/`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                Home
              </Link>

              {/* ABOUT */}
              <Link
                href={`${BASE_PATH}/#about`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                About
              </Link>

              {/* SERVICES */}
              <Link
                href={`${BASE_PATH}/#services`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                Services
              </Link>

              {/* MUFTIPAY */}
              <Link
                href={`${BASE_PATH}/muftipay/`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-bold text-green-700 hover:bg-green-50"
              >
                MuftiPay
              </Link>

              {/* PROJECTS */}
              <Link
                href={`${BASE_PATH}/#projects`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                Projects
              </Link>

              {/* CONTACT */}
              <Link
                href={`${BASE_PATH}/#contact`}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                Contact
              </Link>

              {/* GET STARTED */}
              <Link
                href={`${BASE_PATH}/#contact`}
                onClick={closeMenu}
                className="mt-2 bg-green-700 text-white text-center px-5 py-3 rounded-xl font-bold hover:bg-green-800"
              >
                Get Started
              </Link>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
}