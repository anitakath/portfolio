



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
        title: "School career",
        description: "some english shit.",
      },
      {
        id: 3,
        title: "Professional career",
        description: "some english shit.",
      },
      {
        id: 4,
        title: "Programming skills",
        description: "some english shit.",
      },
      {
        id: 5,
        title: "Hobbies",
        description: "some english shit. ",
      },
      {
        id: 6,
        title: "Future plans",
        description: "some english shit.",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



