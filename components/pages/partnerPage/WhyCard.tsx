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
    <div className="
      bg-white 
      rounded-2xl 
      p-6 
      text-left 
      border border-gray-200

      transition-all duration-300
      hover:-translate-y-1 
      hover:shadow-lg
    ">
      <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 text-gray-700 mb-4">
        {icon}
      </div>

      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
};