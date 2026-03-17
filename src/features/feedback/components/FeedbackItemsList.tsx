import { feedback_data } from "../constants/feedback";
import FeedbackItem from "./FeedbackItem";

function FeedbackItemsList({className}: {className: string}) {
    return (
      <div className={`flex mx-auto overflow-hidden`}>
        <div className={`flex gap-5 pr-5 ${className}`}>
          {feedback_data.map((item, index) => (
            <FeedbackItem key={index} text={item.text} username={item.username} date={item.date} />
          ))}
        </div>
        <div aria-hidden className={`flex gap-5 pr-5 ${className}`}>
          {feedback_data.map((item, index) => (
            <FeedbackItem key={index} text={item.text} username={item.username} date={item.date} />
          ))}
        </div>
      </div>
    );
}

export default FeedbackItemsList;