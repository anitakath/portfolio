import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Main/Main.module.css";
import Image from "next/image";
import Link from "next/link";
//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub} from "react-icons/fa";
import { faN } from "@fortawesome/free-solid-svg-icons";


const Portfolio = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const [portfolioData, setPortfolioData] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(null); 

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/api/Portfolio");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Filter the data based on the current language
        const filteredData = data.find(
          (item) => item.language === currentLanguage
        );
        if (filteredData) {
          setPortfolioData(filteredData.data);
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, [currentLanguage]);

  const handleItemClick = (index) => {
    // toggle the active item index
    setActiveItemIndex(activeItemIndex === index ? null : index);
  };

  console.log(portfolioData)

  return (
    <div className="sub_container" id="portfolio">
      <div className={styles.portfolio_container}>
        <h1 className={styles.portfolio_title}>PORTFOLIO</h1>
        <div className={styles.portfolio_field}>
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={styles.portfolio_item}
              onClick={() => handleItemClick(index)}
            >
              {activeItemIndex === index ? (
                <div className={styles.description}>
                  <p className={styles.description_p}>{item.description}</p>
                  <p> - </p>
                  <div className={styles.link_div}>
                    <FaGithub />
                    <Link
                      href={item.github_repo}
                      className={styles.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </Link>
                  </div>

                  <div className={styles.link_div}>
                    <FontAwesomeIcon icon={faN} />
                    <Link
                      href={item.netlify}
                      className={styles.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.span}>etlify</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className={styles.item_title}>{item.title}</h1>
                  <div className={styles.item_image}>
                    {/* render image here  */}
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="responsive"
                        width={1}
                        height={1}
                        className={styles.portfolio_image}
                      />
                    )}
                  </div>
                  <p className={styles.item_subtitle}>{item.subtitle}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
