import StyledCompetitionFormComponent from "../CompetitionForm";

export default function EditCompetition({ onToggleEdit }) {
  return (
    <>
      <button onClick={onToggleEdit}>⚙️ Edit</button>
      <StyledCompetitionFormComponent>
        <label htmlFor="competition-name">Name</label>
        <input
          type="text"
          name="competition-name"
          id="competition-name"
          required
        />
        <label htmlFor="competition-games">Number of Games</label>
        <input
          type="number"
          name="competition-games"
          id="competition-games"
          min={1}
          max={100}
        />
        <button>Create competition</button>
      </StyledCompetitionFormComponent>
    </>
  );
}
