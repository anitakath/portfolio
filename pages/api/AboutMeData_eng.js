



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Short profile",
        description: " some english shit.",
        imagePath: "/images/about-me-section/pexels-minan1398-681637.jpg"
      },
      {
        id: 2,
        title: "Education and Career",
        educationsTable: [
          { name: "Care Certificate", educationsZertificatePath: " " , description: ""},
          { name: "Care Reference", educationsZertificatePath: " ", description: "" },
          { name: "Hygiene Mentor Certificate", educationsZertificatePath: " ", description: "" },
          { name: "Udemy Certificate in Next.js", educationsZertificatePath: " ", description: "" },
          { name: "School Certificate", educationsZertificatePath: " ", description: "" },
      ],
        description: null,
        imagePath: "/images/about-me-section/pexels-pixabay-433333.jpg",
      },
    
      {
        id: 3,
        title: "Programming skills",
        description: "some english shit.",
        imagePath: "/images/about-me-section/pexels-negativespace-169573.jpg",
      },
      {
        id: 4,
        title: "Future plans",
        description: "some english shit.",
        imagePath: "/images/about-me-section/pexels-pixabay-355952.jpg",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



