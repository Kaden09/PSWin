import Instruction from './Instruction';

function InstructionSection() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-50">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-5xl font-semibold">Что делать после покупки?</h2>
        <p className="text-xl text-secondary-font">Простой путь от покупки до активации</p>
      </div>
      <Instruction />
    </div>
  );
}

export default InstructionSection;
