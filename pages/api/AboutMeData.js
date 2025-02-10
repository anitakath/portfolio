

export default function handler (req, res){

  if(req.method === "GET"){

    const aboutMeData = [
      {
        id: 1,
        title: "Kurzer Steckbrief",
        description:"Ich bin eine erfolgreich ausgebildete examinierte Gesundheits- und Krankenpflegerin mit einer Leidenschaft für Technologie und Sport. Als kreativer Kopf teste ich gerne verschiedene Applikationen und programmiere eigene Lösungen, um innovative Anwendungen zu entwickeln, die mir helfen, meinen (sportlichen) Alltag besser zu strukturieren. Neben meiner Begeisterung für Sport und Programmierung interessiere ich mich fürs Reisen und lerne aktiv Spanisch. Ich lese gerne Sachbücher – aktuell vertiefe ich mich in Women Living Deliciously von Florence Given und um mental wie körperlich abzuschalten, besuche ich gerne Thermen, Spas und Massagen oder backe Kuchen und Torten. Außerdem schaue ich leidenschaftlich gern Live-Sportevents und unterstütze diverse Teams, wie z.B. den Adendorfer Eishockey Club.",
        descriptionTable: [
          {listItem: null,
            listItemDescription: null,
          }
        ],
        imagePath: "/images/about-me-section/pexels-minan1398-681637.jpg"
      },
      {
        id: 2,
        title: "Bildung und Karriere",
        imagePath: "/images/about-me-section/pexels-pixabay-433333.jpg",
        description:
          "Im Jahr 2002 wurde ich in Lüneburg eingeschult. Aufgrund von häufigen Umzügen und meinem Wechsel zwischen verschiedenen Schulformen, habe ich in meiner Schullaufbahn viele Schulwechsel erlebt. Dies führte dazu, dass ich ca alle zwei Jahre eine neue Schule besuchte. Trotz dieser Herausforderungen habe ich meine Schullaufbahn im Jahr 2015 erfolgreich abgeschlossen. Ich muss zugeben, dass ich keine Freundin der Schule war. Dennoch habe ich während meiner Schulzeit wichtige Fähigkeiten wie Anpassungsfähigkeit, Durchhaltevermögen und Selbstständigkeit entwickelt. Diese Erfahrungen haben mich gelehrt, flexibel zu sein und mich nicht nur schnell in neue Umgebungen einzufinden, sondern auch ein flexibles und vielseitiges Interesse für die verschiedensten Dinge zu haben. Es war und ist mir keine Schwierigkeit mich schnell in neue Gruppen oder neue Arbeitsweisen einzufinden und mit den unterschiedlichsten Menschen und Themen auszukommen - ich mag das sogar und bin stets offen für Neues. Meine Schulzeit hat mich zudem gelehrt, dass Erfolg nicht immer geradlinig verläuft und dass es wichtig ist, sich neuen Herausforderungen zu stellen. Ich bin stolz darauf, dass ich trotz der Schwierigkeiten meiner Schullaufbahn meinen Abschluss erfolgreich bestanden habe. Ich bin überzeugt davon, dass diese Erfahrungen mich zu einer belastbaren und angenehmen Kollegin machen, die auch in ungewohnten Situationen ihr Bestes gibt. Ich freue mich darauf, meine Fähigkeiten und mein Engagement in einem neuen beruflichen Umfeld unter Beweis stellen zu dürfen.",
      },
      {
        id: 3,
        title: "Programmierkenntnisse",
        imagePath: "/images/about-me-section/pexels-negativespace-169573.jpg",
        description:
          "Ich begann mit HTML, CSS und JavaScript und ging relativ schnell über zu React, Next.js sowie React Native. Auch der Umgang mit den unterschiedlichsten Styling-Bibliotheken und Frameworks (SASS, Tailwind usw.) sowie Node.js ist mir vertraut.",
        table: [
          {
            category: "Frontend-Technologien",
            items: [
              "HTML",
              "CSS",
              "JavaScript",
              "jQuery",
              "React",
              "Next.js",
              "React Native",
              "WordPress",
            ],
          },
          {
            category: "Build-Tools & Paketmanager",
            items: ["Webpack", "Babel", "npm / Yarn"],
          },
          {
            category: "CSS-Präprozessoren & Frameworks",
            items: ["Bootstrap", "Material-UI"],
          },
          { category: "State Management", items: ["Redux", "MobX"] },
          { category: "Testing", items: ["React Testing Library", "Cypress"] },
          {
            category: "Backend-Technologien (in Entwicklung)",
            items: ["Node.js", "Express.js", "Firebase", "Supabase", "Heroku"],
          },
          {
            category: "Datenbanken",
            items: ["MongoDB (NoSQL)", "PostgreSQL (relational)"],
          },
          { category: "Cloud-Dienste", items: ["Cloudinary"] },
          {
            category: "Projektmanagement-Tools",
            items: ["Jira", "Miro", "Confluence"],
          },
          { category: "API-Kenntnisse", items: ["RESTful APIs", "GraphQL"] },
        ],
        subdescription:
          "Ich sehe mich hauptsächlich als Frontend-Entwicklerin und Projektmanagerin, und bin motiviert, meine Kenntnisse im Backend weiter auszubauen, um ein umfassenderes Verständnis der gesamten Webentwicklung zu erlangen.",
      },
      {
        id: 4,
        title: "Zukunftspläne",
        imagePath: "/images/about-me-section/pexels-pixabay-355952.jpg",
        description:
          "in der Zukunft möchte ich einen doppelten Axel im Eiskunstlauf springen und die Bielmann-Piroutte drehen können. generell möchte ich mehr tanzen, meinen Körper flexibel und in Balance halten. Zudem ist mir stetige geistliche Entwicklung wichtig. ich möchte in einem jungen, dynamischen Team wirken, dabei auf Augenhöhe arbeiten und sich gegenseitig pushen. Ich möchte meine bisher erworbenen Fähigkeiten zeigen können und dabei die meiner Mitmenschen kennenlernen und übernehmen dürfen. Ich möchte vielfältig lernen und arbeiten. Gerne mehr reisen, in den Kontakt mit unterschiedlichen Kulturen treten und mein Spanisch weiter verbessern, gern offen dafür als nächstes Französisch zu lernen ",
        descriptionTable:[
          { listItem: "Porgrammier-, und Projektmanagementkentnisse vertiefen und ausbauen",
            listItemDescription: "Ich plane, meine Programmierkenntnisse kontinuierlich durch Onlinekurse und Bootcamps zu erweitern. Zudem möchte ich stets über aktuelle Trends und Technologien in der Informatik informiert bleiben."
          },
          { listItem: "Zertifizierungen",
            listItemDescription: "Ich beabsichtige, relevante Zertifizierungen im Bereich Softwareentwicklung und Projektmanagement (z.B. Scrum Master, PMP) zu erwerben, um meine Fachkompetenz zu untermauern und meine beruflichen Qualifikationen zu stärken."
          },
          { listItem: "Praktische Erfahrungen sammeln",
            listItemDescription: "Ich strebe danach, praktische Erfahrungen in realen Projekten zu sammeln, um mein Wissen anzuwenden und weiterzuentwickeln."
          },
          { listItem: "Netzwerk aufbauen",
            listItemDescription:"Der Aufbau eines professionellen Netzwerks ist mir wichtig. Ich möchte Kontakte zu Fachleuten knüpfen, um von deren Erfahrungen zu lernen und mögliche Kooperationen zu fördern."
          },
          { listItem: "Projekte realisieren",
            listItemDescription:"Ich plane, eigene Projekte umzusetzen, um meine Fähigkeiten in der Softwareentwicklung und im Projektmanagement praktisch anzuwenden."
          },
          {
            listItem: "Interdisziplinäre Ansätze nutzen",
            listItemDescription: "Durch meine Erfahrung in der Gesundheits- und Krankenpflege sowie im Sportbereich möchte ich innovative Lösungen im Gesundheitswesen entwickeln. Dabei beabsichtige ich, moderne IT-Technologien gezielt einzusetzen."
          },
          {
            listItem: "Soft Skills weiterentwickeln",
            listItemDescription: "Ich werde weiterhin an meinen kommunikativen Fähigkeiten arbeiten, um als Projektmanagerin effektiv mit verschiedenen Stakeholdern zusammenzuarbeiten und die Teamdynamik zu fördern."
          },
          { listItem:" Sportliche Disziplin übertragen ",
            listItemDescription:"Die Disziplin und das Engagement, die ich im Sport (z.B. Pole Dance und Eiskunstlauf) entwickelt habe, möchte ich auch in meiner neuen Karriere als Programmiererin oder Projektmanagerin einbringen."
          },
          {listItem: "Ausbildung zur Pole Dance Trainerin",
            listItemDescription: "Im März 2025 werde ich eine Ausbildung zur Pole Dance Trainerin absolvieren. Diese Erfahrung wird mir helfen, meine Fähigkeiten im Umgang mit Gruppen zu stärken und komplexe Inhalte verständlich zu vermitteln."
          },
          {listItem: "Eigene Projekte weiterentwickeln",
            listItemDescription: "Ich möchte mich aktiv der stetigen Weiterentwicklung meiner bereits bestehenden Projekte widmen. Dies umfasst die Optimierung bestehender Funktionen sowie die Implementierung neuer Ideen, um die Qualität und Benutzerfreundlichkeit kontinuierlich zu verbessern."
          }
        ]
      },
    ];


    return res.status(200).json(aboutMeData)
  }
}


