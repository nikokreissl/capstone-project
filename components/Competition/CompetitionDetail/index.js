import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../GeneralComponents/Buttons";
import {
  StyledHeadline,
  StyledTransparentContainer,
} from "../../GeneralComponents/Cards";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import GameList from "../GameList";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";
import GameOverviewComponent from "../GameOverview";
import {
  StyledWinsDefeatsContainer,
  StyledWinsDefeatsFrame,
  StyledWinsDefeatsNumber,
} from "../CompetitionCard";

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
        <StyledWinsDefeatsContainer>
          <StyledWinsDefeatsFrame>
            <h4>Wins</h4>
            <StyledWinsDefeatsNumber>
              {competitionWins.length}
            </StyledWinsDefeatsNumber>
          </StyledWinsDefeatsFrame>
          <StyledWinsDefeatsFrame>
            <h4>Defeats</h4>
            <StyledWinsDefeatsNumber>
              {competitionLoses.length}
            </StyledWinsDefeatsNumber>
          </StyledWinsDefeatsFrame>
          <StyledWinsDefeatsFrame>
            <h4>Remaining games</h4>
            <StyledWinsDefeatsNumber>
              {competition.totalGames - competition.gamesPlayed.length}
            </StyledWinsDefeatsNumber>
          </StyledWinsDefeatsFrame>
        </StyledWinsDefeatsContainer>
        <GameOverviewComponent games={competition.gamesPlayed} />
      </StyledTransparentContainer>
      <StyledLinkComponent
        href={
          path.includes("archive")
            ? `/competition/${competition.id}/track-new-game/?archive`
            : `/competition/${competition.id}/track-new-game`
        }
        type="add"
        disabled={
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
