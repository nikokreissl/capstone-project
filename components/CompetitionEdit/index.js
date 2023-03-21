import styled from "styled-components";

export default function EditCompetition({ onToggleEdit }) {
  return (
    <>
      <button onClick={onToggleEdit}>🗑️ Discard changes</button>
      <StyledCompetitionForm>
        <label htmlFor="competition-name">Name</label>
        <input
          type="text"
          name="competition-name"
          id="competition-name"
          pattern="^(?!\s*$).+"
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
      </StyledCompetitionForm>
    </>
  );
}

const StyledCompetitionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
`;
