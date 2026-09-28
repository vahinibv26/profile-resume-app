import { useLocation, useNavigate } from "react-router-dom";
import "./NavigationButtons.css";

function PageNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    "/UserInput",
    "/greeting",
    "/age",
    "/resume"
  ];

  const currentIndex = pages.indexOf(location.pathname);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  return (
    <div className="page-navigation">

      <button onClick={handlePrevious}>
        Previous
      </button>

      <button onClick={handleNext}>
        Next
      </button>

    </div>
  );
}

export default PageNavigation;