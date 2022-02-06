import React from 'react';
import SimulatorStyle from './Styled';
import { BsInfoCircle } from 'react-icons/bs'



function Simulator() {
  return (
  
<SimulatorStyle>      
  <div>
    <h3>Simulador</h3>
    <div className='title-info'>
      <p>Rendimento</p>
      <BsInfoCircle />
    </div>

    <div className='check-buttons'>
      <input  type='radio'/>
      <input  type='radio'/>
    </div>


    <form action="post">
      <label htmlFor="">Aporte Inicial</label>
      <input type="text" />
      <label htmlFor="">Prazo (em meses)</label>
      <input type="text" />
      <label htmlFor="">IPCA (ao ano)</label>
      <input type="text" />
      <button className='clear-fields' type='sumbit'>Limpar campos</button>
    </form>

  </div>
</SimulatorStyle>

)

}


export default Simulator;