import styled from "styled-components";
import { useState } from "react";

export default function EditCompetition({
  onToggleEdit,
  competition,
  onUpdateCompetition,
  onArchiveCompetition,
  onDeleteCompetition,
  onClickBack,
}) {
  const { name, totalGames, id, isArchived } = competition;
  const [competitionName, setCompetitionName] = useState(name);
  const [competitionGames, setCompetitionGames] = useState(totalGames);

  function handleCompetitionNameChange(event) {
    setCompetitionName(event.target.value);
  }

  function handleCompetitionGamesChange(event) {
    setCompetitionGames(event.target.value);
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();
    onUpdateCompetition(id, competitionName, competitionGames);
    onToggleEdit();
  }

  function deleteCompetition() {
    onClickBack();
    onDeleteCompetition(id);
  }

  return (
    <>
      <button onClick={onToggleEdit}>🗑️ Discard changes</button>
      <StyledCompetitionForm onSubmit={handleUpdateSubmit}>
        <label htmlFor="competition-name">Name</label>
        <input
          type="text"
          name="competition-name"
          id="competition-name"
          value={competitionName}
          onChange={handleCompetitionNameChange}
          pattern="^(?!\s*$).+"
          required
        />
        <label htmlFor="competition-games">Number of Games</label>
        <input
          type="number"
          name="competition-games"
          id="competition-games"
          value={competitionGames}
          onChange={handleCompetitionGamesChange}
          min={1}
          max={100}
        />
        <button>Update competition</button>
      </StyledCompetitionForm>
      <button onClick={deleteCompetition}>❌ Delete competition</button>
      <button onClick={() => onArchiveCompetition(id)}>
        {isArchived ? "🔃 Restore from archive" : "📖 Archive competition"}
      </button>
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
