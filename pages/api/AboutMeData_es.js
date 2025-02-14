



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
        educationsTable: [
          { name: "Certificado de Cuidado", educationsZertificatePath: " ", description: "" },
          { name: "Certificado de Cuidado Profesional", educationsZertificatePath: " " , description: ""},
          { name: "Certificado de Mentora en Higiene", educationsZertificatePath: " ", description: "" },
          { name: "Certificado de Udemy en Next.js", educationsZertificatePath: " ", description: "" },
          { name: "Certificado Escolar", educationsZertificatePath: " ", description: ""},
      ],
        description: null,
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



