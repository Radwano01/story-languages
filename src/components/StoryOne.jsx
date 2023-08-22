import { useEffect, useState } from 'react';
import languageData from "../data/languageData.json"

const StoryOne = () =>  {
  const [language, setLanguage] = useState("english")
  const [content, setContent] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (language === "english") {
      setContent(languageData.storyone.english)
    } else if (language === "arabic") {
      setContent(languageData.storyone.arabic)
    } else if (language === "turkish") {
      setContent(languageData.storyone.turkish)
    }
  }, [language])

    // Calculate content for the current page
    const itemsPerPage = 500; // You can adjust this based on your preference
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageContent = content.content?.slice(startIndex, endIndex)

  return (
    <div className="App">
      <select className="language-selector" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
        <option value="turkish">Turkish</option>
      </select>

      <div className="content">
        <h1 className="title">{content.title}</h1>
        <p className="story">
          {currentPageContent}
        </p>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            disabled={currentPage === Math.ceil(content.content?.length / itemsPerPage)}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
        <button><a href="/">Back to selections</a></button>
      </div>
    </div>
  );
}

export default StoryOne;
