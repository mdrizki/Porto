import { nav } from "../assets/data";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <footer>
        <div className=" dark:text-gray-50 fixed bottom-0 right-0 left-0 p-5 flex items-center justify-center gap-10  rounded-t-lg">
          {nav.map((item) => {
            return (
              <nav key={item.id} className="flex items-center">
                <Link to={item.path} className="flex items-center">
                  {item.name}
                </Link>
              </nav>
            );
          })}
        </div>
        <p className="text-center"></p>
      </footer>
    </>
  );
};

export default FooterComponent;
