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
  ArchiveMessage,
  DeleteMessage,
} from "../Notifications";

export function StyledButtonComponent({
  children,
  type,
  callback,
  item,
  disabled,
}) {
  function getIcon(type) {
    if (type === "edit") {
      return EditIcon;
    } else if (type === "back") {
      return BackIcon;
    } else if (type === "delete") {
      return TrashIcon;
    } else if (type === "archive") {
      return ArchiveIcon;
    } else if (type === "add") {
      return AddIcon;
    } else if (type === "update") {
      return SubmitIcon;
    }
  }

  function fireMessage(intemName) {
    if (type === "archive") {
      return ArchiveMessage(intemName);
    } else if (type === "add") {
      return SuccessCreateMessage();
    } else if (type === "update") {
      return SuccessUpdateMessage(intemName);
    } else if (type === "delete") {
      return DeleteMessage();
    }
  }

  const [waiting, setWaiting] = useState(false);

  function handleClick() {
    setWaiting(true);
    setTimeout(() => {
      {
        (type === "delete" && fireMessage(item)) ||
          (type === "archive" && fireMessage(item)) ||
          (type === "add" && fireMessage(item)) ||
          (type === "update" && fireMessage(item));
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
          <Image src={getIcon(type)} alt={type} width={20} height={20} />
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
