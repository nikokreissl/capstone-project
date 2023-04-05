import styled from "styled-components";
import Image from "next/image";
import TrashIcon from "../../../public/trash-can.svg";
import SubmitIcon from "../../../public/paper-plane.svg";
import ArchiveIcon from "../../../public/box-open.svg";
import EditIcon from "../../../public/pen-to-square.svg";
import { useState } from "react";

export function StyledButtonComponent({ children, type, callback }) {
  function getIcon(type) {
    if (type === "submit") {
      return SubmitIcon;
    } else if (type === "edit") {
      return EditIcon;
    } else if (type === "delete") {
      return TrashIcon;
    } else if (type === "archive") {
      return ArchiveIcon;
    }
  }

  const [waiting, setWaiting] = useState(false);

  function handleClick() {
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
      callback();
    }, 2000);
  }

  return (
    <StyledButton onClick={handleClick}>
      {waiting ? (
        "Waiting..."
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
