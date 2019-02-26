import React, {Component} from 'react';
import {primeraMayuscula} from '../Helper';
import Resultados from './Resultados';

class Resumen extends Component {


    mostrarResumen = () => {
      const {marca, plan, year} = this.props.datos;

      if(!marca || !plan || !year) return null;
      return(
        <div className="resumen">
          <h2>Resumen de Cotización</h2>
          <li>Marca: { primeraMayuscula(marca)}</li>
          <li>Plan: { primeraMayuscula(plan)}</li>
          <li>Año del Auto: {year}</li>
        </div>
      )
    }
render(){
    return(
      <div>
        { this.mostrarResumen() }
        <Resultados />
      </div>

    )
  }
}

export default Resumen;
