



export default function handler(req, res) {
  if (req.method === "GET") {
    const aboutMeData = [
      {
        id: 1,
        title: "Perfil corto",
        description: "Soy una profesional de la salud y enfermería certificada con una pasión por la tecnología y el deporte. Como persona creativa, disfruto probando diversas aplicaciones y programando mis propias pequeñas soluciones que me ayudan a estructurar mejor mi vida diaria (atlética). Un ejemplo de esto es mi diario deportivo, que está listado en mi portafolio más abajo. Además de mi entusiasmo por el deporte y la programación, me interesa viajar y estoy aprendiendo español activamente. Me gusta leer libros de no ficción; actualmente estoy profundizando en 'Women Living Deliciously' de Florence Given. Para desconectar mental y físicamente, me gusta visitar termas, spas y recibir masajes o hornear pasteles y tartas. Además, soy apasionada de ver eventos deportivos en vivo y apoyo a varios equipos, como el Adendorfer Eishockey Club",
        imagePath: "/images/about-me-section/pexels-minan1398-681637.jpg"
      },
      {
        id: 2,
        title: "Educación y Carrera",
        educationsTable: [
          {
            name:"Udemy: Next.js 15 & React - The Complete Guide",
            subTitle: "de Maximilian Schwarzmüller",
            educationsCertificatePath:"/images/education/nextjs.jpg",
            educationsPlatformPath: "https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=KEEPLEARNING",
            description: "hier habe ich folgendes gelernt :)"
          },
          {
            name: "Udemy: React Complete Guide 2025 (incl. Next.js, Redux)",
            subTitle: "by Maximilian Schwarzmüller",
            educationsCertificatePath: "",
            educationsPlatformPath: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=KEEPLEARNING",
            description: "hier habe ich folgendes gelernt :)"
          },
          {
            name: "Udemy: Curso completo de gestión de proyectos",
            subTitle: "por Benjamin Schollän and Tobias Becker",
            educationsCertificatePath: "/images/education/UC-eeb37b8e-91f3-4750-ae17-7365a6a8204f.jpg",
            educationsPlatformPath: "https://www.udemy.com/course/projektmanagement-komplettkurs/?couponCode=KEEPLEARNING",
            description: "hier habe ich folgendes gelernt :)"
          },
          { 
            name: "Certificado de Cuidado", 
            educationsCertificatePath: "/images/education/pflege-urkunde.jpg", 
            description: "Recibí mi certificado de enfermería en octubre de 2019 tras completar mi formación en asistencia sanitaria y enfermería. Me lo entregaron los empleados del Hospital Municipal y de la DRK Augusta Schwesternschaft de Luneburgo." },
          { 
            name: "Certificado de Cuidado Profesional", 
            educationsCertificatePath: "/images/education/pflege-zeugnis.jpg" , 
            description: "Además de mi certificado de enfermería general, también recibí mi certificado de enfermería con calificaciones en octubre de 2019. Tanto la parte práctica como la teórica de mis exámenes obtuvieron una calificación de 2"},
          { 
            name: "Certificado de Mentora en Higiene", 
            educationsCertificatePath: "/images/education/hygienementorin.jpg", 
            description: "En julio de 2021, completé mi formación para convertirme en mentora de higiene. Esta cualificación me permite realizar sesiones de formación periódicas y presentaciones para compañeros en un contexto clínico, así como supervisar y seguir desarrollando los procesos de higiene en la sala." },
          { name: "Certificado Escolar", educationsZertificatePath: " ", description: ""},
      ],
        description: null,
        imagePath: "/images/about-me-section/pexels-pixabay-433333.jpg",
      },
    
      {
        id: 3,
        title: "Conocimientos de programación y gestión de proyectos",
        description: null,
        skillstable: [
          {
            title: 'Programación',
            table: [
              {
                category: "Tecnologías Frontend",
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
                  category: "Herramientas de Construcción y Gestores de Paquetes",
                  items: ["Webpack", "Babel", "npm / yarn"],
              },
              {
                  category: "Preprocesadores y Frameworks CSS",
                  items: ["Bootstrap", "Material-UI", "SASS/SCSS"],
              },
              {
                  category: "Gestión del Estado",
                  items: ["Redux", "MobX"]
              },
              {
                  category: "Pruebas",
                  items: ["React Testing Library", "Cypress", "Jest"]
              },
                {
                    category: 'Tecnologías Backend (en desarrollo)',
                    items: ["Node.js", 'Express.js', 'Firebase', 'Supabase', 'Heroku'],
                },
                {
                    category: 'Bases de Datos',
                    items: ['MongoDB (NoSQL)', 'PostgreSQL (relacional)'],
                },
                {
                  category:'Servicios en la Nube',
                  items:['Cloudinary']
              },
              {
                  category:'Herramientas de Gestión de Proyectos',
                  items:['Jira', 'Miro', 'Confluence', 'Microsoft Project'],
              },
              {
                  category:'Conocimientos de API',
                  items:['RESTful APIs', 'GraphQL']
              },
              {
                  category:'Optimización del Rendimiento',
                  items:[
                      'Carga Perezosa',
                      'División de Código'
                  ]
              }
            ]
          },
          {
            title: "Gestión de proyectos",
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
              category: "Tecnologías Frontend",
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
              category: "Herramientas de Construcción y Gestores de Paquetes",
              items: ["Webpack", "Babel", "npm / yarn"],
          },
          {
              category: "Preprocesadores y Frameworks CSS",
              items: ["Bootstrap", "Material-UI", "SASS/SCSS"],
          },
          {
              category: "Gestión del Estado",
              items: ["Redux", "MobX"]
          },
          {
              category: "Pruebas",
              items: ["React Testing Library", "Cypress", "Jest"]
          },
          {
              category: 'Tecnologías Backend (en desarrollo)',
              items: ["Node.js", 'Express.js', 'Firebase', 'Supabase', 'Heroku'],
          },
          {
              category: 'Bases de Datos',
              items: ['MongoDB (NoSQL)', 'PostgreSQL (relacional)'],
          },
          {
            category:'Servicios en la Nube',
            items:['Cloudinary']
        },
        {
            category:'Herramientas de Gestión de Proyectos',
            items:['Jira', 'Miro', 'Confluence', 'Microsoft Project'],
        },
        {
            category:'Conocimientos de API',
            items:['RESTful APIs', 'GraphQL']
        },
        {
            category:'Optimización del Rendimiento',
            items:[
                'Carga Perezosa',
                'División de Código'
            ]
        }
      ],
        imagePath: "/images/about-me-section/pexels-negativespace-169573.jpg",
      },
     
      {
        id: 4,
        title: "Planes de futuro",
        imagePath: "/images/about-me-section/pexels-pixabay-355952.jpg",
        description: null,
        descriptionTable: [
          {
              listItem: "Profundizar y ampliar conocimientos en programación y gestión de proyectos",
              listItemDescription: "Planeo mejorar continuamente mis habilidades de programación a través de cursos en línea y bootcamps. Además, quiero mantenerme informado sobre las tendencias y tecnologías actuales en informática."
          },
          {
              listItem: "Certificaciones",
              listItemDescription: "Tengo la intención de adquirir certificaciones relevantes en desarrollo de software y gestión de proyectos (por ejemplo, Scrum Master, PMP) para respaldar mi experiencia y fortalecer mis calificaciones profesionales."
          },
          {
              listItem: "Ganar experiencia práctica",
              listItemDescription: "Aspiro a obtener experiencia práctica en proyectos reales para aplicar y desarrollar aún más mis conocimientos."
          },
          {
              listItem: "Construir una red",
              listItemDescription: "Construir una red profesional es importante para mí. Quiero conectar con profesionales para aprender de sus experiencias y promover posibles colaboraciones."
          },
          {
              listItem: "Realizar proyectos",
              listItemDescription: "Planeo implementar mis propios proyectos para aplicar prácticamente mis habilidades en desarrollo de software y gestión de proyectos."
          },
          {
              listItem: "Utilizar enfoques interdisciplinarios",
              listItemDescription: "A través de mi experiencia en el cuidado de la salud y el deporte, pretendo desarrollar soluciones innovadoras en el ámbito sanitario. Tengo la intención de utilizar estratégicamente tecnologías modernas de TI."
          },
          {
              listItem: "Desarrollar habilidades blandas",
              listItemDescription: "Seguiré trabajando en mis habilidades comunicativas para colaborar eficazmente con diversas partes interesadas como gerente de proyectos y fomentar la dinámica del equipo."
          },
          {
            listItem:"Transferir disciplina deportiva ",
            listItemDescription:"La disciplina y el compromiso que he desarrollado en el deporte (por ejemplo, pole dance y patinaje artístico) son cualidades que quiero llevar a mi nueva carrera como programadora o gerente de proyectos."
        },
        {
            listItem:"Formación como instructora de pole dance",
            listItemDescription:"En marzo de 2025 completaré la formación como instructora de pole dance. Esta experiencia me ayudará a fortalecer mis habilidades en la gestión de grupos y transmitir contenido complejo de manera clara."
        },
        {
            listItem:"Desarrollar más mis propios proyectos",
            listItemDescription:"Quiero centrarme activamente en el desarrollo continuo de mis proyectos existentes. Esto incluye optimizar funciones existentes e implementar nuevas ideas para mejorar continuamente la calidad y la facilidad de uso."
        }
      ],
      },
    ];

    return res.status(200).json(aboutMeData);
  }
}



