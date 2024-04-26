import { FaPhoneAlt } from "react-icons/fa";
export default function ButtonCta({text}: {text: string}) {
    return (
        <div className="cta-button space-x-2 tracking-wider bg-brand-orange text-gray-200 py-2 px-4 flex items-center rounded-lg shadow-xl">
            <FaPhoneAlt color='#0F122F'/>
            <button className="my-auto uppercase font-bold font-poppins text-brand-blue">{text}</button>
        </div>
    )
}