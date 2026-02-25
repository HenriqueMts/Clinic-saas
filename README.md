# Clinic SaaS

[Português](#-português) · [English](#-english)

---

## 🇧🇷 Português

Sistema de gestão para clínicas e consultórios: agendamentos, pacientes, médicos e dashboard em um só lugar.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Drizzle](https://img.shields.io/badge/Drizzle-ORM-333?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=flat-square&logo=postgresql)

### Sobre o projeto

Aplicação full-stack para gerenciamento de clínicas: landing page, autenticação, dashboard com métricas e gráficos, CRUD de agendamentos, médicos e pacientes, com filtros por período e multi-clínica (vínculo usuário ↔ clínica).

- **Landing** — Hero com mockup, métricas e CTA
- **Auth** — Login/cadastro com [Better Auth](https://www.better-auth.com/)
- **Dashboard** — Receita, agendamentos, gráfico por dia, top médicos e especialidades, date range picker
- **Agendamentos** — Tabela, filtros, criação com horários disponíveis por médico
- **Médicos** — Listagem em cards, preço da consulta, disponibilidade por dia da semana e horário
- **Pacientes** — Tabela com ações (editar, excluir) e formulário de criação/edição

### Funcionalidades

| Área | Funcionalidades |
|------|-----------------|
| **Dashboard** | Período customizável (from/to na URL), gráfico de agendamentos, agendamentos do dia, top médicos e especialidades |
| **Agendamentos** | Listagem por clínica, criar com seleção de médico/paciente/data/horário e valor, excluir com confirmação |
| **Médicos** | Nome, especialidade, preço da consulta, dias e horários de atendimento, avatar |
| **Pacientes** | Nome, e-mail, telefone, sexo; edição e exclusão com confirmação |
| **Auth** | Sessão por cookie, fluxo de login/registro e redirecionamento pós-login (clinic-form quando não tem clínica) |

### Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Radix UI, Recharts, React Hook Form, Zod, Nuqs (query state)
- **Backend:** Next.js Route Handlers, Better Auth, next-safe-action
- **Banco:** PostgreSQL (Neon), Drizzle ORM
- **Outros:** date-fns, dayjs, react-day-picker, Sonner (toast)

### Como rodar

**1. Clonar e instalar**

```bash
git clone <seu-repo>
cd Clinic-Saas
npm install
```

**2. Variáveis de ambiente** — Crie um `.env` na raiz:

```env
DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="um-secret-longo-e-aleatorio"
BETTER_AUTH_URL="http://localhost:3000"
```

(Ajuste `BETTER_AUTH_URL` para a URL do app em produção.)

**3. Banco de dados** — Migrations em `drizzle/`:

```bash
npx drizzle-kit migrate
```

(Opcional) Seed em `drizzle/seed.sql` para popular uma clínica; pode ser executado no SQL Editor do Neon.

**4. Desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Estrutura principal

```
src/
├── app/
│   ├── page.tsx                 # Landing (Hero)
│   ├── authentication/          # Login / registro
│   └── (protected)/             # Rotas autenticadas
│       ├── dashboard/           # Dashboard com gráficos e date picker
│       ├── appointments/        # Agendamentos
│       ├── doctors/             # Médicos
│       ├── patients/            # Pacientes
│       └── clinic-form/         # Formulário de clínica (pós-login)
├── actions/                     # Server actions (CRUD, auth)
├── components/ui/               # Componentes (Button, Calendar, DataTable, etc.)
├── data/                        # get-dashboard, etc.
├── db/                          # Drizzle schema e client
└── lib/                         # auth, utils, next-safe-action
```

### Licença

Projeto de portfólio. Uso livre para estudo e referência.

---

## 🇺🇸 English

Clinic and practice management system: appointments, patients, doctors, and dashboard in one place.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Drizzle](https://img.shields.io/badge/Drizzle-ORM-333?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=flat-square&logo=postgresql)

### About the project

Full-stack app for clinic management: landing page, authentication, dashboard with metrics and charts, CRUD for appointments, doctors, and patients, with date-range filters and multi-clinic support (user ↔ clinic linking).

- **Landing** — Hero with mockup, metrics, and CTA
- **Auth** — Login/signup with [Better Auth](https://www.better-auth.com/)
- **Dashboard** — Revenue, appointments, daily chart, top doctors and specialties, date range picker
- **Appointments** — Table, filters, create with available slots per doctor
- **Doctors** — Card list, consultation price, availability by weekday and time
- **Patients** — Table with actions (edit, delete) and create/edit form

### Features

| Area | Features |
|------|----------|
| **Dashboard** | Custom date range (from/to in URL), appointments chart, today’s appointments, top doctors and specialties |
| **Appointments** | List by clinic, create with doctor/patient/date/time and price, delete with confirmation |
| **Doctors** | Name, specialty, consultation price, working days and hours, avatar |
| **Patients** | Name, email, phone, sex; edit and delete with confirmation |
| **Auth** | Cookie-based session, login/signup flow and post-login redirect (clinic-form when no clinic) |

### Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Radix UI, Recharts, React Hook Form, Zod, Nuqs (query state)
- **Backend:** Next.js Route Handlers, Better Auth, next-safe-action
- **Database:** PostgreSQL (Neon), Drizzle ORM
- **Other:** date-fns, dayjs, react-day-picker, Sonner (toast)

### Getting started

**1. Clone and install**

```bash
git clone <your-repo>
cd Clinic-Saas
npm install
```

**2. Environment variables** — Create a `.env` in the project root:

```env
DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

(Update `BETTER_AUTH_URL` for production.)

**3. Database** — Migrations live in `drizzle/`:

```bash
npx drizzle-kit migrate
```

(Optional) A seed file at `drizzle/seed.sql` can populate a clinic; run it in Neon’s SQL Editor if needed.

**4. Run the app**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Project structure

```
src/
├── app/
│   ├── page.tsx                 # Landing (Hero)
│   ├── authentication/          # Login / signup
│   └── (protected)/             # Authenticated routes
│       ├── dashboard/           # Dashboard with charts and date picker
│       ├── appointments/       # Appointments
│       ├── doctors/             # Doctors
│       ├── patients/            # Patients
│       └── clinic-form/         # Clinic form (post-login)
├── actions/                     # Server actions (CRUD, auth)
├── components/ui/               # UI components (Button, Calendar, DataTable, etc.)
├── data/                        # get-dashboard, etc.
├── db/                          # Drizzle schema and client
└── lib/                         # auth, utils, next-safe-action
```

### License

Portfolio project. Free to use for learning and reference.
