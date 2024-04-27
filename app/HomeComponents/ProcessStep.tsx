export default function ProcessStep({number, heading, description}: {number: number, heading: string, description: string}) {
    return (
        <div className="process-step flex flex-col space-y-2 items-start lg:items-center lg:w-[300px] flex-1">
            <div className="number text-4xl font-black text-brand-blue">{number}</div>
            <div className="heading text-3xl">{heading}</div>
            <div className="description font-lato font-light text-xl text-left lg:text-center">{description}</div>
        </div>
    )
}