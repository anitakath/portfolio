



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Short profile",
        description: " some english shit.",
      },
      {
        id: 2,
        title: "Education and Career",
        description: "some english shit.",
      },
    
      {
        id: 3,
        title: "Programming skills",
        description: "some english shit.",
      },
      {
        id: 4,
        title: "Future plans",
        description: "some english shit.",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



