export const CapabilityCard = ({
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
      bg-white 
      rounded-2xl 
      p-6 
      text-center 
      border border-gray-200

      
      hover:shadow-xl
      hover:border-blue-400
    ">

      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-[#0C82DD]">
        {icon}
      </div>

      <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
        {title}
      </h3>

      <p className="mt-3 text-xs md:text-sm text-black-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
};