import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Clinic SaaS — Gestão para clínicas e consultórios",
    template: "%s | Clinic SaaS",
  },
  description:
    "Sistema completo de gestão para clínicas: agendamentos, pacientes, médicos e dashboard. Otimize operações e controle o faturamento em um só lugar.",
  applicationName: "Clinic SaaS",
  keywords: ["clínica", "gestão", "agendamentos", "consultórios", "saas", "dashboard"],
  authors: [{ name: "Clinic SaaS" }],
  openGraph: {
    title: "Clinic SaaS — Gestão para clínicas e consultórios",
    description:
      "Sistema completo de gestão para clínicas: agendamentos, pacientes, médicos e dashboard.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} antialiased`}>
        <ReactQueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ReactQueryProvider>
        <Toaster position="bottom-center" richColors theme="light" />
      </body>
    </html>
  );
}
