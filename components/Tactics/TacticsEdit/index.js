import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";

export default function TacticsEdit({ tactic, onToggleEdit }) {
  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
    </>
  );
}
