export function PrimaryButton({ textSize = "16px", mt = "2", className = "" }) {
  return (
    <button
      className={`bg-primary text-background text-[${textSize}] font-semibold mt-${mt} py-1 px-4 rounded-2xl hover:bg-secondary transition-colors duration-150 cursor-pointer ${className}`}
    >
      Lets Chat -&gt;
    </button>
  );
}
