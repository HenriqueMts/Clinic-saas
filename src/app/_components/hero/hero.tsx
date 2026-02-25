"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const METRICS = [
  { value: "+500", label: "Clínicas ativas" },
  { value: "98%", label: "Satisfação" },
  { value: "50k+", label: "Consultas/mês" },
  { value: "24/7", label: "Suporte" },
];

export function Hero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/authentication");
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:px-8 lg:py-24">
        {/* Hero: texto + mockup lado a lado */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="mt-12 flex w-full sm:mt-16 lg:mt-0">
              <span className="inline-flex items-center gap-3">
                <span className="bg-primary/15 text-primary ring-primary/20 rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset">
                  Novidades
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  Versão 1.0 lançada
                </span>
              </span>
            </div>
            <h1 className="text-foreground mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Gerencie sua clínica com facilidade
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Otimize as operações da sua clínica com nosso sistema completo de
              gestão. Agende consultas, gerencie pacientes e controle o
              faturamento em um só lugar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-primary hover:bg-primary/90"
              >
                Começar agora
              </Button>
              <p className="text-muted-foreground text-sm">
                Sem cartão de crédito • Teste grátis por 14 dias
              </p>
            </div>

            {/* Métricas estilo SaaS */}
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {METRICS.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">
                    {metric.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <Image
                src="/clicnic saas mockup.png"
                alt="Interface do sistema de gestão para clínicas — dashboard com agendamentos, pacientes e métricas"
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Linha de apoio / social proof */}
        <div className="bg-primary/10 mt-20 rounded-2xl border border-primary/10 px-6 py-8">
          <p className="text-foreground/90 text-center text-sm font-medium">
            Usado por clínicas e consultórios em todo o Brasil
          </p>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Dashboard em tempo real • Relatórios de faturamento • Prontuário
            integrado • Múltiplos usuários por clínica
          </p>
        </div>
      </div>
    </div>
  );
}
