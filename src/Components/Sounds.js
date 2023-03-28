import useSound from 'use-sound';
import kick from '../drum hits/01bd.wav'
import snare from '../drum hits/02sd.wav'
import chh from '../drum hits/03ch.wav'
import ohh from '../drum hits/04oh.wav'
import ltom from '../drum hits/05lt.wav'
import htom from '../drum hits/06ht.wav'
import cymbal from '../drum hits/07cy.wav'
import Sequencer from './Sequencer';
import { useRef, useState } from 'react'

 
function Sounds() {

  const [playKick] = useSound(kick)
  const [playSnare] = useSound(snare)
  const [playCHH] = useSound(chh)
  const [playOHH] = useSound(ohh)
  const [playLowTom] = useSound(ltom)
  const [playHighTom] = useSound(htom)
  const [playCymbal] = useSound(cymbal)






  return (
    <div>
      {/* <button onClick={() => timer}>test</button> */}
      <h2>Sounds</h2>
      <button id="kick-button" onClick={playKick}>Kick</button>
      <button id="snare-button" onClick={playSnare}>Snare</button>
      <button id="closed-hi-hat-button" onClick={playCHH}>Closed Hi-Hat</button>
      <button id="open-hi-hat-button" onClick={playOHH}>Open Hi-Hat</button>
      <button id="low-tom-button" onClick={playLowTom}>Low Tom</button>
      <button id="high-tom-button" onClick={playHighTom}>High Tom</button>
      <button id="cymbal-button" onClick={playCymbal}>Cymbal</button>

      <Sequencer snare={playSnare} kick={playKick} chh={playCHH}/>
    </div>
  )
}

export default Sounds;