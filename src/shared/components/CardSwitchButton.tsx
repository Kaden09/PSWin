interface CardSwitchButtonProps {
    title: string;
    selected?: boolean;
}

function CardSwitchButton({title, selected = false}: CardSwitchButtonProps) {
    return (
        <button className={`flex items-center justify-center rounded-lg py-2 w-full cursor-pointer ${selected ? "bg-contrast" : "bg-tertiary-background"}`}>
            {title}
        </button>
    )
}

export default CardSwitchButton;