import { FeedbackItem } from "@/features/feedback";
import { HeroSection } from "@/features/hero";
import { AdvantageItem } from "@/features/eaplay";
import { Gamepad } from "lucide-react";

function Main() {
    return (
        <main>
            <HeroSection />
            <AdvantageItem icon={<Gamepad />} title="Title"/>
            <FeedbackItem />
        </main>
    )
}

export default Main;