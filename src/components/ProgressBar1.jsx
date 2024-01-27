

//Parece funcionar pero sin localStorage 

import React, { Component } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

class App extends Component {
  state = {
    fecha: new Date() // Establece la fecha inicial como la fecha actual
  };

  onChange = fecha => {
    this.setState({ fecha: fecha });
  };

  mostrarFecha = fecha => {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

    if (fecha < new Date()) {
      alert('La fecha seleccionada es anterior a la fecha actual');
    } else {
      alert(fecha.toLocaleDateString('es-ES', options));
    }
  };

  calcularProgreso = () => {
    const fechaActual = new Date();
    const fechaSeleccionada = this.state.fecha;

    // Calcular la diferencia de tiempo en milisegundos
    const diferenciaDeTiempo = fechaSeleccionada - fechaActual;

    // Calcular la duración total en milisegundos (puedes ajustar esto según tus necesidades)
    const duracionTotal = 1000 * 60 * 60 * 24 * 7; // Por ejemplo, una semana

    // Calcular el progreso en porcentaje
    const progreso = Math.min((diferenciaDeTiempo / duracionTotal) * 100, 100);

    console.log(`Porcentaje de progreso: ${progreso}%`); // Agrega este console.log

    return progreso;
  };

  render() {
    const progreso = this.calcularProgreso();

    return (
      <div>
        <DatePicker
          selected={this.state.fecha}
          onChange={this.onChange}
          locale="es"
        />
        <button onClick={() => this.mostrarFecha(this.state.fecha)}>Mostrar Fecha</button>

        {/* Barra de progreso */}
        <div style={{ marginTop: '10px' }}>
          <div style={{ width: `${progreso}%`, height: '20px', backgroundColor: 'blue', borderRadius: '5px' }}></div>
        </div>
      </div>
    );
  }
}

export default App;
