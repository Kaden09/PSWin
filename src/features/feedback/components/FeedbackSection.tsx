import FeedbackItemsList from "./FeedbackItemsList";

function FeedbackSection() {
    return (
      <div className="flex flex-col max-w-full gap-10 items-center justify-center relative my-30">
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-5xl font-semibold">Отзывы наших клиентов</h2>
            <p className="text-xl text-secondary-font">Нам можно доверять!</p>
        </div>
        <div className={`flex flex-col gap-5 items-center relative w-[90vw] overflow-x-hidden`}>
          <FeedbackItemsList className="will-change-transform animate-carousel-right" />
          <div className="w-20 sm:w-30 md:w-40 h-full bg-linear-to-r from-primary-background to-transparent z-99 absolute left-0"></div>
          <div className="w-20 sm:w-30 md:w-40 h-full bg-linear-to-l from-primary-background to-transparent z-99 absolute right-0"></div>
        </div>
      </div>
    );
}

export default FeedbackSection;