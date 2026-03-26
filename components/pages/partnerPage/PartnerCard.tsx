export const PartnerCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="
      flex items-start gap-4 
      bg-gradient-to-r from-[#2589e1] to-[#2B8CD8]
      text-white 
      rounded-xl 
      px-5 sm:px-8 py-5 
      shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_4px_12px_rgba(0,0,0,0.3),inset_0_-1px_1px_rgba(255,255,255,0.15)]
  
  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
  
  hover:-translate-y-2 
  hover:shadow-[0_45px_70px_-15px_rgba(0,0,0,0.7),inset_0_4px_12px_rgba(0,0,0,0.3)]
    ">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-white text-[#0C82DD] backdrop-blur-md">
        {icon}
      </div>

      <div className="text-left">
        <h3 className="text-[20px] md:text-[24px] font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-white/80 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;