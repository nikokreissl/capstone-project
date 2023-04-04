import {
  StyledEditChallengeForm,
  StyledTimesWrapper,
  StyledTimesText,
  StyledTimesButton,
} from "./StyledChallengeDetail";

export default function EditChallengeComponent({
  onSubmitChallenge,
  onDescriptionChange,
  challengeDescription,
  challengeTimesNeeded,
  challengeTimesCompleted,
  onChallengeTimesChange,
  editType,
}) {
  return (
    <StyledEditChallengeForm onSubmit={onSubmitChallenge}>
      <label htmlFor="challenge-description">Description</label>
      <textarea
        name="challenge-description"
        id="challenge-description"
        rows="5"
        pattern="^(?!\s*$).+"
        value={challengeDescription}
        onChange={onDescriptionChange}
        required
      ></textarea>
      <StyledTimesWrapper>
        <StyledTimesText>Times needed:</StyledTimesText>
        <StyledTimesButton
          type="button"
          onClick={() => onChallengeTimesChange("needed", "increment")}
        >
          +1
        </StyledTimesButton>
        <p>{challengeTimesNeeded}</p>
        <StyledTimesButton
          type="button"
          onClick={() => onChallengeTimesChange("needed", "decrement")}
          disabled={
            challengeTimesNeeded < 1 ||
            challengeTimesNeeded === challengeTimesCompleted
              ? true
              : false
          }
        >
          -1
        </StyledTimesButton>
      </StyledTimesWrapper>
      <StyledTimesWrapper>
        <StyledTimesText>Times completed:</StyledTimesText>
        <StyledTimesButton
          type="button"
          onClick={() => onChallengeTimesChange("completed", "increment")}
          disabled={
            challengeTimesNeeded === challengeTimesCompleted ? true : false
          }
        >
          +1
        </StyledTimesButton>
        <p>{challengeTimesCompleted}</p>
        <StyledTimesButton
          type="button"
          onClick={() => onChallengeTimesChange("completed", "decrement")}
          disabled={challengeTimesCompleted < 1 ? true : false}
        >
          -1
        </StyledTimesButton>
      </StyledTimesWrapper>
      <button>
        {editType === "update" ? "Update challenge" : "Create challenge"}
      </button>
    </StyledEditChallengeForm>
  );
}
