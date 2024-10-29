import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Main/Main.module.css";

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
                <p className={styles.description}>{item.description}</p>
              ) : (
                <>
                  <h1 className={styles.item_title}>{item.title}</h1>
                  <div className={styles.item_image}>
                    {/* render image here  */}
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
