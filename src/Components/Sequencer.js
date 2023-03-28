import { useEffect, useState } from 'react';
import bd from '../drum hits/01bd.wav'
import useSound from 'use-sound';

function Sequencer({kick, snare}) {


  let [active, setActive] = useState(false)
  let [beat1, setBeat1] = useState()

  let playHit = () => {
    kick();
    return 'kick'
  }



  let sequence = [
    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
  ]




  let playSeq = () => {
    

    eval(sequence[0][0])()

    setTimeout(() => {
      eval(sequence[1][0])()
    }, 1000);

    setTimeout(() => {
      eval(sequence[2][0])()
    }, 2000);

    setTimeout(() => {
      snare()
    }, 3000);

  }

  const pushToSeq = (instrument, sequencerStep) => {
    sequence[sequencerStep].push(instrument);
  }

  return (
    <div>
      <button onClick={playSeq}>play sequence</button>
      <h3>Sequencer</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Kick</th>
            <td onClick={() => pushToSeq('kick', 0)}></td>
            <td onClick={() => pushToSeq('kick', 1)}></td>
            <td onClick={() => pushToSeq('kick', 2)}></td>
            <td onClick={() => pushToSeq('kick', 3)}></td>
            <td onClick={() => pushToSeq('kick', 4)}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Snare</th>
            <td onClick={() => pushToSeq('snare', 0)}></td>
            <td onClick={() => pushToSeq('snare', 1)}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>CHH</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>OHH</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Low Tom</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>High Tom</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Cymbal</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Sequencer;