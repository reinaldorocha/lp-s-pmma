import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto vazio" },
      { name: "description", content: "Um projeto novo, pronto para começar a construir." },
      { property: "og:title", content: "Projeto vazio" },
      {
        property: "og:description",
        content: "Um projeto novo, pronto para começar a construir.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen bg-background" />;
}
