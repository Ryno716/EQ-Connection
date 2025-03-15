import { cn } from "../../utils/utils"; // ✅ Ensure this path is correct

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
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
