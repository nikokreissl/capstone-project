import { useState } from "react";
import {
  StyledCompetitionForm,
  StyledCompetitionFormButton,
  StyledCompetitionFormInput,
  StyledCompetitionFormLabel,
  StyledCompetitionFormLabelInputWrapper,
} from "../CompetitionForm";
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
    onUpdateCompetition(id, competitionName, competitionGames);
    onToggleEdit();
  }

  function deleteCompetition() {
    onClickBack();
    onDeleteCompetition(id);
  }

  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
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
        <StyledCompetitionFormLabelInputWrapper>
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
        </StyledCompetitionFormLabelInputWrapper>
        <StyledCompetitionFormButton>
          Update competition
        </StyledCompetitionFormButton>
      </StyledCompetitionForm>
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
