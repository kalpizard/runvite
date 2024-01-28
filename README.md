Este es un conjunto de archivos de código fuente relacionados con una aplicación web de planificación de metas y tareas. A continuación, se proporciona una descripción general de los archivos y su funcionalidad.

Archivos Principales:

1. App.js
   Descripción: El archivo principal que configura las rutas y componentes principales de la aplicación. Maneja la navegación entre diferentes secciones, como la página de inicio, estadísticas y opciones.
2. Header.js
   Descripción: Componente que representa el encabezado de la aplicación, que puede incluir el logotipo, el nombre de usuario o cualquier otra información relevante.
3. StartButton.js
   Descripción: Componente que presenta un botón de inicio para iniciar la aplicación y redirigir a la página principal.
4. Exit.js
   Descripción: Componente que permite salir de la aplicación o cerrar sesión.
5. NavBar.js
   Descripción: Componente de barra de navegación que contiene enlaces a diferentes secciones de la aplicación, como la página de inicio, estadísticas y opciones.
6. User.js
   Descripción: Componente que maneja el estado del usuario actual, mostrando un formulario de inicio de sesión o registro según sea necesario.
   Páginas y Funcionalidades Específicas:
7. Home.js
   Descripción: Página principal de la aplicación que presenta la interfaz para la planificación de metas y tareas.
8. Stats.js
   Descripción: Página que muestra estadísticas relacionadas con las tareas completadas y la fecha de inicio de la primera tarea.
9. Options.js
   Descripción: Página que ofrece opciones adicionales, como la gestión de perfiles y la reinicialización de la aplicación.
   Componentes Adicionales:
10. ListadoTareas.js
    Descripción: Componente que muestra una lista de tareas pendientes y proporciona funcionalidades para editar y eliminar tareas.
11. Modal.js
    Descripción: Componente modal para la edición de tareas, aparece al hacer clic en una tarea existente o al agregar una nueva.
    Estilos y Recursos:
    Estilos CSS: Varios archivos CSS que contienen estilos para la interfaz de usuario, incluyendo estilos específicos para la página de inicio, estadísticas y barra de navegación.

Imágenes: Recursos gráficos, como íconos, utilizados en la aplicación.

Configuración y Utilidades: 12. helpers.js
Descripción: Archivo que contiene funciones útiles, como la generación de identificadores únicos y el formateo de fechas.
Notas Adicionales:
Uso de Local Storage: La aplicación utiliza el almacenamiento local del navegador para guardar información como el nombre del usuario, metas y tareas.

Gestión de Sesiones: Se espera que haya una gestión básica de sesiones y autenticación de usuario, utilizando tokens y almacenamiento local.

Instrucciones de Ejecución:

Clona el repositorio.
Abre el proyecto en un entorno de desarrollo de React.
Instala las dependencias utilizando npm install.
Inicia la aplicación con npm start.
¡Disfruta planificando tus metas y tareas!

body {
background-color: #399ade;
}

:root {
--azul: #3b82f6;
--blanco: #ffffff;
--gris-claro: #f5f5f5;
--gris: #94a3b8;
--gris-oscuro: #64748b;
--negro: #000;
}

html {
font-size: 62.5%;
box-sizing: border-box;
}
_,
_:before,
\*:after {
box-sizing: inherit;
}

.fijar {
overflow: hidden;
height: 100vh;
}

.sombra {
box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
-webkit-box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
-moz-box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
background-color: var(--blanco);
padding: 1rem;
border-radius: 4.2rem;
}

header {
background-color: var(--azul);
}

header h1 {
padding: 3rem 0;
margin: 0;
color: var(--blanco);
text-align: center;

text-transform: uppercase;
}
.swipe-action**leading,
.swipe-action**trailing {
margin-bottom: 0rem; /_ Ajusta el valor según tus necesidades _/
}
.gasto {
margin-bottom: rem; /_ Ajusta el valor según tus necesidades _/

width: 76%;
}

.descripcion.gasto p,
.descripcion-gasto .categoria,
.descripcion-gasto .nombre-gasto,
.descripcion-gasto .fecha-gasto {
font-size: 3.4rem; /_ Ajusta el tamaño según tus necesidades _/
}

