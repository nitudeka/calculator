const Button = ({ label, withAccent, large, extraLarge }) => {
  let className = [
    `flex items-center hover:bg-opacity-100 cursor-pointer justify-center h-14 rounded-full`,
    large ? "col-span-2" : extraLarge ? "col-span-3" : "w-14",
    withAccent ? "bg-yellow-400" : "bg-gray-600 bg-opacity-60",
  ].join(" ");

  return (
    <div className={className}>
      <span className="text-white font-semibold text-xl">{label}</span>
    </div>
  );
};

export default Button;
