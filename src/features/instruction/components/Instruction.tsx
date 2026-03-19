import { instruction_data } from '../constants/instruction-data';
import StepItem from './StepItem';

function Instruction() {
  return (
    <div className="flex gap-10 bg-secondary-background py-15 px-20 rounded-4xl border border-primary-border">
      {instruction_data.map((step) => (
        <StepItem icon={step.icon} step={step.step} title={step.title} desc={step.desc} />
      ))}
    </div>
  );
}

export default Instruction;
