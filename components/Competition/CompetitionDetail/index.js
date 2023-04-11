import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../GeneralComponents/Buttons";
import {
  StyledHeadline,
  StyledTransparentContainer,
  StyledParagraph,
} from "../../GeneralComponents/Cards";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import GameList from "../GameList";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";

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
    <>
      <StyledButtonLinkWrapper>
        <StyledLinkComponent
          href={path.includes("archive") ? "/archive/competitions" : "/"}
          type="back"
        >
          Back
        </StyledLinkComponent>
        <StyledButtonComponent functionToBeExecuted={onToggleEdit} type="edit">
          Edit
        </StyledButtonComponent>
      </StyledButtonLinkWrapper>

      <PageHeadlineComponent>Competition details</PageHeadlineComponent>
      <StyledPageDescription>
        Add new games to the competition once played by clicking{" "}
        <strong>Add game</strong> or edit name and number by clicking{" "}
        <strong>Edit</strong>.
      </StyledPageDescription>
      <StyledHeadline>{competition.name}</StyledHeadline>
      <StyledTransparentContainer>
        <h4>Details</h4>
        <StyledParagraph>
          {competitionWins.length > 1 ? "Wins" : "Win"}{" "}
          <strong>{competitionWins.length}</strong> -{" "}
          {competitionLoses.length > 1 ? "Defeat" : "Defeats"}{" "}
          <strong>{competitionLoses.length}</strong>
        </StyledParagraph>
        <StyledParagraph>
          Remaining games:{" "}
          <strong>{competition.totalGames - competitionGames.length}</strong>
        </StyledParagraph>
      </StyledTransparentContainer>
      <StyledLinkComponent
        href={
          path.includes("archive")
            ? `/competition/${competition.id}/track-new-game/?archive`
            : `/competition/${competition.id}/track-new-game`
        }
        type="add"
        disabledlink={
          competition.totalGames === competitionGames.length ? true : false
        }
      >
        Add game
      </StyledLinkComponent>
      <GameList
        reversedCompetitionGames={reversedCompetitionGames}
        competition={competition}
        path={path}
      />
    </>
  );
}
