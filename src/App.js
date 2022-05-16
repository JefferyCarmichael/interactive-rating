import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [survey, setSurvey] = useState(0);
  return (
    <>
      <div className="app">
        <div className="rating-container">
          {survey === 0 ? (
            <RatingCard
              score={score}
              setScore={setScore}
              survey={survey}
              setSurvey={setSurvey}
            />
          ) : (
            <ThankYou score={score} setSurvey={setSurvey} setScore={setScore} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
