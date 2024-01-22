

//AL CIENON PERO SIN LOCAL STORAGE

// import React, { Component } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import es from 'date-fns/locale/es';
// registerLocale("es", es);

// class App extends Component {
//   state = {
//     fecha: new Date() // Establece la fecha inicial como la fecha actual
//   };

//   onChange = fecha => {
//     this.setState({ fecha: fecha });
//   };

//   mostrarFecha = fecha => {
//     const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

//     if (fecha < new Date()) {
//       alert('La fecha seleccionada es anterior a la fecha actual');
//     } else {
//       alert(fecha.toLocaleDateString('es-ES', options));
//     }
//   };

//   calcularProgreso = () => {
//     const fechaActual = new Date();
//     const fechaSeleccionada = this.state.fecha;

//     // Calcular la diferencia de tiempo en milisegundos
//     const diferenciaDeTiempo = fechaSeleccionada - fechaActual;

//     // Calcular la duración total en milisegundos (puedes ajustar esto según tus necesidades)
//     const duracionTotal = 1000 * 60 * 60 * 24 * 7; // Por ejemplo, una semana

//     // Calcular el progreso en porcentaje
//     const progreso = Math.min((diferenciaDeTiempo / duracionTotal) * 100, 100);

//     console.log(`Porcentaje de progreso: ${progreso}%`); // Agrega este console.log

//     return progreso;
//   };

//   render() {
//     const progreso = this.calcularProgreso();

//     return (
//       <div>
//         <DatePicker
//           selected={this.state.fecha}
//           onChange={this.onChange}
//           locale="es"
//         />
//         <button onClick={() => this.mostrarFecha(this.state.fecha)}>Mostrar Fecha</button>

//         {/* Barra de progreso */}
//         <div style={{ marginTop: '10px' }}>
//           <div style={{ width: `${progreso}%`, height: '20px', backgroundColor: 'blue', borderRadius: '5px' }}></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

//SIN CONSOLE.LOG PARA QUE YO LO AGREGUE
// import React, { Component } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import es from 'date-fns/locale/es';
// registerLocale("es", es);

// class App extends Component {
//   state = {
//     fecha: new Date() // Establece la fecha inicial como la fecha actual
//   };

//   onChange = fecha => {
//     this.setState({ fecha: fecha });
//   };

//   mostrarFecha = fecha => {
//     const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

//     if (fecha < new Date()) {
//       alert('La fecha seleccionada es anterior a la fecha actual');
//     } else {
//       alert(fecha.toLocaleDateString('es-ES', options));
//     }
//   };

//   calcularProgreso = () => {
//     const fechaActual = new Date();
//     const fechaSeleccionada = this.state.fecha;

//     // Calcular la diferencia de tiempo en milisegundos
//     const diferenciaDeTiempo = fechaSeleccionada - fechaActual;

//     // Calcular la duración total en milisegundos (puedes ajustar esto según tus necesidades)
//     const duracionTotal = 1000 * 60 * 60 * 24 * 7; // Por ejemplo, una semana

//     // Calcular el progreso en porcentaje
//     const progreso = Math.min((diferenciaDeTiempo / duracionTotal) * 100, 100);

//     return progreso;
//   };

//   render() {
//     const progreso = this.calcularProgreso();

//     return (
//       <div>
//         <DatePicker
//           selected={this.state.fecha}
//           onChange={this.onChange}
//           locale="es"
//         />
//         <button onClick={() => this.mostrarFecha(this.state.fecha)}>Mostrar Fecha</button>

//         {/* Barra de progreso */}
//         <div style={{ marginTop: '10px' }}>
//           <div style={{ width: `${progreso}%`, height: '20px', backgroundColor: 'blue', borderRadius: '5px' }}></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// FUNCIONA CON VALIDACION Y TODO PERO SIN BARRA DE PROGRESO
// import React, { Component } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import es from 'date-fns/locale/es';
// registerLocale("es", es);

// class App extends Component {
//   state = {
//     fecha: new Date() // Establece la fecha inicial como la fecha actual
//   };

//   onChange = fecha => {
//     this.setState({ fecha: fecha });
//   };

//   mostrarFecha = fecha => {
//     const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

//     if (fecha < new Date()) {
//       alert('La fecha seleccionada es anterior a la fecha actual');
//     } else {
//       alert(fecha.toLocaleDateString('es-ES', options));
//     }
//   };

//   render() {
//     return (
//       <div>
//         <DatePicker
//           selected={this.state.fecha}
//           onChange={this.onChange}
//           locale="es"
//         />
//         <button onClick={() => this.mostrarFecha(this.state.fecha)}>Mostrar Fecha</button>
//       </div>
//     );
//   }
// }

// export default App;

//FUNCIONA CON LA FECHA ACTUAL SIN VALIDACION DEL DÍA ANTERIOR
// import React, { Component } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import es from 'date-fns/locale/es';
// registerLocale("es", es);

// class App extends Component {
//   state = {
//     fecha: new Date() // Establece la fecha inicial como la fecha actual
//   };

//   onChange = fecha => {
//     this.setState({ fecha: fecha });
//   };

//   mostrarFecha = fecha => {
//     const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
//     alert(fecha.toLocaleDateString('es-ES', options));
//   };

//   render() {
//     return (
//       <div>
//         <DatePicker
//           selected={this.state.fecha}
//           onChange={this.onChange}
//           locale="es"
//         />
//         <button onClick={() => this.mostrarFecha(this.state.fecha)}>Mostrar Fecha</button>
//       </div>
//     );
//   }
// }

// export default App;

//CODIGO CON LA FECHA ACTUAL POR CHATGPT
// import React, { Component } from "react";
// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import es from "date-fns/locale/es";
// registerLocale("es", es);

// class App extends Component {
//   state = {
//     fecha: new Date(), // Set the current date
//   };

//   onChange = (fecha) => {
//     this.setState({ fecha: fecha });
//   };

//   mostrarFecha = (fecha) => {
//     const options = {
//       weekday: "short",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     alert(fecha.toLocaleDateString("es-ES", options));
//   };

//   render() {
//     return (
//       <div>
//         <DatePicker
//           selected={this.state.fecha}
//           onChange={this.onChange}
//           locale="es"
//         />
//         <button onClick={() => this.mostrarFecha(this.state.fecha)}>
//           Mostrar Fecha
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

//CODIGO DEL VIDEO
// import React, { Component } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import es from 'date-fns/locale/es';
// registerLocale("es", es);

// class App extends Component {
//   state = {
//     fecha: new Date("2024-01-19")
//   };

//   onChange = fecha => {
//     this.setState({ fecha: fecha });
//   };

//   mostrarFecha = fecha => {
//     const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
//     alert(fecha.toLocaleDateString('es-ES', options));
//   };

//   render() {
//     return (
//       <div>
//         <DatePicker
//           selected={this.state.fecha}
//           onChange={this.onChange}
//           locale="es"
//         />
//         <button onClick={() => this.mostrarFecha(this.state.fecha)}>Mostrar Fecha</button>
//       </div>
//     );
//   }
// }

// export default App;
