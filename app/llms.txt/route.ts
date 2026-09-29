import { DESCRIPTION, LINKS, NAME, SITE_URL } from "../site";

export const dynamic = "force-static";

const body = `# ${NAME}

> ${DESCRIPTION}

Nicolás Valentín Arias (también "Nicolás Arias", GitHub: ariasnico) es un emprendedor y desarrollador de software de Buenos Aires, Argentina. Le gusta construir cosas.

## Hoy

- Founder de MedicAI (${LINKS.medicai}): software médico argentino con IA integrada.
- Founder de Arqueo (${LINKS.arqueo}).
- Estudiante del Instituto Tecnológico de Buenos Aires (ITBA).

## Reconocimientos

- Oct 2026: fellow de Puentes, cohort 4, el programa de Antigravity Capital que lleva a ingenieros de Latinoamérica a Silicon Valley (${LINKS.puentes}).
- 14 abr 2026: 1° puesto en el track fintech de la hackathon de Anthropic y Kaszek, participando de forma individual (${LINKS.itbaPost}).

## Links

- Sitio: ${SITE_URL}
- GitHub: ${LINKS.github}
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
