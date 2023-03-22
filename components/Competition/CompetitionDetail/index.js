import StyledGameListItemComponent, {
  StyledCompetitionDetailsContainer,
  StyledCompetitionDetailButton,
  StyledGameList,
} from "./StyledCompetitionDetails";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";

export default function CompetitionDetail({
  onClickBack,
  onToggleEdit,
  competition,
  onClickgameDetail,
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
      <StyledGameList>
        {reversedCompetitionGames.map((game) => (
          <StyledGameListItemComponent
            key={game.gameId}
            gameNumber={
              reversedCompetitionGames.length -
              reversedCompetitionGames.indexOf(game)
            }
          >
            Game{" "}
            {reversedCompetitionGames.length -
              reversedCompetitionGames.indexOf(game)}{" "}
            - {game.userScore}:{game.opponentScore}
            <button
              onClick={() => onClickgameDetail(competition.id, game.gameId)}
            >
              ✏️ Edit Game
            </button>
          </StyledGameListItemComponent>
        ))}
      </StyledGameList>
    </StyledCompetitionDetailsContainer>
  );
}
