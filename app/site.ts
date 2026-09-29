export const SITE_URL = "https://www.nicolasvalentinarias.com";

export const NAME = "Nicolás Valentín Arias";

export const TITLE = `${NAME} — Founder de MedicAI y Arqueo`;

export const DESCRIPTION =
  "Nicolás Valentín Arias, de Buenos Aires. Founder de MedicAI y Arqueo, estudiante de ITBA, fellow de Puentes (Antigravity, cohort 4) y 1° en fintech en la hackathon de Anthropic y Kaszek 2026.";

export const LINKS = {
  medicai: "https://www.medicai.com.ar",
  arqueo: "https://arqueo.ai",
  github: "https://github.com/ariasnico",
  puentes: "https://puentes.antigravity.capital/",
  itbaPost: "https://www.linkedin.com/feed/update/urn:li:activity:7453425001199853568/",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: NAME,
      alternateName: ["Nicolás Arias", "Nicolas Valentin Arias", "Nicolas Arias", "ariasnico"],
      givenName: "Nicolás",
      additionalName: "Valentín",
      familyName: "Arias",
      url: SITE_URL,
      description: DESCRIPTION,
      jobTitle: "Founder",
      homeLocation: {
        "@type": "Place",
        name: "Buenos Aires, Argentina",
      },
      worksFor: [
        { "@type": "Organization", name: "MedicAI", url: LINKS.medicai },
        { "@type": "Organization", name: "Arqueo", url: LINKS.arqueo },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Instituto Tecnológico de Buenos Aires (ITBA)",
        url: "https://www.itba.edu.ar",
      },
      memberOf: {
        "@type": "ProgramMembership",
        programName: "Puentes — Cohort 4 (octubre 2026)",
        url: LINKS.puentes,
        hostingOrganization: {
          "@type": "Organization",
          name: "Antigravity Capital",
          url: "https://antigravity.capital",
        },
      },
      award: "1° puesto, track fintech — Hackathon Anthropic × Kaszek (14 de abril de 2026)",
      knowsAbout: ["Inteligencia artificial", "Software", "Salud digital", "Startups"],
      sameAs: [LINKS.github],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: TITLE,
      inLanguage: "es-AR",
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: NAME,
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};
