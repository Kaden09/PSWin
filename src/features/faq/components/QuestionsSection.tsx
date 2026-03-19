import QuestionItemsList from './QuestionItemsList';

function QuestionsSection() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-semibold">Вопросы и ответы</h2>
        <p className="text-secondary-font text-lg">
          Самые частые вопросы наших клиентов и подробные разъяснения
        </p>
      </div>
      <QuestionItemsList />
    </div>
  );
}

export default QuestionsSection;
