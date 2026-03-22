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
      bg-gradient-to-r from-[#1E73BE] to-[#2B8CD8]
      text-white 
      rounded-xl 
      px-5 sm:px-8 py-5 
      shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      transition-all duration-300
      hover:-translate-y-1 
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
    ">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
        {icon}
      </div>

      <div className="text-left">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold">
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