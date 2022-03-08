import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../store/actionCreator/actionCreator";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    localStorage.clear();
    dispatch(setLogin(false));
    navigate("/");
  };

  return (
    <>
      <div className="py-8">
        <div className="fixed inset-x-0 top-0">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-slate-100 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <p className="text-xl font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-zinc-500">
                  Cari Ilmu
                </p>
              </div>
              <div
                className="lg:flex flex-grow items-center"
                id="example-navbar-warning"
              >
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-zinc-500 hover:opacity-75"
                      to="/classlist"
                    >
                      <p className="ml-2">Class List</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-zinc-500 hover:opacity-75"
                      to="/instructurelist"
                    >
                      <p className="ml-2">Instructure List</p>
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-row">
                  <div className="flex justify-center">
                    <input
                      v-model="username"
                      type="text"
                      className="text-sm border-2 border-slate-300 h-8 w-auto pr-8 pl-5 rounded-xl z-0 focus:shadow focus:outline-none"
                      placeholder="Search"
                    />
                  </div>
                  <div>
                    <button
                      onClick={signOutHandler}
                      className="flex justify-end items-center px-4 pl-4 text-xl font-semibold text-zinc-500"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
