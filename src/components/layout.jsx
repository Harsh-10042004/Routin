import React from 'react'
import { ArrowRight, Bird } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  const menus = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Courses',
      link: '/courses',
    },
    {
      label: 'Tutorials',
      link: '/tutorials',
    },
    {
      label: 'Contact Us',
      link: '/contact',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-b-slate-100 bg-white flex items-center justify-between px-20 py-4 shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-t from-sky-500 to-indigo-500 w-11 h-11 rounded-full flex items-center justify-center">
            <Bird className="text-white" />
          </div>

          <div className="flex flex-col leading-tight">
            <h1 className="text-blue-700 text-xl font-semibold">
              Birdling
            </h1>

            <p className="text-sky-500 text-xs">
              Making learning easier
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          {menus.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-black/70 font-medium hover:text-black transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-5">
          <Link
            to="/login"
            className="text-black/70 font-medium hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-lg hover:scale-105 active:scale-95 transition"
          >
            <ArrowRight className="w-4 h-4" />
            Sign up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-[100px] py-20">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h1 className="text-xl font-bold text-white mb-3">
              Birdling
            </h1>

            <p className="text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A odit fugit expedita odio cupiditate doloremque vel quas
              et sequi voluptatem.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white mb-3">
              Tutorials
            </h1>

            <p className="text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A odit fugit expedita odio cupiditate doloremque vel quas
              et sequi voluptatem.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white mb-3">
              Courses
            </h1>

            <p className="text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A odit fugit expedita odio cupiditate doloremque vel quas
              et sequi voluptatem.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white mb-3">
              Contact Us
            </h1>

            <p className="text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              A odit fugit expedita odio cupiditate doloremque vel quas
              et sequi voluptatem.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout