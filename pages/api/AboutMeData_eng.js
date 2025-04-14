



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Short profile",
        description:"I am a successfully trained certified health and nursing professional with a passion for technology and sports. As a creative thinker, I enjoy testing various applications and programming my own small solutions that help me better structure my (athletic) daily life. An example of this is my sports diary, which is listed in my portfolio below. In addition to my enthusiasm for sports and programming, I am interested in traveling and actively learning Spanish. I enjoy reading non-fiction books – currently, I am delving into 'Women Living Deliciously' by Florence Given. To unwind both mentally and physically, I like to visit thermal baths, spas, and massages or bake cakes and pastries. Additionally, I am passionate about watching live sports events and support various teams, such as the Adendorfer Ice Hockey Club.",
        imagePath: "/images/IMG_7201.jpg"
      },
      {
        id: 2,
        title: "Education and Career",
        educationsTable: [
          {
            name: "Udemy: Next.js 15 & React - The Complete Guide",
            subTitle: "by Maximilian Schwarzmüller",
            educationsCertificatePath: "/images/education/nextjs.jpg",
            educationsPlatformPath: "https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=KEEPLEARNING",
            description: "hier habe ich folgendes gelernt :)",
            descriptionTable: []
          },
          {
            name: "Udemy: React Complete Guide 2025 (incl. Next.js, Redux)",
            subTitle: "by Maximilian Schwarzmüller",
            educationsCertificatePath: "",
            educationsPlatformPath: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=KEEPLEARNING",
            description: "hier habe ich folgendes gelernt :)",
            descriptionTable: []
          },
          {
            name: "Udemy: Project Management Complete Course",
            subTitle: "by Benjamin Schollän and Tobias Becker",
            educationsCertificatePath: "/images/education/UC-eeb37b8e-91f3-4750-ae17-7365a6a8204f.jpg",
            educationsPlatformPath: "https://www.udemy.com/course/projektmanagement-komplettkurs/?couponCode=KEEPLEARNING",
            description: "hier habe ich folgendes gelernt :)",
            descriptionTable: []
          },
          { 
            name: "Care Certificate", 
            educationsCertificatePath: "/images/education/pflege-urkunde.jpg" , 
            description: "I received my nursing certificate in October 2019 after completing my training in healthcare and nursing. It was presented to me by the employees of the Municipal Hospital and the DRK Augusta Schwesternschaft in Lüneburg."},
          { 
            name: "Care Reference", 
            educationsCertificatePath: "/images/education/pflege-zeugnis.jpg", 
            descriptionTable: [
              {paragraph: "In addition to my general nursing certificate, I also received my nursing certificate with grades in October 2019. Both the practical and theoretical parts of my exams were graded 2."}
            ]
          },
          { 
            name: "Hygiene Mentor Certificate", 
            educationsCertificatePath: "/images/education/hygienementorin.jpg", 
            descriptionTable:[
              {paragraph: "In July 2021, I completed my training to become a hygiene mentor. This qualification enables me to conduct regular training and presentations for colleagues in a clinical context and to monitor and develop the hygiene processes on the ward." },
            ]
          },

          { name: "School Certificate", educationsZertificatePath: " ", description: "" },
        ],
        description: null,
        imagePath: "/images/about-me-section/pexels-cottonbro-4153146.jpg",
      },
    
      {
        id: 3,
        title: "Programming and project management skills",
        description: null,
        skillstable: [
            {
              title: "Programming",
              table: [
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
            ]
          },
          {
            title: "Project management",
            table: [
              {
                category: "Tools",
                items: [
                  "tool 1",
                  "tool 2"
                ]
              }


            ]
          }

        ],
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
      imagePath: "/images/about-me-section/pexels-shkrabaanthony-4348403.jpg",
     
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
        imagePath: "/images/about-me-section/pexels-polina-zimmerman-3782134.jpg",
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



