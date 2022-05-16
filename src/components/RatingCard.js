import star from "../images/icon-star.svg";

const RatingCard = ({score,setScore, survey, setSurvey}) => {
  const ratings = [1, 2, 3, 4, 5];
  const color = "var(--med-grey)";
  // const [score, setScore] = useState(0);

  return (
    <div className="rating-card">
      <div className="starDiv">
        <img className="starIcon" src={star} alt="star" />
      </div>
      <h2 className="rating-title"> How did we do?</h2>
      <p className="rating-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {/*Displays ratings selector buttons*/}
      <div className="rating-box">
        {ratings.map((rating) =>
          score !== rating ? (

            <button
              className="rating-button"
              key={rating}
              value={rating}
              onClick={() =>{ setScore(rating)}
              }
            >
              {rating}
            </button>
          ) : (
            <>
              {/*Turn button gray after selection*/}

              <button
                className="rating-button"
                key={rating}
                value={rating}
                style={{ backgroundColor: color }}
               
              >
                {rating}
              </button>
            </>
          )
        )}
      </div>

      <button 
        className="submit-button" 
        type="button"

        onClick={()=>{setSurvey(score)}}
        >
        SUBMIT
      </button>
    </div>
  );
};

export default RatingCard;
