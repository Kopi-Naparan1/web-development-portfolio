export function SectionScreen({
  eyebrow,
  heading,
  subheading,
  headerPosition = "center",
  childrenClassName = "",
  ref,
  className,
  children,
}) {
  return (
    <section
      ref={ref}
      className={`md:sectionLayout mobileSectionLayout  items-${headerPosition}   ${className}`}
    >
      <div className="flex flex-col text-center gap-2  w-full">
        {eyebrow && <p className="md:eyebrow mobileEyebrow">{eyebrow}</p>}
        {heading && <h2 className="md:title mobileTitle">{heading}</h2>}
        {subheading && (
          <p className="md:subheading mobileSubheading">{subheading}</p>
        )}
      </div>
      <div
        className={`md:mt-[5vh]  h-full w-full mt-[3vh] ${childrenClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export function FlexibleSectionScreen({ className, children }) {
  return (
    <section
      className={`flexibleMobileSectionLayout md:flexibleSectionLayout  ${className}`}
    >
      <>{children}</>
    </section>
  );
}

export function SectionScreenCut({
  eyebrow,
  heading,
  subheading,
  headerPosition = "center",
  childrenClassName = "",
  ref,
  className,
  children,
}) {
  return (
    <section
      ref={ref}
      className={`md:flexibleSectionLayout flexibleMobileSectionLayout  items-${headerPosition}   ${className}`}
    >
      <div className="flex flex-col text-center gap-2  w-full">
        {eyebrow && <p className="md:eyebrow mobileEyebrow">{eyebrow}</p>}
        {heading && <h2 className="md:title mobileTitle">{heading}</h2>}
        {subheading && (
          <p className="md:subheading mobileSubheading">{subheading}</p>
        )}
      </div>
      <div
        className={`md:mt-[5vh]  min-h:h-[50vh] h-full w-full mt-[3vh] ${childrenClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