.modal .formulario label,
.modal .formulario input,
.modal .formulario select,
.modal .formulario textarea {
font-size: 3.5rem; /_ Ajusta el tamaño según tus necesidades _/
}

.contenedor-meta-dos-columnas {
display: flex;

justify-content: space-between;
}

.title h1 {
border: 20px solid transparent;
margin: 0;
font-family: "MuseoModerno", sans-serif;
font-size: 110px;
animation: moveInLeft 3s;
color: #ee1d1d;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.title h1 {
border: 20px solid transparent; /_ Ajusta el tamaño del borde según tus necesidades _/
margin: 0;
font-family: "MuseoModerno", sans-serif;
font-size: 110px;
animation-name: moveInLeft;
animation-duration: 3s;

color: #ee1d1d;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /_ Agrega un pequeño borde oscuro _/
}
.title h1 {
border: 20px solid transparent;
margin: 0;
font-family: "MuseoModerno", sans-serif;
font-size: 130px;
animation-name: moveInLeft;
animation-duration: 3s;
text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
color: #ee1d1d;
}

.title h1 span {
color: #ddec55;
text-transform: uppercase;
}

.title h1 span.a {
margin: 0;
display: inline-block;
animation-name: moveInLeft;
animation-duration: 1s;
text-shadow: 0 0 12px rgba(0, 0, 255, 0.8);
color: #ee1d1d;
}

@keyframes moveInLeft {
0% {
opacity: 0;
transform: translateX(-160px);
}

80% {
transform: translateX(8px);
}

100% {
opacity: 1;
transform: translateX(0);
}
}

.encabezado {
background-image: url("./imgs/clouds1.avif");
padding: 3px;
display: flex;
justify-content: center;
}

.div-button {
border-top: 15px solid #8cc9f6;
background-color: #399ade;
color: #1c1f21;
height: 250px;
display: flex;
justify-content: center;
align-items: flex-end;
text-align: center;
padding-bottom: 90px;
}

.portada {
font-family: "Archivo Black", sans-serif;
font-size: 20px;
}

/_ Media Query para pantallas pequeñas _/
@media only screen and (max-width: 600px) {
.title h1 {
font-size: 80px;
}

.start-button {
padding: 10px 150px;
}

.form-Login {
max-width: 500px;
}

/_ Estilos para h2 en pantallas pequeñas _/
.portada h2 {
font-size: 16px;
}
}

.start-button {
background-color: #000;
color: #fff;
padding: 10px 300px;
font-size: 24px;
height: 50px;
border: none;
border: 1px solid #ffffff;
margin-top: 30px;
font-family: "Bebas Neue", sans-serif;
}

.start-button:hover {
background-color: #fff;
color: #000;
border: 4px solid #000000;
}

.divLogin {
background-color: #5caae2;
width: 100%;
margin: 0 auto;
padding: 40px;
}

.foot {
background-color: #000000;

padding-bottom: 70px;

background-image: url("./imgs/footer3.jpg");
margin-top: 210px;
}

