const Stars = ({ count = 5, size = "text-xs" }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`${size} ${i <= count ? "text-yellow-500" : "text-gray-200"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;