import React from 'react';
import styled from 'styled-components'
import {BsGenderMale, BsGenderFemale} from 'react-icons/bs'
import {TbAlien} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ICharacter } from '../types/ICharacter'

type CharacterCardProps = {
  character: ICharacter
  size?: number
};

export const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 300px;
  padding: 10px 10px;
  margin: 30px 30px;
  
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const CharacterCard = ({ character, size }: CharacterCardProps): JSX.Element => {
  const navigate = useNavigate()
  const {id, image, name, gender} = character
  return (
    <StyledCard onClick={() => navigate(`/characters/${id}`)}>
      <img src={image} alt={name} width={size ? size : 300} height={size ? size : 300} />
      <h4>Name: <b>{name}</b>{gender === 'Male' ? <BsGenderMale /> :  gender === 'Female' ? <BsGenderFemale /> : <TbAlien /> }</h4>
    </StyledCard>
  )
}

export default CharacterCard
