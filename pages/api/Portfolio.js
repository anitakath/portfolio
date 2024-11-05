


export default function handler(req, res) {
  if (req.method === "GET") {
    const PortfolioData = [
      {
        id: 1,
        language: "ENGLISH",
        data: [
          {
            title: "Online Shop",
            description:
              " created with Next.js, data from a supabase table is fetched and displayed using getStaticProps (SEO!). The user can add products to their wish list or shopping cart ",
            subtitle: " blablabla",
            image: "/images/onlineshop.jpg",
            github_repo: "",
            netlify: "",
          },
          {
            title: "Sports diary",
            description:
              "based on Next.js, users can log in using supabase auth and record their sporting progress. The website supports users in analyzing their development and the function is to be added later as part of the development of a community.",
            subtitle: "blalalal",
            image: "/images/sports_diary.jpg",
            github_repo: "https://github.com/anitakath/dashboard",
            netlify: "https://sports-diary.netlify.app",
          },
          {
            title: "Best Friend App (BFA)",
            description:
              "a fun project that I developed with and for my best friend! We now have our own app, created with Expo CLI (React Native), which we can use to invite each other to events. Be it a concert, a restaurant visit or just a pyjama party ",
            subtitle: " blablabla",
            image: "",
            github_repo: "",
            netlify: "",
          },
        ],
      },
      {
        id: 2,
        language: "SPANISH",
        data: [
          {
            title: "Online Shop",
            description:
              "creado con Next.js, se obtienen los datos de una tabla supabase y se muestran con la ayuda de getStaticProps (¡SEO!). El usuario puede añadir productos a su lista de deseos o cesta de la compra",
            subtitle: "blablabla",
            image: "/images/onlineshop.jpg",
            github_repo: "",
            netlify: "",
          },
          {
            title: "Diario deportivo",
            description:
              "Basado en Next.js, el usuario puede iniciar sesión utilizando supabase auth y registrar su progreso deportivo. El sitio web ayuda al usuario a analizar su evolución y la función se añadirá más adelante como parte del desarrollo de una comunidad.",
            subtitle: " blalalal",
            image: "/images/sports_diary.jpg",
            github_repo: "https://github.com/anitakath/dashboard",
            netlify: "https://sports-diary.netlify.app",
          },
          {
            title: "Best Friend App (BFA)",
            description:
              " ¡un divertido proyecto que he desarrollado con y para mi mejor amiga! Ahora tenemos nuestra propia aplicación, creada con Expo CLI (React Native), que podemos utilizar para invitarnos mutuamente a eventos. Ya sea un concierto, una visita a un restaurante o simplemente una fiesta de pijamas. ",
            subtitle: " blablabla",
            image: "",
            github_repo: "",
            netlify: "",
          },
        ],
      },
      {
        id: 3,
        language: "GERMAN",
        data: [
          {
            title: "Online Shop",
            description:
              "erstellt mit Next.js werden mithilfe von getStaticProps (SEO!) Daten aus einer supabase table gefetcht und angezeigt. Der User kann Produkte auf seine Wunschliste, oder in seinen Warenkorb legen",
            subtitle: "blablabla",
            image: "/images/onlineshop.jpg",
            github_repo: "https://github.com/anitakath/onlineshop",
            netlify: "",
          },
          {
            title: "Sporttagebuch",
            description:
              "basierend auf Next.js kann der User sich mithilfe von supabase auth einloggen und seinen sportlichen Fortschritt festhalten. Die Website unterstützt den User bei der Analyse seiner Entwicklung und später soll die Funktion im Aufbau einer Community hinzugefügt werden.",
            subtitle: "blablblblb",
            image: "/images/sports_diary.jpg",
            github_repo: "https://github.com/anitakath/dashboard",
            netlify: "https://sports-diary.netlify.app",
          },
          {
            title: "Best Friend App (BFA)",
            description:
              " ein Spaßprojekt, das ich mit und für meine beste Freundin entwickelt habe! Wir haben nun unsere eigene App, erstellt mit Expo CLI (React Native), über die wir uns zu Events einladen können. Seien es Konzert -, oder Restaurantbesuche, oder einfach nur eine Pyjamaparty",
            subtitle: " blablabla",
            image: "",
            github_repo: "",
            netlify: "",
          },
        ],
      },
    ];

    return res.status(200).json(PortfolioData);
  }
}
