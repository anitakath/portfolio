



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Perfil corto",
        description: " algo en española.",
      },
      {
        id: 2,
        title: "Educación y Carrera",
        description: "algo en español.",
      },
    
      {
        id: 3,
        title: "Conocimientos de programación",
        description: "alguna mierda española.",
      },
     
      {
        id: 4,
        title: "Planes de futuro",
        description: " alguna mierda española. ",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



