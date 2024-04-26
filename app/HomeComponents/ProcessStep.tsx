export default function ProcessStep({number, heading, description}: {number: number, heading: string, description: string}) {
    return (
        <div className="process-step flex flex-col space-y-2 items-center py-28 w-[300px] flex-1">
            <div className="number text-7xl font-black text-brand-blue">{number}</div>
            <div className="heading text-3xl">{heading}</div>
            <div className="description font-lato font-light text-xl">{description}</div>
        </div>
    )
}