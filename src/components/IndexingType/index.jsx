import React from 'react';
import SimulatorStyle from './Styled';
import { BsInfoCircle } from 'react-icons/bs'

function Indexing() {
  return (
  
<SimulatorStyle>      
  <div>
    <h3 className='title-h3'>Indexação</h3>
    <div className='title-info'>
      <p>Tipo de indexação</p>
      <BsInfoCircle />
    </div>

    <div className='check-buttons2'>
      <input type='radio' name="size" id="pre"/>
      <label id="pre" htmlFor="pre">Pré</label>

      <input type='radio' name="size" id="pos"  />
      <label id="pos" htmlFor="pos">Pós</label>

      <input type='radio' name="size" id="fixed"/>
      <label id="fixed"htmlFor="fixed">Fixado</label>
    </div>
    
    <form action="post">
      <label htmlFor="">Aporte Mensal</label>
      <input type="number" />
      <label htmlFor="">Rentabilidade</label>
      <input type="number" />
      <label htmlFor="">CDI (ao ano)</label>
      <input type="number" />
      <button className='clear-fields' type='sumbit'>Simular</button>
    </form>

  </div>
</SimulatorStyle>

)

}

export default Indexing;