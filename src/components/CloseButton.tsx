import { useRef } from "react";

export default function CloseButton({
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <button
      ref={buttonRef}
      className="close-button cursor-pointer z-50 absolute top-0 right-0 m-2 p-1 rounded-full hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
      onClick={onClick}
      aria-label="Close Modal"
      {...props}
    >
      <svg
        className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 hover:bg-gray-500 to-purple-500 text-white"
        fill="white"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
