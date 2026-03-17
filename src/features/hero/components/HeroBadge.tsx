import { Sparkles } from "lucide-react";

function HeroBadge() {
    return (
        <div className="flex w-fit gap-2 text-contrast bg-contrast/10 items-center justify-center py-2 px-4 rounded-full border border-contrast">
            <Sparkles />
            <span className="text-sm font-semibold">Лучшие игровые подписки</span>
        </div>
    )
}

export default HeroBadge;