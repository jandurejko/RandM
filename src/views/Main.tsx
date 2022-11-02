import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Column from '../components/Column'
import Row from '../components/Row'
import Button from '../components/Button'
import Text from '../components/Text'
import { mergeQueryStrings } from '../util/url'
import { Value } from './Characters'
import axios from 'axios'
// @ts-ignore
import sound from '../../src/music/BlessingMusic.mp4'

const StyledPopup = styled.div`
  position: absolute;
  width: 45%;
  height: 130px;
  bottom: 10px;
  background-color: gray;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`


const Main = (): JSX.Element => {
  const [quote, setQuote] = useState<{id: number, quote: string, person: string}>()
  const [accepted, setAccepted] = useState<boolean>(() => {
    const value = localStorage.getItem("accepted");
    return value ? !!value : false
  });

  let audio = new Audio(sound)
  audio.volume = 0.1

  useEffect(() => {
    axios.get('https://motivational-quote-api.herokuapp.com/quotes/random')
      .then(response => {
        setQuote(response.data)
      })
      .catch(err => console.log('err', err))
  }, [])

  const onClick = () => {
    localStorage.setItem("accepted", 'true')
    setAccepted(true)
  };


  return (
    <>
      {quote && (
        <>
          <Text text={quote.quote} bold pt={50} size={30} />
          <Text text={`-${quote.person}`} pl={30} size={20} pb={90}/>

          <Button text={'Get blessed by the quote'} onClick={() => audio.play()} />
        </>
      )}

      {!accepted && (
        <StyledPopup>
          <Column>
            <Text text={'This text is pointless, you don\'t have options. So please accept the terms and enjoy some R&M characters'} />
            <Row justify={'center'} gap={10}>
              <Button text={'I accept'} onClick={onClick} />
              <Button text={'I accept a bit less'} onClick={onClick} />
            </Row>
          </Column>
        </StyledPopup>
      )}
    </>
  )
}

export default Main
