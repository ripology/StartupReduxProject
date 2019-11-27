import React from 'react'
import {StartupList} from './StartupList'

const Startup = ({ text, onClick }) => {
    console.log('in startup.js');
    
  
  return (
  <table>
    <tbody>
          <tr>
      <td
        onClick={onClick}
        style={{ }}
      >
        {text}
      </td>
    </tr>
    </tbody>

  </table>
  )
}



export default Startup
