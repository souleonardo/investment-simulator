import React from 'react';
import SimulatorStyle from './Styled';
import { BsInfoCircle } from 'react-icons/bs'

function Indexing() {
  return (
  
<SimulatorStyle>      
  <div>
    <h3 className='title-h3'>Indexação</h3>
    <div className='title-info'>
      <p>tipo de indexação</p>
      <BsInfoCircle />
      
    </div>
    <div className='index-check-buttons'>
      <input type='radio' className='i-1'/>
      <input type='radio' className='i-2'/>
      <input type='radio' className='i-3'/>
    </div>
    <form action="post">
      <label htmlFor="">Aporte Mensal</label>
      <input type="text" />
      <label htmlFor="">Rentabilidade</label>
      <input type="text" />
      <label htmlFor="">CDI (ao ano)</label>
      <input type="text" />
      <button className='clear-fields' type='sumbit'>Simular</button>
    </form>

  </div>
</SimulatorStyle>

)

}

export default Indexing;