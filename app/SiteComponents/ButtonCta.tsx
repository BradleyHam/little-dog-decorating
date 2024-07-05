// ButtonCta.js
import { LuPaintbrush } from 'react-icons/lu';
import { useModal } from '@/app/SiteComponents/ModalClientManager';
const ButtonCta = ({ text }: { text:string }) => {
  const { handleOpenModal } = useModal();

  return (
    <div onClick={handleOpenModal} className="cta-button space-x-2 tracking-wide group border-brand-orange text-brand-orange p-4 px-6 flex items-center rounded-lg shadow-xl active:shadow-md hover:-translate-y-[1px] cursor-pointer active:translate-y-[1px] bg-brand-secondary">
      <button className="my-auto uppercase font-bold font-poppins text-md text-brand-primary transition duration-300 ease-in-out flex items-center">
        <LuPaintbrush size={25} style={{ strokeWidth: '2px' }} />
        <span className='ml-2'>{text}</span>
      </button>
    </div>
  );
};

export default ButtonCta;
