import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import styled from 'styled-components'
import Button from '../components/Button'
import { mergeQueryStrings } from '../util/url'
import { useLocation, useNavigate } from 'react-router-dom'
import useQueryValue from '../hooks/useQueryValue'
import { getSpeciesParameter } from '../util/character'
import Select from '../components/Select'
import Row from '../components/Row'
import { ICharacter } from '../types/ICharacter'
import Text from '../components/Text'

export type Value = string | number;

const StyledCharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px calc((100% - (100vw * 3)) / 2);
`

const Characters = (): JSX.Element => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [pageNumber, setPageNumber] = useState(2)
  const [showButton, setShowButton] = useState(false)
  const speciesQueryValue = useQueryValue('species');
  const statusQueryValue = useQueryValue('status');
  const history = useNavigate();
  const location = useLocation();
  let speciesValue: string = speciesQueryValue || 'All'
  let statusValue: string = statusQueryValue || 'All'


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${getSpeciesParameter(speciesValue, statusValue)}`)
      .then(response => {
        setCharacters(response?.data?.results)
        if (!response?.data?.info?.next) {
          setShowButton(false)
        } else {
          setShowButton(true)
        }
      })
      .catch(err => console.log('err', err))
  }, [speciesQueryValue, statusValue])

  if (!characters) {
    return <div></div>
  }

  const onClick = () => {
    axios.get(`https://rickandmortyapi.com/api/character/${getSpeciesParameter(speciesValue, statusValue, pageNumber)}`)
      .then(response => {
        setCharacters([...characters, ...response?.data?.results] as any)
        if (!response?.data?.info?.next) {
          setShowButton(false)
        }
      })
      .catch(err => console.log('err', err))

    setPageNumber(pageNumber + 1)
  }

  const mergeUrl = (newValue: Value, queryName: Value) => {
    return `?${mergeQueryStrings(
      location.search,
      `${queryName}=${Array.isArray(newValue) ? newValue.join(',') : newValue}`,
    )}`;
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>, query: string) => {
    history(mergeUrl(e.target.value, query))

    setPageNumber(2)
  }

  const speciesOptions = [{value: 'All', label: 'All'}, {value: 'Human', label: 'Human'}, {value: 'Humanoid', label: 'Humanoid'}, {value: 'Alien', label: 'Alien'}]
  const statusOptions = [{value: 'All', label: 'All'}, {value: 'Alive', label: 'Alive'}, {value: 'Dead', label: 'Dead'}, {value: 'unknown', label: 'Unknown'}]

  return (
    <>
      <Text text={'Charecter filters'} pb={1} bold />
      <Row justify={'center'} gap={30}>
        <Select label={'Species'} options={speciesOptions} value={speciesValue} onChange={e => onChange(e, 'species')} />
        <Select label={'Status'} options={statusOptions} value={statusValue} onChange={e => onChange(e, 'status')} />
      </Row>
      <StyledCharacterList>
        {characters.map(char => {
          return (
            <CharacterCard key={char.id} character={char} />
          )
        })}
      </StyledCharacterList>
      { showButton && (
        <Button text={'Load more'} onClick={onClick} />
      )}
    </>
  )
}

export default Characters
