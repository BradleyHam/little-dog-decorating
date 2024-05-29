import { FaPhoneAlt } from "react-icons/fa";

export default function ButtonCta({ text }: { text: string }) {
    return (
        <div className="cta-button space-x-2 tracking-wide border border-2 group border-brand-orange text-brand-orange p-4 px-6 flex items-center rounded-lg shadow-xl active:shadow-md hover:-translate-y-[1px] cursor-pointer active:translate-y-[1px] bg-brand-orange">
            <FaPhoneAlt className="transition duration-300 ease-in-out text-brand-blue " />
            <button className="my-auto uppercase font-bold font-poppins text-sm text-brand-blue transition duration-300 ease-in-out">
                {text}
            </button>
        </div>
    );
}
