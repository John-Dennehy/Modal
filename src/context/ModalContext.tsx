import { createContext, ReactNode, useState } from "react";

interface ModalContextInterface {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextInterface | null>(null);

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider = ({
  children
}: ModalContextProviderProps) => {
  const [displayModal, setDisplayModal] = useState(false);

  const contextValue: ModalContextInterface = {
    displayModal,
    setDisplayModal
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
