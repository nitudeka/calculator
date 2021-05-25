const Button = ({ label, value, large }) => {
  let className = [
    `flex items-center justify-center h-14 rounded-full bg-gray-600`,
    large ? "w-28" : "w-14",
  ].join(" ");

  return (
    <div className={className}>
      <span className="text-white font-semibold text-xl">{label}</span>
    </div>
  );
};

export default Button;
