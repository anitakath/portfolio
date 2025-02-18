



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Short profile",
        description: " I am a successfully trained registered nurse with a passion for technology and sports. As a creative mind, I like to test different applications and program my own solutions to develop innovative applications that help me to better structure my everyday (sporting) life. In addition to my enthusiasm for sports and programming, I am interested in traveling and am actively learning Spanish. I enjoy reading non-fiction books - I'm currently immersed in Women Living Deliciously by Florence Given - and to switch off mentally and physically, I like to visit thermal baths, spas and massages or bake cakes and tarts. I'm also passionate about watching live sporting events and supporting various teams, such as the Adendorf Ice Hockey Club.",
        imagePath: "/images/about-me-section/pexels-minan1398-681637.jpg"
      },
      {
        id: 2,
        title: "Education and Career",
        educationsTable: [
          { name: "Care Certificate", educationsCertificatePath: "/images/education/pflege-urkunde.jpg" , description: ""},
          { name: "Care Reference", educationsCertificatePath: "/images/education/pflege-zeugnis.jpg", description: "" },
          { name: "Hygiene Mentor Certificate", educationsCertificatePath: "/images/education/hygienementorin.jpg", description: "" },
          { name: "Udemy Certificate in Next.js", educationsZertificatePath: " ", description: "" },
          { name: "School Certificate", educationsZertificatePath: " ", description: "" },
        ],
        description: null,
        imagePath: "/images/about-me-section/pexels-pixabay-433333.jpg",
      },
    
      {
        id: 3,
        title: "Programming skills",
        description: null,
        skillsTable: [
          {
              category: "Frontend Technologies",
              items: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "jQuery",
                  "React",
                  "Next.js",
                  "React Native",
                  "WordPress",
                  "TypeScript"
              ],
          },
          {
              category: "Build Tools & Package Managers",
              items: ["Webpack", "Babel", "npm / yarn"],
          },
          {
              category: "CSS Preprocessors & Frameworks",
              items: ["Bootstrap", "Material-UI", "SASS/SCSS"],
          },
          {
              category: "State Management",
              items: ["Redux", "MobX"]
          },
          {
              category: "Testing",
              items: ["React Testing Library", "Cypress", "Jest"]
          },
          {
              category: "Backend Technologies (in development)",
              items: ["Node.js", "Express.js", "Firebase", "Supabase", "Heroku"],
          },
          {
              category: "Databases",
              items: ["MongoDB (NoSQL)", "PostgreSQL (relational)"],
          },
          {
              category: "Cloud Services",
              items: ["Cloudinary"]
          },
          {
              category: "Project Management Tools",
              items: ["Jira", "Miro", "Confluence", "Microsoft Project"],
          },
          {
              category: "API Knowledge",
              items: ["RESTful APIs", "GraphQL"]
          },
          {
              category: "Performance Optimization",
              items: [
                  "Lazy Loading",
                  "Code Splitting"
              ]
          }
      ],
        imagePath: "/images/about-me-section/pexels-negativespace-169573.jpg",
      },
      {
        id: 4,
        title: "Future plans",
        description: null,
        descriptionTable: [
          {
              listItem: "Deepen and expand programming and project management skills",
              listItemDescription: "I plan to continuously enhance my programming skills through online courses and bootcamps. Additionally, I want to stay informed about current trends and technologies in computer science."
          },
          {
              listItem: "Certifications",
              listItemDescription: "I intend to acquire relevant certifications in software development and project management (e.g., Scrum Master, PMP) to substantiate my expertise and strengthen my professional qualifications."
          },
          {
              listItem: "Gain practical experience",
              listItemDescription: "I strive to gain practical experience in real projects to apply and further develop my knowledge."
          },
          {
              listItem: "Build a network",
              listItemDescription: "Building a professional network is important to me. I want to connect with professionals to learn from their experiences and promote potential collaborations."
          },
          {
              listItem: "Realize projects",
              listItemDescription: "I plan to implement my own projects to practically apply my skills in software development and project management."
          },
          {
              listItem: "Utilize interdisciplinary approaches",
              listItemDescription: "Through my experience in healthcare and sports, I aim to develop innovative solutions in healthcare. I intend to strategically use modern IT technologies."
          },
          {
              listItem: "Further develop soft skills",
              listItemDescription: "I will continue working on my communication skills to effectively collaborate with various stakeholders as a project manager and foster team dynamics."
          },
          {
              listItem: "Transfer athletic discipline",
              listItemDescription: "The discipline and commitment I developed in sports (e.g., pole dancing and figure skating) are qualities I want to bring into my new career as a programmer or project manager."
          },
          {
              listItem: "Training as a pole dance instructor",
              listItemDescription: "In March 2025, I will complete training as a pole dance instructor. This experience will help me strengthen my group management skills and convey complex content clearly."
          },
          {
              listItem: "Further develop own projects",
              listItemDescription: "I want to actively focus on the continuous development of my existing projects. This includes optimizing existing features as well as implementing new ideas to continuously improve quality and user-friendliness."
          }
      ],
        imagePath: "/images/about-me-section/pexels-pixabay-355952.jpg",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



