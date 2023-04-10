import styled from "styled-components";
import {
  TrashIcon,
  ArchiveIcon,
  EditIcon,
  BackIcon,
  AddIcon,
  SubmitIcon,
} from "../../../public/icons";
import { useState } from "react";
import Spinner from "../CircleAnimation";
import {
  SuccessCreateMessage,
  SuccessUpdateMessage,
  DeleteMessage,
  ArchiveMessage,
} from "../Toasts";
import "react-toastify/dist/ReactToastify.css";

export function StyledButtonComponent({
  children,
  type,
  functionToBeExecuted,
  item,
  disabled,
}) {
  const buttonIcons = {
    edit: EditIcon(disabled),
    back: BackIcon(disabled),
    delete: TrashIcon(disabled),
    archive: ArchiveIcon(disabled),
    add: AddIcon(disabled),
    update: SubmitIcon(disabled),
  };

  const toasts = {
    archive: (itemName) => ArchiveMessage(itemName),
    add: SuccessCreateMessage,
    update: (itemName) => SuccessUpdateMessage(itemName),
    delete: DeleteMessage,
  };

  const [waiting, setWaiting] = useState(false);

  function handleClick() {
    setWaiting(true);
    setTimeout(() => {
      if (toasts.hasOwnProperty(type)) {
        toasts[type](item);
      }
      functionToBeExecuted();
      setWaiting(false);
    }, 1000);
  }

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {waiting ? (
        <Spinner />
      ) : (
        <>
          {buttonIcons[type]} {children}
        </>
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 16px;
  color: var(--orange);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  gap: 10px;
  padding: 5px;
  margin: 5px auto;
  border: 1px solid var(--light);
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s;
  &:visited {
    color: var(--orange);
  }
  &:disabled {
    background-color: gray;
    color: var(--light);
    pointer-events: none;
  }
`;

export const StyledButtonLinkWrapper = styled.div`
  display: flex;
`;
