import { useContext } from "react";
import Button from "../components/Button";
import { ModalContext } from "../context/ModalContext";

export default function HomePage() {
  const modalContext = useContext(ModalContext);

  const handleClick = () => {
    modalContext?.setDisplayModal(true);
    console.log(modalContext);
  };

  return (
    <div className="App p-4">
      <h1>NewDay</h1>
      <h2>Let’s see a modal</h2>
      <Button type="button" onClick={handleClick}>
        Open Modal
      </Button>
    </div>
  );
}
