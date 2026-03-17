interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

function AdvantageItem({ icon, title, className = '' }: AdvantageItemProps) {
  return (
    <div className="flex gap-3 bg-secondary-background border border-primary-border rounded-xl py-2 px-4">
      <span>{icon}</span>
      <h3 className="">{title}</h3>
    </div>
  );
}

export default AdvantageItem;
