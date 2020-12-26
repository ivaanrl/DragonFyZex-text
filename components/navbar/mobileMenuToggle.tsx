import { Dispatch, SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuToggle = ({ isOpen, setIsOpen }: Props) => {
  return (
    <button
      className={`border-gray-400 border rounded-full p-2 lg:hidden outline-none focus:outline-none w-9 h-9 flex justify-center items-center ${
        isOpen ? 'bg-primary' : ''
      } `}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          width="14"
          height="14"
          className="w-4 h-4"
        >
          <path
            d="M11.78.865L6.513 6.13 1.247.865.005 2.106l5.267 5.267L.005 12.64l1.242 1.241 5.266-5.266 5.267 5.266 1.242-1.241-5.267-5.267 5.267-5.267L11.78.865z"
            className="fill-white"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="stroke-gray-400"
          ></path>
          )
        </svg>
      )}
    </button>
  );
};

export default MobileMenuToggle;
