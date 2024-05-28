export default function ProcessStep({number, heading, description}: {number: number, heading: string, description: string}) {
    return (
        <div className="process-step flex flex-col space-y-2 items-start lg:items-center lg:w-1/3">
        <div className="number text-4xl font-black translate-y-7  lg:-translate-x-0 -z-10 text-7xl gradient-text">
            {number}
        </div>
        <div className="heading text-3xl font-bold font-poppins text-brand-blue tracking-tighter">
            {heading}
        </div>
        <p className="description font-lato font-medium opacity-80 text-xl text-left lg:text-center">
            {description}
        </p>
    </div>
    )
}