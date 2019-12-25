import React from 'react';
import generateKeycard from '../lib/codenames';


const KeyCard = () => (
  <div>
    <table className="key-card">
      <tbody>
        {generateKeycard().map((row, i) => {
          return (<tr key={i}>
            {row.map((cell, j) => {
              return (<td key={j} className={`${cell} cell`}></td>)
            })}
          </tr>)
        })}
      </tbody>
    </table>
  </div>
)

export default KeyCard;
