import { CiDark, CiLight } from "react-icons/ci";

type darkModeType = {
  darkMode: Boolean;
  toggleDarkMode: () => void;
};

function SwitcherDarkMode({ darkMode, toggleDarkMode }: darkModeType) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-20 right-10 bg-gray-800 p-3 rounded-full dark:bg-gray-50"
    >
      {darkMode ? (
        <CiLight size={25} color="#000" />
      ) : (
        <CiDark size={25} color="#fff" />
      )}
    </button>
  );
}

export default SwitcherDarkMode;
