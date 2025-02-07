



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Perfil corto",
        description: " algo en española.",
        imagePath: "/images/about-me-section/pexels-minan1398-681637.jpg"
      },
      {
        id: 2,
        title: "Educación y Carrera",
        description: "algo en español.",
        imagePath: "/images/about-me-section/pexels-pixabay-433333.jpg",
      },
    
      {
        id: 3,
        title: "Conocimientos de programación",
        description: "alguna mierda española.",
        imagePath: "/images/about-me-section/pexels-negativespace-169573.jpg",
      },
     
      {
        id: 4,
        title: "Planes de futuro",
        imagePath: "/images/about-me-section/pexels-pixabay-355952.jpg",
        description: " alguna mierda española. ",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



