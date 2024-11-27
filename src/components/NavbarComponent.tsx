import { useState } from "react";
import { nav } from "../assets/data/index";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [menu, setMenu] = useState(false);

  const buttonMenu = () => {
    return setMenu(!menu);
  };

  return (
    <>
      <nav className="fixed w-full flex justify-between items-center px-6 py-6 backdrop-blur bg-gray-50 dark:bg-gray-950 z-50">
        <section>
          <Link to={"/"} className="dark:text-gray-50 font-bold">
            MhmdRizky
          </Link>
        </section>
        <section className="hidden sm:flex gap-5 items-center">
          {nav.map((item) => {
            return (
              <nav
                key={item.id}
                className="dark:text-gray-50 flex items-center"
              >
                <Link to={item.path} className="flex items-center">
                  {item.name}
                </Link>
              </nav>
            );
          })}
        </section>
        <button onClick={buttonMenu} className="flex sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </nav>
      <aside
        className={`fixed min-h-svh w-full bg-gray-100 transition-all z-40 ${
          menu ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        test
      </aside>
    </>
  );
}

export default NavbarComponent;
