interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}

function AdvantageItem({ icon, title, desc, className = '' }: AdvantageItemProps) {
  return (
    <div className="flex flex-col gap-3 bg-secondary-background border border-primary-border rounded-2xl py-4 px-6">
      <div className="flex gap-3 items-center">
        <div className="bg-tertiary-background rounded-lg p-2">{icon}</div>
        <h3 className="">{title}</h3>
      </div>
      <p className="text-secondary-font">
        {desc}
      </p>
    </div>
  );
}

export default AdvantageItem;
