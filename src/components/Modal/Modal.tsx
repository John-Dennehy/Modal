// create WCAG 2.1 AA compliant modal dialog component for React

import { useCallback, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import CloseButton from "../CloseButton";

const BLURB_TEXT =
  "NewDay is a new way to save and invest. We're a digital bank that helps you save and invest your money, all in one place. We're authorised and regulated by the Financial Conduct Authority (FCA).";

interface ModalProps {
  header?: string;
  body?: string;
  hidden?: boolean;
}

export default function Modal({
  header = "Modal Header",
  body = BLURB_TEXT,
  hidden
}: ModalProps) {
  const modalContext = useContext(ModalContext);

  const handleClose = useCallback(() => {
    modalContext?.setDisplayModal(false);
  }, [modalContext]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );
  return (
    <div
      className={`modal-wrapper flex-col fixed w-11/12 ${
        hidden ? "z-0" : "z-40"
      } p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex self-center space-x-4 overflow-y-auto`}
      aria-modal
      aria-hidden={hidden}
      tabIndex={-1}
      role="dialog"
      onKeyDown={handleKeyDown}
    >
      <CloseButton tabIndex={0} onClick={handleClose} />
      {header && (
        <h2 className="text-2xl justify-center font-medium text-gray-900 ">
          {header}
        </h2>
      )}
      <div className="modal-body text-slate-500">{body}</div>
    </div>
  );
}
