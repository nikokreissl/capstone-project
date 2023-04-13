import { render, screen } from "@testing-library/react";
import ArchiveCard from ".";

test("Shows correct number of archived items on archive card", () => {
  const object = [
    { isArchived: true },
    { isArchived: true },
    { isArchived: false },
    { isArchived: false },
    { isArchived: true },
  ];
  render(<ArchiveCard object={object} href="/" itenName="Item" />);

  const archivedNumber = screen.getByText("3");

  expect(archivedNumber).toBeInTheDocument();
});
