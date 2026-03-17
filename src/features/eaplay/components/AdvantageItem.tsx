interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

function AdvantageItem({ icon, title, className = '' }: AdvantageItemProps) {
  return (
    <div className="flex flex-col gap-3 bg-secondary-background border border-primary-border rounded-2xl py-4 px-6">
      <div className="flex gap-3 items-center">
        <div className="bg-tertiary-background rounded-lg p-2">{icon}</div>
        <h3 className="">{title}</h3>
      </div>
      <p className="text-secondary-font">
        В коллекцию The Play List входят более 50 игр из ваших любимых франшиз вроде Need for Speed,
        Madden и Battlefield.
      </p>
    </div>
  );
}

export default AdvantageItem;
