

export default function handler (req, res){

  if(req.method === "GET"){

    const aboutMeData = [
      {
        id: 1,
        title: "Kurzer Steckbrief",
        description: " in der Kürze liegt die Würze",
      },
      {
        id: 2,
        title: "Schullaufbahn",
        description:
          "Im Jahr 2002 wurde ich in Lüneburg eingeschult. Aufgrund von häufigen Umzügen und meinem Wechsel zwischen verschiedenen Schulformen, habe ich in meiner Schullaufbahn viele Schulwechsel erlebt. Dies führte dazu, dass ich ca alle zwei Jahre eine neue Schule besuchte. Trotz dieser Herausforderungen habe ich meine Schullaufbahn im Jahr 2015 erfolgreich abgeschlossen. Ich muss zugeben, dass ich keine Freundin der Schule war. Dennoch habe ich während meiner Schulzeit wichtige Fähigkeiten wie Anpassungsfähigkeit, Durchhaltevermögen und Selbstständigkeit entwickelt. Diese Erfahrungen haben mich gelehrt, flexibel zu sein und mich nicht nur schnell in neue Umgebungen einzufinden, sondern auch ein flexibles und vielseitiges Interesse für die verschiedensten Dinge zu haben. Es war und ist mir keine Schwierigkeit mich schnell in neue Gruppen oder neue Arbeitsweisen einzufinden und mit den unterschiedlichsten Menschen und Themen auszukommen - ich mag das sogar und bin stets offen für Neues. Meine Schulzeit hat mich zudem gelehrt, dass Erfolg nicht immer geradlinig verläuft und dass es wichtig ist, sich neuen Herausforderungen zu stellen. Ich bin stolz darauf, dass ich trotz der Schwierigkeiten meiner Schullaufbahn meinen Abschluss erfolgreich bestanden habe. Ich bin überzeugt davon, dass diese Erfahrungen mich zu einer belastbaren und angenehmen Kollegin machen, die auch in ungewohnten Situationen ihr Bestes gibt. Ich freue mich darauf, meine Fähigkeiten und mein Engagement in einem neuen beruflichen Umfeld unter Beweis stellen zu dürfen.",
      },
      {
        id: 3,
        title: "Berufliche Laufbahn",
        description:
          "Mein beruflicher Werdegang ist geprägt von vielfältigen Erfahrungen und einer stetigen Weiterentwicklung. Während meiner Schulzeit habe ich verschiedene Tätigkeiten ausgeübt, darunter begann es für ca 3 Jahre mit dem Austragen von Zeitungen. Es folgte das Kellnern in einer Eisdiele, da ich merkte, dass ich mehr mit Menschen zu tun haben wollte, sowie die Arbeit im Transportdienst eines Krankenhauses während der Sommerferien. Zusätzlich habe ich auf freiwilliger Basis Nachhilfeunterricht für Grundschüler in einer Gemeinschaftsunterkunft gegeben. Nach meinem Schulabschluss absolvierte ich von 2016 bis 2019 eine Ausbildung zur examinierten Gesundheits- und Krankenpflegerin am städtischen Klinikum Lüneburg. Diese Zeit war extrem prägent und lehrreich. Im Anschluss wechselte ich zum UKE, wo ich im Verlauf meine Weiterbildung zur Hygienementorin abschloss. In dieser Position war ich maßgeblich an der Kontrolle und Optimierung von Hygienestandards auf den Stationen beteiligt und habe Mitarbeiter im Bereich der Hygiene geschult. Auch habe ich, wenn auch nicht offiziell als weitergebildete Praxisanleiterin, des Öfteren Praktikanten und Auszubildende an die Hand genommen und mit ihnen gemeinsam den Pflegealltag gemeistert. Parallel zu meiner beruflichen Tätigkeit habe ich auf autodidaktischer Weised angefangen mir die Programmierung beizubringen, was meine Fähigkeiten und Interessen erweitert hat. Diese breite Palette an Erfahrungen hat mich dazu motiviert, nun den Schritt zu einem Jobwechsel zu gehen. Meine bisherige Laufbahn hat mir gezeigt, dass ich vielseitig einsetzbar bin und mich schnell in neue Aufgabenbereiche einarbeiten kann. Ich bin bereit für neue Herausforderungen und freue mich darauf, mein Wissen und meine Fähigkeiten in einem neuen beruflichen Umfeld einzubringen.",
      },
      {
        id: 4,
        title: "Programmierkenntnisse",
        description:
          "angefangen mit HTML, CSS, JavaScript, ging ich relativ schnell über zu React, Next.js und nun React-Native. Auch der Umgang mit den unterschiedlichsten Styling-Bibliotheken und Frameworks (SASS, Tailwind, ...) und Node.js bin ich vertraut.",
      },
      {
        id: 5,
        title: "Hobbies",
        description:
          "ich backe gern, liebe es mit meinem kleinen Cavalier King Charles Spaniel Marlin durch die Gegend zu spazieren, Ball zu spielen und zu kuscheln und ich brauche jeden Tag mindestens eine sportliche Betätigung. Dabei am liebsten tanzend. Ich tanze gern Contemporary, gehe regelmäßig zum Poledance und zum Eiskusntlauftraining. Zudem fahre ich viel Fahrrad, Snowboarde, fahre Ski und Wakeboarde sehr sehr gern. ",
      },
      {
        id: 6,
        title: "Zukunftspläne",
        description:
          "in der Zukufnt möchte ich einen doppelten Axel im Eiskunstlauf springen und die Bielmann-Piroutte drehen können. generell möchte ich mehr tanzen, meinen Körper flexibel und in Balance halten. Zudem ist mir stetige geistliche Entwicklung wichtig. ich möchte in einem jungen, dynamischen Team wirken, dabei auf Augenhöhe arbeiten und sich gegenseitig pushen. Ich möchte meine bisher erworbenen Fähigkeiten zeigen können und dabei die meiner Mitmenschen kennenlernen und übernehmen dürfen. Ich möchte vielfältig lernen und arbeiten. Gerne mehr reisen, in den Kontakt mit unterschiedlichen Kulturen treten und mein Spanisch weiter verbessern, gern offen dafür als nächstes Französisch zu lernen ",
      },
    ];


    return res.status(200).json(aboutMeData)
  }
}



