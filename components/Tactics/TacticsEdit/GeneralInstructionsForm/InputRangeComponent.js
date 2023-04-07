import React from "react";
import { useState } from "react";

export default function InputRangeComponent({
  instructionFor,
  detailedInstruction,
  defaultValue,
}) {
  const [value, setValue] = useState(defaultValue);
  const { instructionName, minValue, maxValue } = detailedInstruction;

  return (
    <div>
      <p>{value}</p>
      <input
        onChange={(event) => setValue(event.target.value)}
        name={`${instructionFor} ${instructionName}`}
        id={`${instructionFor}-${instructionName}`}
        type={"range"}
        min={`${minValue}`}
        max={`${maxValue}`}
        value={value}
      />
    </div>
  );
}
