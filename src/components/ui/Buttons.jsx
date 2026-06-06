export function PrimaryButton({ textSize = "16px", mt = "2", className = "" }) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <button
      className={`bg-primary font-jakarta text-background font-semibold py-1 px-4 rounded-2xl hover:bg-secondary shadow-md hover:text-heading/50 transition-colors duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      Lets Chat -&gt;
    </button>
  );
}

export function CardPrimaryButton({
  textSize = "12px",
  mt = "2",
  className = "",
}) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <button
      className={`bg-primary font-jakarta text-background font-semibold py-1 px-4 rounded-2xl hover:bg-secondary shadow-md hover:text-heading/50 transition-colors duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      View Case Study -&gt;
    </button>
  );
}

export function CardSecondaryButton({
  textSize = "12px",
  mt = "2",
  className = "",
}) {
  const spacingScale = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
  };

  const marginTop = spacingScale[mt] ?? mt;

  return (
    <button
      className={`bg-transparent font-jakarta text-heading font-medium py-1  border-secondary shadow-md border px-4 rounded-2xl  hover:bg-secondary/30  transition-colors duration-150 cursor-pointer ${className}`}
      style={{ fontSize: textSize, marginTop }}
    >
      Live Site ↗
    </button>
  );
}
