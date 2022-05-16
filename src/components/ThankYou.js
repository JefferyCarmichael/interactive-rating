import thankyou from "../images/illustration-thank-you.svg";
const ThankYou = ({ score, setSurvey, setScore }) => {
  return (
    <section
      className="thankYou-card"
      onClick={() => {  
        // Reset rating card
        setSurvey(0);
        setScore(0)
      }}
    >
      <img className="thankYou-pic" src={thankyou} alt="Thankyou" />
      <p className="thankYou-score">You selected a {score} out of 5</p>
      <div>
      <h2 className="thanks">ThankYou!</h2>
      <p className="thankYou-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      </div>
    </section>
  );
};

export default ThankYou;
