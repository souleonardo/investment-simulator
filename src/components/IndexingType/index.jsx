import React from 'react';
import SimulatorStyle from './Styled';

function Indexing() {
  return (
  
<SimulatorStyle>      
  <div>
    <h3>Indexação</h3>
    <div className='title-info'>
      <p>tipo de indexação</p>
      <img src="#" alt="i" />
    </div>
    <div className='index-check-buttons'>
      <input type='radio' id='i-1'/>
      <input type='radio' id='i-2'/>
      <input type='radio' id='i-3'/>
    </div>
    <form action="post">
      <label htmlFor="">Mensal</label>
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