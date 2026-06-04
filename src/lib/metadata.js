const siteName = "Kopi Anan Naparan Portfolio";

const routeMetadata = {
  "/": {
    title: siteName,
    description:
      "Fast, professional marketing sites for small businesses, designed to convert and built to last.",
  },
  "/case-study": {
    title: `Case Study | ${siteName}`,
    description: "A detailed look at selected portfolio projects.",
  },
};

export function metadataForRoute(route) {
  return (
    routeMetadata[route] ?? {
      title: siteName,
      description:
        "A portfolio website showcasing the projects and skills of Kopi Anan Naparan.",
    }
  );
}
