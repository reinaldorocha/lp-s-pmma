import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronRight, Lock, MessageCircle, ShieldCheck } from "lucide-react";

import dep1 from "@/assets/depoimento-1.webp";
import dep2 from "@/assets/depoimento-2.webp";
import dep3 from "@/assets/depoimento-3.webp";
import mockup from "@/assets/mockup-simulados.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "4 Simulados Completos PMMA — 120 Questões Cada, Padrão CESPE/CEBRASPE";
const DESCRIPTION =
  "4 simulados completos para a PMMA com 120 questões cada, todas as disciplinas do edital, gabarito comentado e bônus exclusivos. Acesso imediato.";
const CHECKOUT = "https://app.profjonathanrocha.com.br/c/qzmmpfq";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5586988812196&text=" +
  encodeURIComponent(
    "Olá! Tenho interesse nos 4 Simulados Completos da PMMA e gostaria de mais informações.",
  );

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

const dores = [
  {
    emoji: "🧭",
    t: "Dificuldade em entender as questões?",
    d: "A banca é famosa por 'pegar' o candidato em detalhes. Treinar com simulados no mesmo estilo é o que separa quem acerta de quem chuta.",
  },
  {
    emoji: "🎯",
    t: "Erra por detalhes?",
    d: "Uma palavra muda tudo na assertiva. Com comentários direcionados, você entende onde e por que errou — e não erra de novo.",
  },
  {
    emoji: "⏱️",
    t: "Muito conteúdo, pouca prática?",
    d: "Estudar teoria não basta. Os 4 simulados de 120 questões dão o volume de treino que transforma conhecimento em acertos.",
  },
];

const inclui = [
  "4 simulados completos com 120 questões cada",
  "Todas as disciplinas do edital da PMMA",
  "100% no padrão CESPE/CEBRASPE",
  "Comentados por especialistas aprovados",
  "Gabarito com justificativa item a item",
  "Acesso vitalício em qualquer dispositivo",
];

const estrutura = [
  {
    n: "50",
    t: "Conhecimentos Gerais",
    itens: [
      "Língua Portuguesa",
      "História do Brasil",
      "História do Maranhão",
      "Geografia do Brasil",
      "Geografia do Maranhão",
      "Raciocínio Lógico (incluído na retificação recente)",
    ],
  },
  {
    n: "70",
    t: "Conhecimentos Específicos",
    itens: [
      "Legislação Institucional / Legislação pertinente à PMMA",
      "Noções de Informática",
    ],
  },
];


const beneficios = [
  {
    t: "Direcionamento cirúrgico",
    d: "Cada questão foi elaborada no nível real cobrado pela banca, para você não perder tempo com o que não cai.",
  },
  {
    t: "Aprendizado acelerado",
    d: "Comentários diretos e explicativos fixam o conteúdo mais rápido do que qualquer resumo de teoria.",
  },
  {
    t: "Confiança na hora da prova",
    d: "Você chega no dia da prova reconhecendo o padrão das assertivas e desarma as pegadinhas clássicas.",
  },
];

const bonus = [
  {
    tag: "BÔNUS 01",
    t: "Edital verticalizado",
    de: "R$ 27,00",
    d: "Divide o edital em tópicos claros e estruturados para você planejar sua rotina e não esquecer nenhum tema.",
  },
  {
    tag: "BÔNUS 02",
    t: "Ebook do Concurseiro Iniciante",
    de: "R$ 57,00",
    d: "Guia passo a passo para organizar seus estudos, montar cronograma e evitar os erros que fazem muitos desistirem.",
  },
];

