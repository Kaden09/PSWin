import { advantage_data2 } from "../constants/advantage-data";
import AdvantageItem from "./AdvantageItem";
import AdvantageItemsList from "./AdvantageItemsList";
import PlayStationCard from "./PlayStationCard";

function PlayStationSection() {
    return (
        <div className="flex items-center justify-center gap-5 w-full">
            <PlayStationCard />
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-3xl">Что входит в подписку Deluxe?</h2>
                <AdvantageItemsList />
                <div className="flex flex-col gap-4">
                    {advantage_data2.map(item => (
                        <AdvantageItem key={item.title} icon={item.icon} title={item.title} className="flex items-center justify-center" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlayStationSection;