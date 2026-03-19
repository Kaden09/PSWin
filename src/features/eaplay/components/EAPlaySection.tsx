import AdvantageItemsList from "./AdvantageItemsList";
import EAPlayCard from "./EAPlayCard";

function EAPlaySection() {
    return (
      <div className="flex items-end justify-center gap-5 max-w-300">
        <EAPlayCard />
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-3xl">Что входит в подписку Deluxe?</h2>
          <AdvantageItemsList />
        </div>
      </div>
    );
}

export default EAPlaySection;