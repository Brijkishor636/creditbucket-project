export const ValueCard = ({
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
      bg-white 
      rounded-2xl 
      p-5 sm:p-6 
      border border-gray-200

      transition-all duration-300 ease-in-out
      hover:shadow-xl
    ">

      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        {icon}
      </div>

      <div className="text-left">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {text}
        </p>
      </div>

    </div>
  );
};