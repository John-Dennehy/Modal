import { ReactNode, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Modal from "./Modal";

export default function ModalOverlay({ children }: { children: ReactNode }) {
  const modalContext = useContext(ModalContext);

  const displayModal = Boolean(modalContext?.displayModal);
  const overlayStyle = displayModal ? "bg-opacity-50 z-20" : "opacity-0 z-10";

  return (
    <div>
      <div className="fixed w-full h-full flex justify-center pointer-events-none z-0">
        <div className="z-10 pointer-events-auto">{children}</div>
        <div
          className={`modal-overlay bg-gray-900 ${overlayStyle} absolute inset-0`}
        >
          <Modal hidden={!modalContext?.displayModal} header="NewDay Modal" />
        </div>
      </div>
    </div>
  );
}