/*

 {
        id: 3,
        title: "Berufliche Laufbahn",
        description:
          "2019 habe ich meine Ausbildung in der Gesundheits- und Krankenpflege am Städtischen Klinikum Lüneburg erfolgreich abgeschlossen. Nach meinem Wechsel zum Universitätsklinikum Hamburg Eppendorf war ich am Aufbau der Psychosomatischen Station beteiligt und entdeckte dabei meine Freude am Organisieren und projektbasierten Arbeiten. Zu meinen Aufgaben gehörte es, die Station mit medizinischen und pflegerischen Arbeitsmitteln auszustatten sowie die Einführung der elektronischen Patientenakte zu begleiten und anzupassen, was mein Interesse an der Programmierung weckte. Neben der ganzheitlichen Patientenbetreuung absolvierte ich Fortbildungen, die es mir ermöglichten, an Schulen zu unterrichten sowie angehende Hygienementoren des Krankenhauses zu schulen und zu prüfen. Zudem begleitete ich Kollegen auf Station in Fragen zur Krankenhaushygiene. Diese Erfahrungen haben mir gezeigt, dass mir auch das Präsentieren und Schulen von relevanten Themen viel Freude bereitet.",
        table: [
          { description: "Medizinisches und pflegerisches Fachwissen " },
          { description: "Verantwortungsübernahme " },
          { description: "Kommunikationsstärke " },
          {
            description:
              "Konzentriertes Arbeiten im multiprofessionellen Team und in Notfällen ",
          },
          { description: "Zeit- und Materialmanagement " },
          { description: "Kunden- und Patientenorientierung " },
          { description: "Problem- und Lösungsorientierung " },
        ],
        subdescription:
          "Mit dem Ziel eines Quereinstiegs in die Programmierung strebe ich danach, meine erworbenen Soft Skills – insbesondere Teamarbeit, Problemlösungsfähigkeiten und Kommunikationsstärke – in diesem neuen Bereich einzusetzen. Ich bin motiviert, meine analytischen Fähigkeiten weiterzuentwickeln und innovative Lösungen zu finden.",
      },

        {
        id: 5,
        title: "Hobbies",
        description:
          "ich backe gern, liebe es mit meinem kleinen Cavalier King Charles Spaniel Marlin durch die Gegend zu spazieren, Ball zu spielen und zu kuscheln und ich brauche jeden Tag mindestens eine sportliche Betätigung. Dabei am liebsten tanzend. Ich tanze gern Contemporary, gehe regelmäßig zum Poledance und zum Eiskusntlauftraining. Zudem fahre ich viel Fahrrad, Snowboarde, fahre Ski und Wakeboarde sehr sehr gern. ",
      },

*/


