export function SectionScreen({
  eyebrow,
  heading,
  subheading,
  headerPosition = "center",
  children,
}) {
  return (
    <section className={`sectionLayout items-${headerPosition} `}>
      <div className="flex flex-col items-center justify-center text-center gap-2">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && <h2 className="title">{heading}</h2>}
        {subheading && <p className="subheading">{subheading}</p>}
      </div>
      {children}
    </section>
  );
}
