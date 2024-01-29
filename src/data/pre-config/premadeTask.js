const premadeTask = (taskOption) => {
    const goals = {
      party: {
        tasks: [
          {
            nombre: "Presupuesto",
            dificultad: "3",
            descripcion: "Planificación financiera",
            id: "aB2cD3eF4gH5iJ6kL7",
          },
          {
            nombre: "Decoraciones",
            dificultad: "1",
            descripcion: "Compra de elementos decorativos",
            id: "qR1sT2uV3wX4yZ5aB6",
          },
          {
            nombre: "Pastel y Menú",
            dificultad: "2",
            descripcion: "Elección de pastel y menú",
            id: "C7dE8fG9hI0jK1lM2",
          },
          {
            nombre: "Lista Invitados",
            dificultad: "1",
            descripcion: "Creación de lista de invitados",
            id: "N3oP4qR5sT6uV7wX8",
          },
          {
            nombre: "Actividades",
            dificultad: "3",
            descripcion: "Planificación de actividades",
            id: "yZ9aB0cD1eF2gH3iJ4",
          },
          {
            nombre: "Invitaciones",
            dificultad: "2",
            descripcion: "Envío de invitaciones",
            id: "kL5mN6oP7qR8sT9uV0",
          },
          {
            nombre: "Compras",
            dificultad: "1",
            descripcion: "Compra de suministros",
            id: "wX1yZ2aB3cD4eF5",
          },
          {
            nombre: "Decorar Espacio",
            dificultad: "3",
            descripcion: "Decoración del lugar",
            id: "gH6iJ7kL8mN9oP0",
          },
          {
            nombre: "Reservas",
            dificultad: "2",
            descripcion: "Reservas de servicios",
            id: "qR1sT2uV3wX4yZ5",
          },
          {
            nombre: "Comunicarse con Invitados",
            dificultad: "1",
            descripcion: "Confirmación de asistencia",
            id: "C7dE8fG9hI0jK1lM",
          },
          {
            nombre: "Mesa Dulces",
            dificultad: "2",
            descripcion: "Preparación de la mesa de dulces",
            id: "N3oP4qR5sT6uV7wX",
          },
          {
            nombre: "Sorpresas",
            dificultad: "1",
            descripcion: "Preparación de sorpresas",
            id: "yZ9aB0cD1eF2gH3iJ",
          },
          {
            nombre: "Descanso",
            dificultad: "3",
            descripcion: "Tiempo para reposar",
            id: "kL5mN6oP7qR8sT9uV",
          },
          {
            nombre: "Piñata",
            dificultad: "2",
            descripcion: "Preparación de la piñata",
            id: "wX1yZ2aB3cD4eF5",
          },
          {
            nombre: "Agradecimiento",
            dificultad: "3",
            descripcion: "Despedida de invitados",
            id: "gH6iJ7kL8mN9oP0",
          },
        ],
      },
      study: {
        tasks: [
          {
            nombre: "Previsualizar Proyecto",
            dificultad: "3",
            descripcion: "Análisis y visión general",
            id: "aB2cD3eF4gH5iJ6kL7",
          },
          {
            nombre: "Crear Anteproyecto",
            dificultad: "1",
            descripcion: "Esbozo inicial del proyecto",
            id: "qR1sT2uV3wX4yZ5aB6",
          },
          {
            nombre: "Seleccionar Lenguajes",
            dificultad: "2",
            descripcion: "Elegir tecnologías a utilizar",
            id: "C7dE8fG9hI0jK1lM2",
          },
          {
            nombre: "Diseñar Base de Datos",
            dificultad: "1",
            descripcion: "Crear esquema de la base de datos",
            id: "N3oP4qR5sT6uV7wX8",
          },
          {
            nombre: "Backend: Configuración",
            dificultad: "3",
            descripcion: "Configurar entorno backend",
            id: "yZ9aB0cD1eF2gH3iJ4",
          },
          {
            nombre: "Conexión Frontend y Backend",
            dificultad: "2",
            descripcion: "Establecer comunicación",
            id: "kL5mN6oP7qR8sT9uV0",
          },
          {
            nombre: "Implementar Funcionalidades",
            dificultad: "1",
            descripcion: "Desarrollar características clave",
            id: "wX1yZ2aB3cD4eF5",
          },
          {
            nombre: "Diseñar Interfaz de Usuario",
            dificultad: "3",
            descripcion: "Crear interfaz atractiva",
            id: "gH6iJ7kL8mN9oP0",
          },
          {
            nombre: "Pruebas y Depuración",
            dificultad: "2",
            descripcion: "Evaluar y corregir errores",
            id: "qR1sT2uV3wX4yZ5",
          },
          {
            nombre: "Documentación del Proyecto",
            dificultad: "1",
            descripcion: "Crear documentación completa",
            id: "C7dE8fG9hI0jK1lM",
          },
          {
            nombre: "Preparar Presentación",
            dificultad: "2",
            descripcion: "Elaborar material para defensa",
            id: "N3oP4qR5sT6uV7wX",
          },
          {
            nombre: "Defensa del Proyecto",
            dificultad: "1",
            descripcion: "Presentar y defender el trabajo",
            id: "yZ9aB0cD1eF2gH3iJ",
          },
          {
            nombre: "Despliegue del Proyecto",
            dificultad: "3",
            descripcion: "Implementar en entorno de producción",
            id: "kL5mN6oP7qR8sT9uV",
          },
          {
            nombre: "Evaluación Post-Proyecto",
            dificultad: "2",
            descripcion: "Analizar resultados y mejoras",
            id: "wX1yZ2aB3cD4eF5",
          },
          {
            nombre: "Celebrar Logros",
            dificultad: "3",
            descripcion: "Festejar el éxito del proyecto",
            id: "gH6iJ7kL8mN9oP0",
          },
        ],
      },
      daily: {
        tasks: [
          {
            nombre: "Desayuno Saludable",
            dificultad: "1",
            descripcion: "Comenzar el día con una comida nutritiva",
            id: "eF7gH8iJ9kL0mN1",
          },
          {
            nombre: "Ejercicio Matutino",
            dificultad: "2",
            descripcion: "Realizar actividad física para energizarse",
            id: "qR6sT5uV4wX3yZ2",
          },
          {
            nombre: "Aprender Algo Nuevo",
            dificultad: "2",
            descripcion: "Dedicar tiempo a la adquisición de conocimientos",
            id: "aB1cD0eF9gH8iJ7",
          },
          {
            nombre: "Comida Saludable",
            dificultad: "1",
            descripcion: "Preparar una comida equilibrada",
            id: "kL6mN7oP8qR9sT0",
          },
          {
            nombre: "Tiempo Creativo",
            dificultad: "2",
            descripcion: "Explorar actividades artísticas o creativas",
            id: "uV1wX2yZ3aB4cD5",
          },
          {
            nombre: "Compartir con Seres Queridos",
            dificultad: "2",
            descripcion: "Disfrutar de tiempo con amigos o familiares",
            id: "eF0gH1iJ2kL3mN4",
          },
          {
            nombre: "Relajación Nocturna",
            dificultad: "1",
            descripcion: "Prepararse para una noche de descanso",
            id: "qR5sT4uV6wX7yZ8",
          },
          {
            nombre: "Salida Recreativa",
            dificultad: "2",
            descripcion: "Disfrutar de actividades recreativas al aire libre",
            id: "aB9cD8eF7gH6iJ5",
          },
          {
            nombre: "Cena Especial",
            dificultad: "2",
            descripcion: "Preparar una cena especial",
            id: "kL4mN3oP2qR1sT0",
          },
          {
            nombre: "Noche de Película",
            dificultad: "1",
            descripcion: "Disfrutar de una película o serie",
            id: "uV9wX8yZ7aB6cD5",
          },
          {
            nombre: "Hobby y Relajación",
            dificultad: "2",
            descripcion: "Dedicar tiempo a pasatiempo y relajación",
            id: "eF4gH3iJ2kL1mN0",
          },
          {
            nombre: "Desayuno Tranquilo",
            dificultad: "1",
            descripcion: "Iniciar el día con calma",
            id: "qR5sT6uV7wX8yZ9",
          },
          {
            nombre: "Meditación Matutina",
            dificultad: "2",
            descripcion: "Practicar meditación para la paz mental",
            id: "aB4cD3eF2gH1iJ0",
          },
          {
            nombre: "Pasatiempo Relajante",
            dificultad: "2",
            descripcion: "Dedicar tiempo a un pasatiempo relajante",
            id: "kL9mN8oP7qR6sT5",
          },
          {
            nombre: "Preparación para el Lunes",
            dificultad: "2",
            descripcion: "Organizar y prepararse para la semana",
            id: "uV4wX3yZ2aB1cD0",
          },
        ],
      },
    };
  };

  

  







// const premadeTask = (taskOption) => {
//     const goals = { 
//        party: {},
//        study: {},
//        daily: {} 
//     };
// };