.form-Login {
font-size: 20px;
font-weight: bold;
max-width: 800px;
margin: auto;
padding: 14px;
background-color: #fdfdfd;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-Login input,
.form-login input[type="submit"] {
display: block;
margin: 0 auto;
font-size: 24px;
border: 2px solid #ccc;
padding: 8px;
width: 90%;
}

.form-Login input[type="submit"] {
background-color: #4caf50;
color: #fff;
border: none;
padding: 10px 20px;
}

.form-Login input[type="submit"]:hover {
background-color: #45a049;
}

.signup.center-text {
text-align: center;
}

.signup.center-text span {
font-weight: bold;
font-size: 30px;
}
.not-registered {
text-decoration: none;
font-size: 24px;
color: rgb(0, 132, 255);
font-weight: bold; /_ Hacer el texto más grueso y aplicar negrita _/
}

.formulario {
width: 95%;
margin: 0 auto;
padding: 10rem 0;
}
@media (min-width: 768px) {
.formulario {
padding: 5rem 0;
width: 60rem;
}
}
.formulario legend {
font-size: 3.6rem;
text-align: center;
display: block;
text-transform: uppercase;
color: var(--blanco);
margin-bottom: 4rem;
padding-bottom: 1rem;
border-bottom: 2px solid var(--azul);
}
.formulario .campo {
display: grid;
margin-bottom: 2rem;
}

.formulario label {
font-size: 2.8rem;
text-align: center;
margin-bottom: 2rem;
}

.formulario input[type="text"],
.formulario input[type="number"] {
background-color: var(--gris-claro);
border-radius: 1rem;
padding: 1rem;
border: none;
flex: 1;
font-size: 1.6rem;
}
.formulario input[type="submit"] {
background-color: #042a67;
border: none;
padding: 1rem;
text-align: center;
margin-top: 2rem;
color: var(--blanco);
font-weight: 900;
text-transform: uppercase;
font-size: 1.9rem;
width: 100%;
transition: background-color 300ms ease;
}
@media (min-width: 768px) {
.formulario input[type="submit"] {
display: block;
padding: 1rem 5rem;
}
}
.formulario input[type="submit"]:hover {
background-color: #399ade;
cursor: pointer;
}

.formulario select {
flex: 1;
padding: 1rem;
border: none;
border-radius: 1rem;
text-align: center;
background-color: var(--gris-claro);
}

.alerta {
padding: 2rem 5rem;
max-width: 60rem;
margin: 2rem auto 2rem auto;
font-weight: 900;
text-transform: uppercase;
font-size: 1.8rem;
text-align: center;
}
.alerta.error {
background-color: var(--blanco);
border-left: 5px solid #b91c1c;
color: #b91c1c;
}

.contenedor {
width: 70%;
background-color: ;
max-width: 70rem;
margin: 0 auto;
}
.contenedor-goal {
margin-top: -3rem;

display: flex;
justify-content: space-between;
align-items: center;

transform: translateY(5rem);
}
.dos-columnas {
flex-direction: column;
}
.dos-columnas :first-child {
margin-bottom: 4rem;
}
@media (min-width: 768px) {
.dos-columnas {
flex-direction: row;
align-items: center;
gap: 4rem;
}
.dos-columnas > div {
width: 50%;
}
.dos-columnas :first-child {
margin-bottom: 0;
}
}
.formulario input[type="text"].nuevo-presupuesto,
.formulario input[type="number"].nuevo-presupuesto {
font-size: 2.8rem;
text-align: center;
}

@media (min-width: 768px) {
.contenido-presupuesto p {
text-align: left;
}
}
.contenido-meta p.negativo,
.contenido-meta p.negativo span {
color: #dc2626;
}
.contenido-presupuesto span {
font-weight: 900;
color: var(--azul);
}
.reset-app {

background-color: #e74c3c; /_ Color de fondo rojo _/
color: #fff; /_ Texto en color blanco _/
padding: 10px 20px; /_ Espaciado interno _/
font-size: 16px; /_ Tamaño de fuente _/
border: none; /_ Sin borde _/
border-radius: 5px; /_ Esquinas redondeadas _/
cursor: pointer; /_ Cursor al pasar el ratón _/
transition: background-color 0.3s ease; /_ Efecto de transición en el cambio de color de fondo _/
width: 300px; /_ Ancho del botón _/
}
.reset-app:hover {
background-color: #c0392b; /_ Cambio de color de fondo al pasar el ratón _/
cursor: pointer;
}

main {
padding-top: 10rem;
}

.filtros .campo {
display: flex;
align-items: center;
gap: 2rem;
}
.filtros label {
font-size: 3rem;
font-weight: 900;
color: var(--gris-oscuro);
}
.filtros select {
flex: 1;
padding: 1rem;
border: none;
border-radius: 1rem;
text-align: center;
background-color: var(--gris-claro);
}

.listado-gastos {
margin-top: 5rem;
}
.listado-gastos h2 {
color: var(--gris-oscuro);
font-weight: 900;
}
.no-gastos {
text-align: center;
font-size: 2.2rem;
}

.gasto {
display: flex;
justify-content: space-between;
align-items: center;
gap: 2rem;
margin-bottom: 2rem;
}

.cantidad-gasto {
font-size: 2.4rem;
color: var(--negro);
font-weight: 900;
}

.contenido-gasto {
display: flex;
align-items: center;
gap: 2rem;
}

.contenido-gasto img {
width: 10rem;
}

.descripcion-gasto p {
margin: 0 0 0.3rem 0;
}
.descripcion-gasto .categoria {
color: var(--gris);
font-size: 1.6rem;
font-weight: 900;
text-transform: uppercase;
}
.descripcion-gasto p {
margin-bottom: 1rem;
}
.descripcion-gasto .nombre-gasto {
color: var(--gris-oscuro);
font-size: 2.4rem;
font-weight: 700;
}
.descripcion-gasto .nombre-gasto:hover {
cursor: pointer;
}
.descripcion-gasto .fecha-gasto {
font-size: 1.8rem;
font-weight: 900;
color: var(--gris-oscuro);
}
.descripcion-gasto .fecha-gasto span {
font-weight: 400;
}

.nuevo-gasto {
position: fixed;
bottom: 5rem;
right: 5rem;
z-index: 9999; /_ Un valor alto para asegurar que esté sobre otros elementos _/
}

.nuevo-gasto img {
width: 7rem;
}
.nuevo-gasto img:hover {
cursor: pointer;
}

.modal {
position: absolute;
background-color: rgba(48, 39, 39, 0.92);
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.modal .cerrar-modal {
position: absolute;
right: 3rem;
top: 3rem;
width: 3rem;
height: 3rem;
}
.modal .cerrar-modal img {
width: 100%;
}

.modal .formulario {
max-width: 80rem;
width: 40rem;
transition-property: all;
transition-duration: 300ms;
transition-timing-function: ease-in;
}
.modal label {
color: var(--blanco);
}
body .modal {
overflow: hidden;
}

.modal .formulario.animar {
position: relative;
opacity: 1;
}

.modal .formulario.cerrar {
opacity: 0;
}

.modal label {
text-align: left;
}

.CircularProgressbar .CircularProgressbar-text {
font-size: rem !important;
}

/**\* SWIPE LIST OVERRIDES **/
.swipe-action\_\_leading {
background-color: #db2777;

color: var(--blanco);
margin-bottom: 2rem;
width: 20px; /_ Ajusta el ancho según tus necesidades _/
padding: 0 5px; /_ Ajusta el padding según tus necesidades _/
box-sizing: border-box; /_ Asegura que el padding no afecte el tamaño total _/
margin-left: auto;
margin-right: auto;
}

.swipe-action\_\_trailing {
background-color: var(--azul);
margin-bottom: 2rem;
color: var(--blanco);
width: 20px; /_ Ajusta el ancho según tus necesidades _/
padding: 0 5px; /_ Ajusta el padding según tus necesidades _/
box-sizing: border-box; /_ Asegura que el padding no afecte el tamaño total _/
margin-left: auto;
margin-right: auto;
width: 140%;
}

.swipeable-list .swipe-action {
display: flex;
justify-content: center;
align-items: center;
font-size: 2.4rem;
text-align: right;
}

.gasto {
display: flex;
flex-direction: column; /_ Cambia la dirección a columna en dispositivos móviles _/
align-items: center;
/_ Ajusta el espacio entre elementos según tus necesidades _/
margin-bottom: rem; /_ Ajusta el margen inferior según tus necesidades _/
width: 80%;
margin-left: 200px; /_ No hay margen izquierdo en dispositivos móviles _/
margin: 10 auto;
@media only screen and (min-width: 600px) {
/_ Aplicar estilos específicos para dispositivos con un ancho mínimo de 600px _/
flex-direction: row; /_ Vuelve a la dirección de fila en pantallas más grandes _/
justify-content: space-between;
}
}

.no-hay {
font-size: 40px;
font-family: "Archivo Black", sans-serif;
text-align: center;
}

.planifica {
font-size: 40px;
font-family: "Archivo Black", sans-serif;

background-image: url("/src/imgs/clouds1.avif");
padding-bottom: 100px;
text-transform: uppercase;
}

.imagenfooter {
height: 60px;
width: 200px;
background-color: #000000;
color: white;
font-size: 30px;
font-family: "Bebas Neue", sans-serif;
padding-top: 20px;
padding-left: 60px;
}

.span-meta {
font-size: 30px;
}











































:root {
--azul: #3b82f6;
--blanco: #ffffff;
--gris-claro: #f5f5f5;
--gris: #94a3b8;
--gris-oscuro: #64748b;
--negro: #000;
}

body {
font-size: 1.6rem;
font-family: "Lato", sans-serif;
background-color: var(--gris-claro);
}
html {
font-size: 62.5%;
box-sizing: border-box;
}
_,
_:before,
\*:after {
box-sizing: inherit;
}

.fijar {
overflow: hidden;
height: 100vh;
}

h1 {
font-size: 4rem;
}
h2 {
font-size: 3rem;
}

.sombra {
box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
-webkit-box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
-moz-box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
background-color: var(--blanco);
padding: 4rem;
border-radius: 1.2rem;
}

header {
background-color: var(--azul);
}

header h1 {
padding: 3rem 0;
margin: 0;
color: var(--blanco);
text-align: center;

text-transform: uppercase;
}

.formulario {
width: 95%;
margin: 0 auto;
padding: 10rem 0;
}
@media (min-width: 768px) {
.formulario {
padding: 5rem 0;
width: 60rem;
}
}
.formulario legend {
font-size: 3.6rem;
text-align: center;
display: block;
text-transform: uppercase;
color: var(--blanco);
margin-bottom: 4rem;
padding-bottom: 1rem;
border-bottom: 2px solid var(--azul);
}
.formulario .campo {
display: grid;
margin-bottom: 2rem;
}

.formulario label {
color: var(--azul);
font-size: 2.8rem;
text-align: center;
margin-bottom: 2rem;
}

.formulario input[type="text"],
.formulario input[type="number"] {
background-color: var(--gris-claro);
border-radius: 1rem;
padding: 1rem;
border: none;
flex: 1;
font-size: 1.6rem;
}
.formulario input[type="submit"] {
background-color: #1048a4;
border: none;
padding: 1rem;
text-align: center;
margin-top: 2rem;
color: var(--blanco);
font-weight: 900;
text-transform: uppercase;
font-size: 1.9rem;
width: 100%;
transition: background-color 300ms ease;
}
@media (min-width: 768px) {
.formulario input[type="submit"] {
display: block;
padding: 1rem 5rem;
}
}
.formulario input[type="submit"]:hover {
background-color: #042a67;
cursor: pointer;
}

.formulario select {
flex: 1;
padding: 1rem;
border: none;
border-radius: 1rem;
text-align: center;
background-color: var(--gris-claro);
}

.alerta {
padding: 2rem 5rem;
max-width: 60rem;
margin: 2rem auto 2rem auto;
font-weight: 900;
text-transform: uppercase;
font-size: 1.8rem;
text-align: center;
}
.alerta.error {
background-color: var(--blanco);
border-left: 5px solid #b91c1c;
color: #b91c1c;
}
.alerta.success {
}

.contenedor {
width: 90%;
max-width: 80rem;
margin: 0 auto;
}
.contenedor-presupuesto {
margin-top: -5rem;

display: flex;
justify-content: space-between;
align-items: center;

transform: translateY(5rem);
}
.dos-columnas {
flex-direction: column;
}
.dos-columnas :first-child {
margin-bottom: 4rem;
}
@media (min-width: 768px) {
.dos-columnas {
flex-direction: row;
align-items: center;
gap: 4rem;
}
.dos-columnas > div {
width: 50%;
}
.dos-columnas :first-child {
margin-bottom: 0;
}
}
.formulario input[type="text"].nuevo-presupuesto,
.formulario input[type="number"].nuevo-presupuesto {
font-size: 2.8rem;
text-align: center;
}

.contenedor-presupuesto svg {
width: 25rem;
}

.contenido-presupuesto {
width: 100%;
}
.contenido-presupuesto p {
font-weight: 400;
color: var(--gris-oscuro);
font-size: 2.4rem;
text-align: center;
}
@media (min-width: 768px) {
.contenido-presupuesto p {
text-align: left;
}
}
.contenido-presupuesto p.negativo,
.contenido-presupuesto p.negativo span {
color: #DC2626;
}
.contenido-presupuesto span {
font-weight: 900;
color: var(--azul);
}
.reset-app {
border: none;
background-color: #db2777;
padding: 1rem;
width: 100%;
text-align: center;
color: var(--blanco);
text-transform: uppercase;
font-weight: 900;
border-radius: 1rem;
transition-property: background-color;
transition-duration: 300ms;
}
.reset-app:hover {
background-color: #c71465;
cursor: pointer;
}

main {
padding-top: 10rem;
}

.filtros .campo {
display: flex;
align-items: center;
gap: 2rem;
}
.filtros label {
font-size: 3rem;
font-weight: 900;
color: var(--gris-oscuro);
}
.filtros select {
flex: 1;
padding: 1rem;
border: none;
border-radius: 1rem;
text-align: center;
background-color: var(--gris-claro);
}

.listado-gastos {
margin-top: 5rem;
}
.listado-gastos h2 {
color: var(--gris-oscuro);
font-weight: 900;
}
.no-gastos {
text-align: center;
font-size: 2.2rem;
}

.gasto {

gap: 2rem;
margin-bottom: 2rem;
width: 100%;
}

.cantidad-gasto {
font-size: 2.4rem;
color: var(--negro);
font-weight: 900;
}

.contenido-gasto {
display: flex;
align-items: center;
gap: 2rem;
}

.contenido-gasto img {
width: 10rem;
}

.descripcion-gasto p {
margin: 0 0 0.3rem 0;
}
.descripcion-gasto .categoria {
color: var(--gris);
font-size: 1.6rem;
font-weight: 900;
text-transform: uppercase;
}
.descripcion-gasto p {
margin-bottom: 1rem;
}
.descripcion-gasto .nombre-gasto {
color: var(--gris-oscuro);
font-size: 2.4rem;
font-weight: 700;
}
.descripcion-gasto .nombre-gasto:hover {
cursor: pointer;
}
.descripcion-gasto .fecha-gasto {
font-size: 1.8rem;
font-weight: 900;
color: var(--gris-oscuro);
}
.descripcion-gasto .fecha-gasto span {
font-weight: 400;
}

.nuevo-gasto {
position: fixed;
bottom: 5rem;
right: 5rem;
}

.nuevo-gasto img {
width: 5rem;
}
.nuevo-gasto img:hover {
cursor: pointer;
}

.modal {
position: absolute;
background-color: rgb(0 0 0 / 0.92);
top: 0;
left: 0;
right: 0;
bottom: 0;
}
.modal .cerrar-modal {
position: absolute;
right: 3rem;
top: 3rem;
width: 3rem;
height: 3rem;
}
.modal .cerrar-modal img {
width: 100%;
}

.modal .formulario {
max-width: 80rem;
width: 40rem;
transition-property: all;
transition-duration: 300ms;
transition-timing-function: ease-in;
opacity: 0;
}
.modal label {
color: var(--blanco);
}
body .modal {
overflow: hidden;
}

.modal .formulario.animar {
position: relative;
opacity: 1;
}

.modal .formulario.cerrar {
opacity: 0;
}

.modal label {
text-align: left;
}

.CircularProgressbar .CircularProgressbar-text {
font-size: 1rem !important;
}

/**\* SWIPE LIST OVERRIDES **/
.swipe-action\_\_leading {
background-color: var(--azul);
color: var(--blanco);
margin-bottom: 2rem;
}

.swipe-action\_\_trailing {
background-color: #db2777;
margin-bottom: 2rem;
color: var(--blanco);
}

.swipeable-list .swipe-action {
display: flex;
justify-content: center;
align-items: center;
font-size: 2.4rem;
text-align: right;
}

original
