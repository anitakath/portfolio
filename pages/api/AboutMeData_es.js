



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Perfil corto",
        description: " alguna mierda española.",
      },
      {
        id: 2,
        title: "Carrera escolar",
        description: "alguna mierda española.",
      },
      {
        id: 3,
        title: "Carrera profesional",
        description: "alguna mierda española.",
      },
      {
        id: 4,
        title: "Conocimientos de programación",
        description: "alguna mierda española.",
      },
      {
        id: 5,
        title: "Hobbies",
        description: " alguna mierda española.",
      },
      {
        id: 6,
        title: "Planes de futuro",
        description: " alguna mierda española. ",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



