export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-pink-500 m-4 rounded-full p-2 text-justify text-white hover:bg-pink-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
