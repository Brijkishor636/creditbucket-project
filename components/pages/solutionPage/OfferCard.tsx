
export const OfferCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 sm:p-7 text-left border-slate-400 transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md">
      <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-200 text-gray-700 mb-4 transition-all duration-300 hover:bg-[#1B84E7] hover:text-white cursor-pointer">
  {icon}
</div>

      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
};