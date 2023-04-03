import {
  StyledDetailsContainer,
  StyledDetailButton,
} from "../../GeneralComponents/DetailView";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import GameList from "../GameList";

export default function CompetitionDetail({
  onClickBack,
  onToggleEdit,
  competition,
  onClickgameDetail,
  onTrackNewGame,
  path,
}) {
  const competitionWins = competition.gamesPlayed.filter(
    (game) => game.userScore > game.opponentScore
  );

  const competitionLoses = competition.gamesPlayed.filter(
    (game) => game.userScore < game.opponentScore
  );

  const competitionGames = competition.gamesPlayed;
  const reversedCompetitionGames = [...competitionGames].reverse();

  return (
    <StyledDetailsContainer>
      <StyledButtonWrapper>
        <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
        <StyledButton onClick={onToggleEdit}>⚙️ Edit</StyledButton>
      </StyledButtonWrapper>
      <h2>{competition.name}</h2>
      <h3>Details</h3>
      <p>
        Wins: {competitionWins.length} / Loses: {competitionLoses.length}
      </p>
      <p>Remaining games: {competition.totalGames - competitionGames.length}</p>
      <StyledDetailButton onClick={() => onTrackNewGame(competition.id)}>
        Track Game
      </StyledDetailButton>
      <GameList
        reversedCompetitionGames={reversedCompetitionGames}
        onClickgameDetail={onClickgameDetail}
        competition={competition}
        path={path}
      />
    </StyledDetailsContainer>
  );
}
