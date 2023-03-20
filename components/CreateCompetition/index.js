import styled from "styled-components";

export default function CreateCompetitionForm() {
  return (
    <>
      <button>Cancel</button>
      <StyledCreateCompetitionForm>
        <label htmlFor="competition-name">Name</label>
        <input type="text" name="competition-name" id="competition-name" />
        <label htmlFor="competition-games">Number of Games</label>
        <input type="number" name="competition-games" id="competition-games" />
        <button>Create competition</button>
      </StyledCreateCompetitionForm>
    </>
  );
}

const StyledCreateCompetitionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
`;
