import clsx from "clsx";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; // ✅ Make sure this is a "default export"
