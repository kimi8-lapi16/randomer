import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonOptionalProps;

type ButtonOptionalProps = {
  label: string;
};

export default function Button(props: ButtonProps) {
  const { label, ...remain } = props
  return <StyledButton {...remain}>{label}</StyledButton>
}

const StyledButton = styled.button`
  border-radius: 8px;
  border-color: transparent;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  cursor: pointer;
  padding-inline: 1rem;
`;