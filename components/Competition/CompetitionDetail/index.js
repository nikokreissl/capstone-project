import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import GameList from "../GameList";

export default function CompetitionDetail({ onToggleEdit, competition, path }) {
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
      <StyledLinkComponent
        href={path.includes("archive") ? "/archive/competitions" : "/"}
        type="back"
      >
        Back
      </StyledLinkComponent>
      <StyledButtonComponent callback={onToggleEdit} type="edit">
        Edit
      </StyledButtonComponent>
      <h2>{competition.name}</h2>
      <h3>Details</h3>
      <p>
        Wins: {competitionWins.length} / Loses: {competitionLoses.length}
      </p>
      <p>Remaining games: {competition.totalGames - competitionGames.length}</p>
      <StyledLinkComponent
        href={
          path.includes("archive")
            ? `/competition/${competition.id}/track-new-game/?archive`
            : `/competition/${competition.id}/track-new-game`
        }
        type="add"
      >
        Add game
      </StyledLinkComponent>
      <GameList
        reversedCompetitionGames={reversedCompetitionGames}
        competition={competition}
        path={path}
      />
    </StyledDetailsContainer>
  );
}
