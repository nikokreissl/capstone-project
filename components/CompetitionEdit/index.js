import styled from "styled-components";
import { useState } from "react";

export default function EditCompetition({ onToggleEdit }) {
  const [competitionName, setCompetitionName] = useState("");
  const [competitionGames, setCompetitionGames] = useState("");

  return (
    <>
      <button onClick={onToggleEdit}>🗑️ Discard changes</button>
      <StyledCompetitionForm>
        <label htmlFor="competition-name">Name</label>
        <input
          type="text"
          name="competition-name"
          id="competition-name"
          pattern="^(?!\s*$).+"
          required
        />
        <label htmlFor="competition-games">Number of Games</label>
        <input
          type="number"
          name="competition-games"
          id="competition-games"
          min={1}
          max={100}
        />
        <button>Create competition</button>
      </StyledCompetitionForm>
      <button>❌ Delete competition</button>
      <button>📖 Archive competition</button>
    </>
  );
}

const StyledCompetitionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
  align-items: center;
  margin: 20px;
`;
