export const WhyCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
 return (
    <div
      className="
      group relative overflow-hidden
      flex items-start gap-4 
      bg-white
      text-black
      rounded-xl 
      px-5 sm:px-8 py-5 

      shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      transition-all duration-500 ease-out

      hover:-translate-y-1 
      hover:shadow-[0_14px_45px_rgba(0,0,0,0.45)]
    "
    >
    
      <div
        className="
        absolute -top-10 -right-10
        w-40 h-40
        bg-[#E3F2FF]
        rounded-full

        opacity-0 scale-75
        transition-all duration-500 ease-out

        group-hover:opacity-100 
        group-hover:scale-100
      "
      />

      {/* ICON */}
      <div
        className="
        relative z-10
        shrink-0 w-12 h-12 
        flex items-center justify-center 
        rounded-lg 

        bg-white backdrop-blur-md

        transition-all duration-400

        
        group-hover:bg-[#1E73BE]
        group-hover:text-white
        group-hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)]
        group-hover:scale-110
      "
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="relative z-10 text-left">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-black leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};