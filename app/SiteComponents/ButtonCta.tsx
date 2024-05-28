import { FaPhoneAlt } from "react-icons/fa";

export default function ButtonCta({ text }: { text: string }) {
    return (
        <div className="cta-button space-x-2 tracking-wide border border-2 group border-brand-orange text-brand-orange p-4 px-6 flex items-center rounded-lg shadow-xl hover:-translate-y-[1px] cursor-pointer active:translate-y-[1px] hover:bg-brand-orange">
            <FaPhoneAlt className="transition duration-300 ease-in-out group-hover:text-brand-blue  text-brand-orange" />
            <button className="my-auto uppercase font-bold font-poppins text-brand-orange text-sm group-hover:text-brand-blue transition duration-300 ease-in-out">
                {text}
            </button>
        </div>
    );
}
