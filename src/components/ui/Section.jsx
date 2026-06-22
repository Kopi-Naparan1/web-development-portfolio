export function SectionScreen({
  eyebrow,
  heading,
  id,
  subheading,
  headerPosition = "center",
  childrenClassName = "",
  eyebrowClassName = "",
  ref,
  minHeightClass = "min-h-screen", // NEW — default keeps old behavior
  className,
  children,
}) {
  return (
    <section
      id={id}
      ref={ref}
      className={`md:sectionLayout mobileSectionLayout   ${className} items-${headerPosition} ${minHeightClass}   `}
    >
      <div
        className={`flex flex-col text-center gap-2  w-full ${eyebrowClassName}`}
      >
        {eyebrow && <p className="md:eyebrow mobileEyebrow">{eyebrow}</p>}
        {heading && <h2 className="md:title mobileTitle">{heading}</h2>}
        {subheading && (
          <p className="md:subheading mobileSubheading">{subheading}</p>
        )}
      </div>
      <div
        className={`md:mt-[5vh] flex-1 w-full mt-[3vh] min-h-0 ${childrenClassName}`}
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
