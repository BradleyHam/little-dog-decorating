export default function ProcessStep({number, heading, description}: {number: number, heading: string, description: string}) {
    return (
        <div className="process-step flex flex-col space-y-2 items-start lg:items-center lg:w-[300px] flex-1">
            <div className="number text-4xl font-black text-brand-orange translate-y-7 lg:translate-y-0 lg:-translate-x-0 -z-10 text-5xl">{number}</div>
            <div className="heading text-3xl font-bold font-poppins text-brand-blue tracking-tight">{heading}</div>
            <p className="description  font-medium opacity-80 text-xl text-left lg:text-center text-brand-blue">{description}</p>
        </div>
    )
}