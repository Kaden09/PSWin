import { advantage_data } from "../constants/advantage-data";
import AdvantageItem from "./AdvantageItem";

function AdvantageItemsList() {
    return (
      <div className="grid grid-cols-2 grid-rows-4 gap-4">
        {advantage_data.map((item) => (
          <AdvantageItem key={item.title} icon={item.icon} title={item.title} />
        ))}
      </div>
    );
}

export default AdvantageItemsList;