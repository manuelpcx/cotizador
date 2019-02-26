import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultados from './Resultados';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';

class App extends Component {
  state = {
    resultado : '',
    datos : {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    //Agregar  una base de 2000
    let resultado = 2000;

    // obtener una diferencia  de años y
    const diferencia = obtenerDiferenciaAnio(year);


    //por cada año se le resta el 3% al valor del seguro
    resultado -= ((diferencia * 3)* resultado) / 100;

    //Americano 15%  Asiatico 5%  y europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // el plan del auto, el basico incrementa un 20% y cobertura completa 50%

    let incrementaPlan = obtenerPlan(plan);

    // dependiendo del plan aumeta el valor

    resultado = parseFloat(incrementaPlan * resultado).toFixed(0);

    //crear obejeto para resumen
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }


    // tenemos los costos.
    this.setState({
      resultado : resultado,
      datos : datosAuto
    })

  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo = 'Cotizador de seguro de Autos'
        />

      <div className="contenedor-formulario">
        <Formulario
          cotizarSeguro={this.cotizarSeguro}
        />

        <Resumen
          datos={this.state.datos}
          resultado={this.state.resultado}
        />
      </div>
      </div>
    );
  }
}

export default App;
