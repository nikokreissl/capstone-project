import { useState } from "react";
import {
  StyledCompetitionForm,
  StyledCompetitionFormButton,
  StyledCompetitionFormInput,
  StyledCompetitionFormLabel,
} from "../CompetitionForm";

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
        <StyledCompetitionFormLabel htmlFor="competition-name">
          Name
        </StyledCompetitionFormLabel>
        <StyledCompetitionFormInput
          type="text"
          name="competition-name"
          id="competition-name"
          value={competitionName}
          onChange={handleCompetitionNameChange}
          pattern="^(?!\s*$).+"
          required
        />
        <StyledCompetitionFormLabel htmlFor="competition-games">
          Number of Games
        </StyledCompetitionFormLabel>
        <StyledCompetitionFormInput
          type="number"
          name="competition-games"
          id="competition-games"
          value={competitionGames}
          onChange={handleCompetitionGamesChange}
          min={1}
          max={100}
        />
        <StyledCompetitionFormButton>
          Update competition
        </StyledCompetitionFormButton>
      </StyledCompetitionForm>
      <button onClick={deleteCompetition}>❌ Delete competition</button>
      <button onClick={() => onArchiveCompetition(id)}>
        {isArchived ? "🔃 Restore from archive" : "📖 Archive competition"}
      </button>
    </>
  );
}
