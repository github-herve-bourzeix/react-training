import React from "react";
import styled from "styled-components";

const InputText = styled.input`
  border: 1px solid grey;
  border-radius: 9px;
  font-size: 20px;
  margin: 20px;
  padding: 5px 10px 5px 10px;
  width: 400px;
`;

export default ({ value, onChange }) => (
  <div>
    <InputText
      onChange={e => onChange(e.target.value)}
      type="text"
      value={value}
      placeholder="search beer by foods"
      maxlength="100"
    />
  </div>
);
