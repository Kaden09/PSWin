import { questions } from '../constants/questions';
import QuestionItem from './QuestionItem';

function QuestionItemsList() {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {questions.map((question) => (
        <QuestionItem key={question.title} title={question.title} desc={question.desc} />
      ))}
    </div>
  );
}

export default QuestionItemsList;
