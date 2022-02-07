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
      <input type='radio' name="rendimento" id="Brut"/>
      <label id="bruto" htmlFor="Brut">Bruto</label>
      <input type='radio' name="rendimento" id="Liquid"/>
      <label id="liquido"htmlFor="Liquid">Líquido</label>
    </div>


    <form action="post">
      <label htmlFor="initial-contribution">Aporte Inicial</label>
      <input type="number" id="initial-contribution" />
      
      <label htmlFor="deadline">Prazo(em meses)</label>
      <input type="number" id="deadline" />
      
      <label htmlFor="IPCA">IPCA (ao ano)</label>
      <input type="number" id="IPCA"/>
      
      <button className='clear-fields' type='sumbit'>Limpar campos</button>
    </form>

  </div>
</SimulatorStyle>

)

}


export default Simulator;