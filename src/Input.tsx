import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement> & AdditionalInputProps;

type AdditionalInputProps = {
  label: string;
}

export default function Input(props: InputProps) {
  const { label, ...remain } = props;  
  return (
    <label>
      <LabelContainer>{label}</LabelContainer>
      <InputContainer {...remain}/>
    </label>
  )
}

const InputContainer = styled.input`
  border-radius: var(--margin-8px);
  border: 1px solid #000;
  padding: 0.5rem;
  margin-inline: var(--margin-8px);
`;

const LabelContainer = styled.span`
  display: inline-block;
  margin-inline: var(--margin-8px);
`;