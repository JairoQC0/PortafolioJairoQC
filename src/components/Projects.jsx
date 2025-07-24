function Projects() {
  const proyectos = [
    {
      titulo: "Chess Perú",
      descripcion: `Construí una aplicación web para registrar torneos, jugadores y emparejamientos de partidas. 
      Incluye formularios, validaciones, conexión con base de datos y panel de administración para gestión de resultados.`,
      tecnologias: "PHP, MySQL, HTML, CSS, JavaScript, Bootstrap",
      link: "https://github.com/tuusuario/chess-peru",
    },
    {
      titulo: "LearnIA",
      descripcion: `Participé en el desarrollo de una app que permite generar presentaciones en PowerPoint a partir de temas dados, 
      usando la API de ChatGPT. La solución integra backend con Django y Spring Boot, frontend con React y una app móvil con Kotlin.`,
      tecnologias: "Kotlin (Android), React, Django, Spring Boot, PostgreSQL",

      link: "https://github.com/tuusuario/learnia",
    },
    {
      titulo: "SPA de Películas",
      descripcion: `Desarrollé una aplicación de una sola página (SPA) para explorar películas mediante el consumo de una API REST externa. 
      Implementé rutas dinámicas con React Router, manejo de estado global con Zustand y peticiones HTTP con Axios.`,
      tecnologias: "React, Zustand, Axios, React Router, Tailwind",

      link: "https://github.com/tuusuario/spa-peliculas",
    },
  ];

  return (
    <section className="proyectos" id="proyectos">
      <h3
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "1.8rem",
        }}
      >
        Proyectos destacados
      </h3>
      <div className="grid-proyectos">
        {proyectos.map((p, index) => (
          <div className="card" key={index}>
            <h4>{p.titulo}</h4>
            <p>
              <strong>Tecnologías:</strong> {p.tecnologias}
            </p>
            <p>{p.descripcion}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                color: "#0d7400ff",
                textDecoration: "underline",
              }}
            >
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
