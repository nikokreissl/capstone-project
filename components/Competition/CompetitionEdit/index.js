import { useState } from "react";
import {
  StyledForm,
  StyledFormButton,
  StyledFormLabel,
  StyledFormInput,
  StyledFormLabelInputWrapper,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";

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
    setCompetitionGames(Number(event.target.value));
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();

    if (competitionGames < competition.gamesPlayed.length) {
      alert(
        "Number of games must be greater than the current number of games added to the competition. Your changed won't be saved."
      );
    } else {
      onToggleEdit();
      onUpdateCompetition(id, competitionName, competitionGames);
    }
  }

  function deleteCompetition() {
    onClickBack();
    onDeleteCompetition(id);
  }

  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
      <StyledForm onSubmit={handleUpdateSubmit}>
        <StyledFormLabel htmlFor="competition-name">Name</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="competition-name"
          id="competition-name"
          value={competitionName}
          onChange={handleCompetitionNameChange}
          pattern="^(?!\s*$).+"
          required
        />
        <StyledFormLabelInputWrapper>
          <StyledFormLabel htmlFor="competition-games">
            Number of Games
          </StyledFormLabel>
          <StyledFormInput
            type="number"
            name="competition-games"
            id="competition-games"
            value={competitionGames}
            onChange={handleCompetitionGamesChange}
            min={1}
            max={100}
          />
        </StyledFormLabelInputWrapper>
        <StyledFormButton>Update competition</StyledFormButton>
      </StyledForm>
      <StyledButtonWrapper>
        <StyledButton onClick={deleteCompetition}>
          ❌ Delete competition
        </StyledButton>
        <StyledButton onClick={() => onArchiveCompetition(id)}>
          {isArchived ? "🔃 Restore from archive" : "📖 Archive competition"}
        </StyledButton>
      </StyledButtonWrapper>
    </>
  );
}
