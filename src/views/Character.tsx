import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import { ICharacter } from '../types/ICharacter'
import Attributes from '../components/Attributes'
import Text from '../components/Text'
import Column from '../components/Column'
import Row from '../components/Row'

const Character = (): JSX.Element => {
  const { id } = useParams();
  const [character, setCharacter] = useState<ICharacter>()
  const [characters, setCharacters] = useState<ICharacter[]>()

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data)

        return response.data
      })
      .then((data) => {
        axios.get(`https://rickandmortyapi.com/api/character/?species=${data?.species}`)
          .then(response => setCharacters(response?.data?.results))
          .catch(err => console.log('err', err))
      })
      .catch(err => console.log('err', err))
  }, [id])

  if (!character || !characters) {
    return <></>
  }

  const randomCharacters = characters.sort(() => Math.random() - Math.random()).slice(0, 5)

  return (
    <>
      <Row pt={20} pb={50} justify={'center'}>
        <Column padding={25}>
          <img src={character.image} alt={character.name} width={400} height={400} />
        </Column>
        <Column padding={25}>
          <Attributes header={'Name'} text={character.name} />
          <Attributes header={'Status'} text={character.status} />
          <Attributes header={'Species'} text={character.species} />
          <Attributes header={'Origin'} text={character?.origin?.name} />
          <Attributes header={'Current Location'} text={character?.location?.name} />
        </Column>
      </Row>
      <Text text={`Other ${character.species} characters`} margin={1} size={17} bold />
      <Row justify={'center'}>
        {randomCharacters && randomCharacters.map(character => {
          return (
            <CharacterCard character={character} size={200} />
          )
        })}
      </Row>
    </>
  )
}

export default Character
