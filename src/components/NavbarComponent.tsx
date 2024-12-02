import { useState } from "react";
import { nav } from "../assets/data/index";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

interface darkModeType {
  darkMode: Boolean;
}

function NavbarComponent({ darkMode }: darkModeType) {
  const [menu, setMenu] = useState(false);

  const buttonMenu = () => {
    return setMenu(!menu);
  };

  return (
    <>
      <nav className="fixed w-full flex justify-between items-center px-6 py-6 z-50">
        <section>
          <Link to={"/"} className="dark:text-gray-50 font-bold text-2xl">
            MhmdRizky
          </Link>
        </section>
        <button onClick={buttonMenu} className="flex sm:hidden">
          <BiMenu
            className={`${darkMode ? "text-gray-50" : "text-gray-900"}`}
            size={30}
          />
        </button>
      </nav>
      <aside
        className={`fixed min-h-svh w-full bg-gray-100 dark:bg-gray-900 transition-all z-40 ${
          menu ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <section className="pt-20 flex flex-col items-center gap-5 text-xl">
          {nav.map((item) => {
            return (
              <nav
                key={item.id}
                className=" dark:text-gray-50 flex items-center"
              >
                <Link to={item.path} className="flex items-center">
                  {item.name}
                </Link>
              </nav>
            );
          })}
        </section>
      </aside>
    </>
  );
}

export default NavbarComponent;
