import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  FileText,
  Timer,
  Target,
  BookOpenCheck,
  Gift,
  CheckCircle2,
  Award,
  Download,
  BarChart3,
} from "lucide-react";

import heroImg from "@/assets/hero-pmma.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "4 Simulados Completos PMMA 2026 — Padrão CRESBASPE";
const DESCRIPTION =
  "Pacote com 4 simulados inéditos no estilo da banca CRESBASPE para o concurso da PMMA, com gabarito comentado, cartão-resposta e bônus exclusivos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const simulados = [
  {
    n: "01",
    nome: "Simulado Diagnóstico",
    desc: "Mapeia seu ponto de partida em todas as disciplinas do edital da PMMA.",
    itens: ["60 questões", "Nível banca CRESBASPE", "Relatório de acertos por matéria"],
  },
  {
    n: "02",
    nome: "Simulado Conhecimentos Gerais",
    desc: "Português, Matemática, Atualidades, Informática e História do Maranhão.",
    itens: ["60 questões", "Gabarito comentado", "Tempo cronometrado"],
  },
  {
    n: "03",
    nome: "Simulado Conhecimentos Específicos",
    desc: "Direitos Humanos, Constitucional, Penal, Penal Militar e Legislação da PMMA.",
    itens: ["60 questões", "Base legal citada", "Pegadinhas recorrentes"],
  },
  {
    n: "04",
    nome: "Simulado Reta Final",
    desc: "Prova completa no formato e na proporção exata do edital, para fazer a 7 dias da prova.",
    itens: ["Prova integral", "Cartão-resposta oficial", "Correção guiada"],
  },
];

const bonus = [
  { icon: FileText, t: "Bônus 1 — Caderno de Leis Secas", d: "Legislação PMMA destacada com os artigos mais cobrados." },
  { icon: BookOpenCheck, t: "Bônus 2 — Resumos Esquematizados", d: "Mapas mentais de todas as disciplinas do edital." },
  { icon: Timer, t: "Bônus 3 — Cronograma de 30 Dias", d: "Plano de estudos dia a dia até a data da prova." },
  { icon: BarChart3, t: "Bônus 4 — Planilha de Desempenho", d: "Acompanhe acertos, erros e evolução por matéria." },
];

const faq = [
  {
    q: "Os simulados seguem o estilo da CRESBASPE?",
    a: "Sim. As questões são construídas no padrão de redação, nível de dificuldade e distribuição de matérias praticado pela banca em concursos militares.",
  },
  {
    q: "O material é digital ou impresso?",
    a: "100% digital em PDF, liberado imediatamente após a confirmação do pagamento. Você pode imprimir quantas vezes quiser.",
  },
  {
    q: "Serve para quem está começando agora?",
    a: "Sim. O Simulado Diagnóstico mostra exatamente onde você está e o cronograma de 30 dias organiza os estudos do zero.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos o valor integral.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <ShieldCheck className="size-5 text-primary" />
            Simulados PMMA
          </span>
          <Button asChild size="sm">
            <a href="#oferta">Garantir acesso</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <Badge variant="outline" className="border-primary/50 text-primary">
              Concurso PMMA — Soldado
            </Badge>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              4 simulados completos no padrão{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                CRESBASPE
              </span>{" "}
              para a PMMA
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Treine com provas inéditas construídas na mesma lógica da banca: 240 questões,
              gabarito comentado, cartão-resposta e 4 bônus para acelerar sua aprovação.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="shadow-[var(--shadow-gold)]">
                <a href="#oferta">Quero os 4 simulados</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#simulados">Ver o que vem dentro</a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Acesso imediato", "PDF para imprimir", "Garantia de 7 dias"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Mesa de estudos com apostilas e boina da Polícia Militar"
              width={1600}
              height={1008}
              className="rounded-xl border border-border/70 object-cover shadow-[var(--shadow-elev)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Target, t: "240 questões inéditas", d: "Distribuídas conforme o peso de cada matéria no edital." },
            { icon: Award, t: "Estilo da banca", d: "Enunciados e alternativas no formato CRESBASPE." },
            { icon: Download, t: "Entrega imediata", d: "Baixe e comece a treinar em poucos minutos." },
          ].map((f) => (
            <Card key={f.t} className="border-border/70 bg-card">
              <CardContent className="pt-6">
                <f.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="simulados" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold tracking-tight">O que você recebe</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Quatro provas em sequência pensada: diagnóstico, treino por bloco e simulação final
          idêntica ao dia da prova.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {simulados.map((s) => (
            <Card key={s.n} className="border-border/70 bg-card">
              <CardHeader>
                <span className="text-sm font-semibold text-primary">Simulado {s.n}</span>
                <CardTitle className="text-xl">{s.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.itens.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <span className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Gift className="size-4" /> Bônus inclusos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">4 bônus para blindar sua prova</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {bonus.map((b) => (
              <div
                key={b.t}
                className="rounded-lg border border-border/70 bg-card p-6 shadow-[var(--shadow-elev)]"
              >
                <b.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Pacote completo PMMA</h2>
        <p className="mt-3 text-muted-foreground">
          4 simulados + 4 bônus + gabarito comentado, com acesso imediato.
        </p>
        <Card className="mt-10 border-primary/40 bg-card text-left shadow-[var(--shadow-gold)]">
          <CardContent className="pt-8">
            <ul className="space-y-3 text-sm">
              {[
                "4 simulados completos (240 questões)",
                "Gabarito comentado questão por questão",
                "Cartão-resposta no padrão da banca",
                "Caderno de leis secas da PMMA",
                "Resumos esquematizados de todo o edital",
                "Cronograma de 30 dias",
                "Planilha de desempenho",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border/70 pt-6 text-center">
              <p className="text-sm text-muted-foreground line-through">De R$ 197,00</p>
              <p className="text-4xl font-bold tracking-tight">R$ 47,90</p>
              <p className="mt-1 text-sm text-muted-foreground">pagamento único · acesso imediato</p>
              <Button size="lg" className="mt-6 w-full sm:w-auto">
                Garantir meu pacote agora
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Garantia incondicional de 7 dias.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <h2 className="text-2xl font-bold tracking-tight">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faq.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-6xl px-5 text-sm text-muted-foreground">
          Simulados PMMA — material de estudo independente, sem vínculo com a Polícia Militar do
          Maranhão ou com a banca organizadora.
        </div>
      </footer>
    </div>
  );
}
