function StepItem({ icon, step, title, desc }: Step) {
  return (
    <div className="flex flex-col gap-4 max-w-80">
      <div className="flex gap-2 items-center">
        <div className="bg-tertiary-background rounded-lg p-4">{icon}</div>
        <h2 className="text-6xl text-transparent font-black bg-linear-to-b from-secondary-background to-tertiary-background bg-clip-text">
          {step}
        </h2>
        {step !== '03' && (
          <hr className="w-full h-px border-none ml-7 bg-linear-to-r from-transparent to-contrast/90" />
        )}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-secondary-font">{desc}</p>
      </div>
    </div>
  );
}

export default StepItem;
