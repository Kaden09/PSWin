import { advantage_data } from "../constants/advantage-data";
import AdvantageItem from "./AdvantageItem";

function AdvantageItemsList() {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        {advantage_data.map((item) => (
          <AdvantageItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    );
}

export default AdvantageItemsList;