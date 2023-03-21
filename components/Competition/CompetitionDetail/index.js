import {
  StyledCompetitionDetailsContainer,
  StyledCompetitionDetailButton,
} from "./StyledCompetitionDetails";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";

export default function CompetitionDetail({
  onClickBack,
  onToggleEdit,
  competition,
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
    <StyledCompetitionDetailsContainer>
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
      <StyledCompetitionDetailButton>Track Game</StyledCompetitionDetailButton>
      <ul>
        {reversedCompetitionGames.map((game) => (
          <li key={game.gameId}>
            Game{" "}
            {reversedCompetitionGames.length -
              reversedCompetitionGames.indexOf(game)}{" "}
            - {game.userScore}:{game.opponentScore}
            <button>Edit game</button>
          </li>
        ))}
      </ul>
    </StyledCompetitionDetailsContainer>
  );
}
