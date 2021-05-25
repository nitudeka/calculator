const Button = ({ label, withAccent, large }) => {
  let className = [
    `flex items-center cursor-pointer justify-center h-14 rounded-full`,
    large ? "col-span-2" : "w-14",
    withAccent ? "bg-yellow-400" : "bg-gray-600",
  ].join(" ");

  return (
    <div className={className}>
      <span className="text-white font-semibold text-xl">{label}</span>
    </div>
  );
};

export default Button;
