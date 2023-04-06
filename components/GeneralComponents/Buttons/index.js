import styled from "styled-components";
import Image from "next/image";
import TrashIcon from "../../../public/trash-can.svg";
import ArchiveIcon from "../../../public/box-open.svg";
import EditIcon from "../../../public/pen-to-square.svg";
import BackIcon from "../../../public/back-icon.svg";
import AddIcon from "../../../public/add-item.svg";
import SubmitIcon from "../../../public/paper-plane.svg";
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
  callback,
  item,
  disabled,
}) {
  const buttonIcons = {
    edit: EditIcon,
    back: BackIcon,
    delete: TrashIcon,
    archive: ArchiveIcon,
    add: AddIcon,
    update: SubmitIcon,
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
      callback();
      setWaiting(false);
    }, 1000);
  }

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {waiting ? (
        <Spinner />
      ) : (
        <>
          <Image src={buttonIcons[type]} alt={type} width={20} height={20} />
          {children}
        </>
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: black;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 32px;
  gap: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s;
  &:visited {
    color: black;
  }
  &:hover {
    border-color: orange;
    cursor: pointer;
  }
  &:disabled {
    background-color: gray;
    pointer-events: none;
  }
`;
