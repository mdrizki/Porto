import { CiDark, CiLight } from "react-icons/ci";

type darkModeType = {
  darkMode: Boolean;
  toggleDarkMode: () => void;
};

function SwitcherDarkMode({ darkMode, toggleDarkMode }: darkModeType) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-5 right-5 bg-gray-800 p-3 rounded-full"
    >
      {darkMode ? (
        <CiLight size={25} color="#fff" />
      ) : (
        <CiDark size={25} color="#fff" />
      )}
    </button>
  );
}

export default SwitcherDarkMode;
