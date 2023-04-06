import { useState } from "react";
import {
  StyledForm,
  StyledFormButton,
  StyledFormLabelInputWrapper,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";

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
      <StyledButtonComponent type="back" callback={onToggleEdit}>
        Discard changes
      </StyledButtonComponent>
      <StyledForm onSubmit={handleUpdateSubmit}>
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
        <StyledFormLabelInputWrapper>
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
        </StyledFormLabelInputWrapper>
        <button>Update</button>
      </StyledForm>
      <StyledButtonComponent type="delete" callback={deleteCompetition}>
        Delete
      </StyledButtonComponent>
      <StyledButtonComponent
        type="archive"
        callback={() => onArchiveCompetition(id)}
        item="Competition"
      >
        {isArchived ? "Restore" : "Archive"}
      </StyledButtonComponent>
    </>
  );
}
