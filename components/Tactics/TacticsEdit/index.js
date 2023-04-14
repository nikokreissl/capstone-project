import { useState } from "react";
import {
  StyledForm,
  StyledH3,
} from "./PlayerInstructionsForm/StyledTacticsEdit";
import {
  StyledFormLabel,
  StyledInputField,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../GeneralComponents/Buttons";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";
import EditTacticGeneralForm from "./GeneralInstructionsForm";
import EditTacticPlayerForm from "./PlayerInstructionsForm";
import { TacticsSubmitButton } from "./StyledTacticsEdit";
import { SuccessUpdateMessage } from "../../GeneralComponents/Toasts";

export default function TacticsEdit({
  tactic,
  onToggleEdit,
  onUpdateTactic,
  onDeleteTactic,
  onArchiveTactic,
  onClickBack,
}) {
  const [tacticName, setTacticName] = useState(tactic.name);
  function handleFormationNameInput(event) {
    setTacticName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setTimeout(() => {
      onUpdateTactic(data, tactic.id);
      onToggleEdit();
      SuccessUpdateMessage();
    }, 1000);
  }

  function handleDelete(tacticId) {
    onDeleteTactic(tacticId);
    onClickBack();
  }

  function handleArchiveClick(tacticId) {
    onArchiveTactic(tacticId);
  }

  return (
    <>
      <StyledButtonComponent type="back" functionToBeExecuted={onToggleEdit}>
        Discard
      </StyledButtonComponent>
      <StyledForm onSubmit={handleSubmit}>
        <PageHeadlineComponent>Edit tactic</PageHeadlineComponent>
        <StyledPageDescription>
          Update the <strong>general and individual instructions</strong> of
          your formation. Another patch was published and the formation is not
          up-to-date anymore? Add it to - or restore it from - your archive by
          clicking <strong>Archive / Restore</strong>.
        </StyledPageDescription>
        <StyledFormLabel htmlFor="tactic-name">Tactic name</StyledFormLabel>
        <StyledInputField
          type="text"
          name="tacticname"
          id="tactic-name "
          pattern="^(?!\s*$).+"
          maxLength={20}
          value={tacticName}
          onChange={handleFormationNameInput}
          required
        />
        <StyledH3>General Instructions</StyledH3>
        <EditTacticGeneralForm tactic={tactic} />
        <StyledH3>Player Instructions</StyledH3>
        <EditTacticPlayerForm tactic={tactic} />
        <TacticsSubmitButton disabled={false}>Submit</TacticsSubmitButton>
      </StyledForm>
      <StyledButtonLinkWrapper>
        <StyledButtonComponent
          type="delete"
          functionToBeExecuted={() => handleDelete(tactic.id)}
        >
          Delete
        </StyledButtonComponent>
        <StyledButtonComponent
          type="archive"
          functionToBeExecuted={() => handleArchiveClick(tactic.id)}
          item="Tactic"
        >
          {tactic.isArchived ? "Restore" : "Archive"}
        </StyledButtonComponent>
      </StyledButtonLinkWrapper>
    </>
  );
}
