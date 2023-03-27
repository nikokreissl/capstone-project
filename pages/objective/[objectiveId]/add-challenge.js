import { useRouter } from "next/router";
import {
  StyledDetailContainer,
  StyledNumberInput,
  StyledGameForm,
  StyledGameButton,
  StyledTimesWrapper,
} from "../../../components/Competition/GameDetail/StyledGameDetail";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../../components/GeneralComponents/Buttons/StyledButton";

export default function AddChallengePage() {
  const router = useRouter();
  const { objectiveId } = router.query;

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton>🔙 Cancel</StyledButton>
        </StyledButtonWrapper>
        <h2>Track new Challenge</h2>
        <StyledGameForm>
          <label htmlFor="challenge-description">Description</label>
          <textarea
            name="challenge-description"
            id="challenge-description"
            rows="5"
          ></textarea>
          <StyledTimesWrapper>
            <label htmlFor="times-needed">Times needed</label>
            <StyledNumberInput
              type="number"
              name="times-needed"
              id="times-needed"
              min={0}
            />
            <label htmlFor="times-completed">Times completed</label>
            <StyledNumberInput
              type="number"
              name="times-completed"
              id="times-completed"
              min={0}
            />
          </StyledTimesWrapper>

          <StyledGameButton>Save</StyledGameButton>
        </StyledGameForm>
      </StyledDetailContainer>
    </main>
  );
}
