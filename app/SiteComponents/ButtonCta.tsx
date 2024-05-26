import { FaPhoneAlt } from "react-icons/fa";
export default function ButtonCta({text}: {text: string}) {
    return (
        <div className="cta-button space-x-2 tracking-wide bg-brand-orange text-gray-200 p-4 px-6 flex items-center rounded-lg shadow-xl">
            <FaPhoneAlt color='#0F122F'/>
            <button className="my-auto uppercase font-bold font-poppins text-brand-blue text-sm">{text}</button>
        </div>
    )
}