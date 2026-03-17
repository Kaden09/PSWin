function CardSwitchButton({ title }: { title: string }) {
  return (
    <button className="flex items-center justify-center rounded-lg py-2 w-full cursor-pointer bg-contrast">
      {title}
    </button>
  );
}

export default CardSwitchButton;
