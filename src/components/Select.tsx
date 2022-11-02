import React, { ChangeEvent } from 'react';
import styled from 'styled-components'
import Column from './Column'

type SelectOption = {
  value: string;
  label: string;
}

type SelectProps = {
  label: string;
  options: SelectOption[],
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
};

const StyledLabel = styled.label`
  font-weight: 600;
`
const StyledSelect = styled.select`
  min-width: 110px;
  min-height: 25px;
`

const Select = ({label, options, value, onChange}: SelectProps): JSX.Element => {
  return (
    <Column>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <div>
        <StyledSelect
          id={label}
          value={value}
          onChange={onChange}>
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </StyledSelect>
      </div>
    </Column>
  )
}

export default Select
