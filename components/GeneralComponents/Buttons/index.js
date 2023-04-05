import styled from "styled-components";
import Image from "next/image";
import TrashIcon from "../../../public/trash-can.svg";
import ArchiveIcon from "../../../public/box-open.svg";
import EditIcon from "../../../public/pen-to-square.svg";
import BackIcon from "../../../public/back-icon.svg";
import { useState } from "react";
import Spinner from "../CircleAnimation";
import { successMessage, infoMessage } from "../notifications";

export function StyledButtonComponent({
  children,
  type,
  callback,
  item,
  crud,
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
    }
  }

  const [waiting, setWaiting] = useState(false);

  async function handleClick() {
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
      {
        (type === "delete" && infoMessage(item, crud)) ||
          (type === "archive" && infoMessage(item, crud));
      }
      callback();
    }, 1000);
  }

  return (
    <StyledButton onClick={handleClick}>
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
