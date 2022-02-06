import React from 'react';
import SimulatorStyle from './Styled';

function Simulator() {
  return (
  
<SimulatorStyle>      
  <div>
    <h3>Simulador</h3>
    <div className='title-info'>
      <p>Rendimento</p>
      <img src="#" alt="i" />
    </div>
    <div className='check-buttons'>
      <input type='radio' id='1'/>
      <input type='radio' id='2'/>
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