import {
  StyledButtonWrapper,
  StyledButton,
} from "../../GeneralComponents/Buttons/StyledButton";
import {
  StyledDetailContainer,
  StyledFieldset,
  StyledNumberInput,
  StyledGameForm,
  StyledGameButton,
} from "./StyledGameDetail.js";

export default function GameDetail({ game, onClickBack }) {
  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
          <StyledButton>❌ Delete</StyledButton>
        </StyledButtonWrapper>
        <h2>Game {game.gameId}</h2>
        <StyledGameForm>
          <StyledFieldset>
            <legend>Score</legend>
            <label htmlFor="user-score">Yours</label>
            <StyledNumberInput
              type="number"
              name="user-score"
              id="user-score"
            />
            :
            <StyledNumberInput
              type="number"
              name="opponent-score"
              id="opponent-score"
            />
            <label htmlFor="opponent-score">Opponent</label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>xGoals</legend>
            <label htmlFor="user-xgoals">Yours</label>
            <StyledNumberInput
              type="number"
              name="user-xgoals"
              id="user-xgoals"
            />
            <StyledNumberInput
              type="number"
              name="opponent-xgoals"
              id="opponent-xgoals"
            />
            <label htmlFor="opponent-xgoals">Opponent</label>
          </StyledFieldset>
          <StyledGameButton>Save / Update</StyledGameButton>
        </StyledGameForm>
      </StyledDetailContainer>
    </main>
  );
}
