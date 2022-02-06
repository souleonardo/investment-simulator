import React from 'react';
import ResultStyle from './Styled';

// import { Container } from './styles';

function Result() {
  return (

      <ResultStyle>

        <div className='title-result'><h3>Resultado da Simulação</h3></div>

      <div className='container-result'>

        <div>
            <p>Valor final Bruto</p>
            <p>{1}</p>
        </div>
        <div>
            <p>Alíquota do IR</p>
            <p>{2}</p>
        </div>
        <div>
            <p>Valor Pago em IR</p>
            <p>{3}</p>
        </div>
        <div>
            <p>Valor Final Líquido</p>
            <p>{4}</p>
        </div>
        <div>
            <p>Valor Total Investido</p>
            <p>{5}</p>
        </div>
        <div>
            <p>Ganho Líquido</p>
            <p>{6}</p>
        </div>
      </div>
      </ResultStyle>

  );
}

export default Result;