const faq = [
  {
    q: "Como recebo o material?",
    a: "O acesso é enviado imediatamente após a confirmação da compra para o seu e-mail.",
  },
  {
    q: "Quantas questões tem no total?",
    a: "São 4 simulados completos com 120 questões cada, totalizando 480 questões inéditas e comentadas.",
  },
  {
    q: "Os simulados cobrem todas as disciplinas?",
    a: "Sim. Todas as disciplinas previstas no edital da PMMA estão contempladas, na mesma proporção da prova.",
  },
  {
    q: "Está no padrão CESPE/CEBRASPE?",
    a: "Sim. As questões seguem o formato, a redação e o nível de dificuldade praticados pela banca.",
  },
  {
    q: "Posso acessar no celular?",
    a: "Sim, o material é compatível com celular, tablet e computador — você estuda de onde estiver.",
  },
  { q: "Tem garantia?", a: "Sim! Você tem 7 dias para pedir reembolso integral, sem qualquer questionamento." },
];

function useCountdown(totalSeconds = 23 * 3600) {
  const [left, setLeft] = useState(totalSeconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(left / 3600)).padStart(2, "0");
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function Cta({ children, full }: { children: string; full?: boolean }) {
  return (
    <Button
      asChild
      size="lg"
      className={`h-14 rounded-full text-base font-extrabold uppercase tracking-wide shadow-[var(--shadow-gold)] ${
        full ? "w-full" : ""
      }`}
    >
      <a href={CHECKOUT} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-center text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
      {children}
    </p>
  );
}

function Index() {
  const time = useCountdown();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="sticky top-0 z-50 py-2.5 text-center text-xs font-extrabold uppercase tracking-wide text-destructive-foreground sm:text-sm"
        style={{ background: "var(--gradient-bar)" }}
      >
        🔥 Oferta por tempo limitado — encerra em{" "}
        <span className="font-mono tabular-nums">{time}</span>
      </div>

      {/* HERO */}
      <section className="relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-14 text-center sm:pt-20">
          <span className="inline-block rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">
            Concurso PMMA · Banca CESPE / CEBRASPE
          </span>
          <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Passe na <span className="text-primary">PMMA</span> treinando com{" "}
            <span className="text-primary">4 simulados completos</span> de 120 questões no padrão{" "}
            <span className="text-primary">CESPE/CEBRASPE</span> 🚔
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Preparação focada 100% no edital da <strong className="text-foreground">Polícia
            Militar do Maranhão</strong>, com todas as disciplinas, no estilo da banca. Desarme as
            pegadinhas e chegue no dia da prova pronto para a farda.
          </p>
          <div className="mt-10">
            <img
              src={mockup}
              alt="Prévia dos 4 simulados completos da PMMA em tablet e celular"
              width={1408}
              height={1024}
              className="mx-auto w-full max-w-2xl rounded-2xl border border-border/60 shadow-[var(--shadow-elev)]"
            />
          </div>
          <div className="mt-10">
            <Cta>Libere o seu acesso!</Cta>
          </div>
        </div>
      </section>

      {/* DORES */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-2xl font-black tracking-tight sm:text-3xl">
            O tempo está correndo. Você está realmente preparado?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dores.map((d) => (
              <div key={d.t} className="rounded-2xl border border-border/70 bg-card p-7">
                <span className="text-3xl">{d.emoji}</span>
                <h3 className="mt-4 text-lg font-extrabold">{d.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="border-t border-border/50 bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>O que você recebe</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-2xl font-black tracking-tight sm:text-4xl">
            480 questões inéditas em <span className="text-primary">4 simulados completos</span> da
            PMMA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Conteúdo alinhado ao edital da Polícia Militar do Maranhão. Estude o que realmente cai e
            chegue na prova com vantagem real sobre os outros candidatos.
          </p>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {inclui.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Cta>Quero começar agora</Cta>
          </div>
        </div>
      </section>

      {/* ESTRUTURA DA PROVA */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>Estrutura de cada simulado</SectionLabel>
          <h2 className="mt-4 text-center text-2xl font-black tracking-tight sm:text-4xl">
            120 questões por simulado, na divisão oficial do edital
          </h2>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
            <div className="space-y-8">
              {estrutura.map((b) => (
                <div key={b.t} className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex h-fit shrink-0 flex-col items-center rounded-xl bg-primary/10 px-6 py-3">
                    <span className="text-3xl font-black leading-none text-primary">{b.n}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                      itens
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">{b.t}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {b.itens.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            São <strong className="text-primary">4 simulados</strong> nesse mesmo formato — total de{" "}
            <strong className="text-primary">480 questões</strong> inéditas comentadas no padrão
            CESPE/CEBRASPE.
          </p>
        </div>
      </section>


      {/* BENEFÍCIOS */}
      <section className="border-t border-border/50 bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mx-auto max-w-3xl text-center text-2xl font-black tracking-tight sm:text-4xl">
            Chega de estudo genérico.{" "}
            <span className="text-primary">Transforme sua preparação na sua arma secreta.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.t} className="rounded-2xl border border-border/70 bg-card p-7">
                <ChevronRight className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-extrabold">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-2xl font-black tracking-tight sm:text-4xl">
            Veja o que nossos alunos dizem
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Depoimentos reais de quem já usa o método para conquistar a vaga.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[dep1, dep2, dep3].map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Depoimento de aluno ${i + 1} — Simulados PMMA`}
                loading="lazy"
                className="w-full rounded-2xl border border-border/70"
              />
            ))}
          </div>
        </div>
      </section>



      {/* BÔNUS */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl font-black tracking-tight sm:text-4xl">
            Além disso, você também vai receber:
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bonus.map((b) => (
              <div
                key={b.t}
                className="rounded-2xl border border-primary/30 bg-card p-7 shadow-[var(--shadow-elev)]"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                  {b.tag}
                </span>
                <h3 className="mt-3 text-xl font-extrabold">{b.t}</h3>
                <p className="mt-2 text-sm">
                  <span className="text-muted-foreground line-through">De {b.de} por</span>{" "}
                  <span className="font-black text-primary">GRÁTIS HOJE</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="border-t border-border/50 bg-card/40 py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <SectionLabel>Receba o acesso agora</SectionLabel>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
            Comece a resolver os simulados que vão turbinar sua aprovação
          </h2>
          <div className="mt-10 rounded-3xl border border-primary/40 bg-card p-8 shadow-[var(--shadow-gold)]">
            <p className="text-sm text-muted-foreground">
              Pagamento único, de <span className="line-through">R$ 89,90</span> por apenas:
            </p>
            <p className="mt-2 text-5xl font-black tracking-tight text-primary sm:text-6xl">
              R$ 37,00
            </p>
            <p className="mt-1 text-xs text-muted-foreground">ou em até 12x no cartão</p>
            <ul className="mt-8 space-y-3 text-left text-sm">
              {[
                "4 simulados completos — 120 questões cada",
                "Todas as disciplinas do edital da PMMA",
                "Bônus 01: Edital verticalizado",
                "Bônus 02: Ebook do Concurseiro Iniciante",
                "Acesso imediato em qualquer dispositivo",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta full>Garanta seu desconto agora →</Cta>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="size-3.5" /> Compra 100% segura · Acesso imediato · Garantia de 7 dias
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border/70 bg-card p-7 sm:flex-row sm:text-left">
            <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary text-primary">
              <span className="text-2xl font-black leading-none">7</span>
              <span className="text-[10px] font-bold tracking-widest">DIAS</span>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-extrabold">
                <ShieldCheck className="size-5 text-primary" /> Satisfação garantida
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Experimente o conteúdo por 7 dias. Se não ficar satisfeito por qualquer motivo,
                devolvemos 100% do seu dinheiro. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-2xl font-black tracking-tight sm:text-3xl">
            Dúvidas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <p className="text-sm font-bold">Restou alguma dúvida?</p>
            <p className="mt-1 text-sm text-muted-foreground">Fale com a gente pelo WhatsApp</p>
            <Button asChild variant="outline" className="mt-5 rounded-full font-bold">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <MessageCircle className="size-4" /> Suporte no WhatsApp
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Material de estudo independente, sem vínculo com a Polícia Militar do Maranhão ou com a
            banca organizadora.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
