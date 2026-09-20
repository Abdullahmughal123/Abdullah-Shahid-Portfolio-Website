export const projectFilters = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend / APIs",
  "Integrations",
  "Real-Time"
];

const GITHUB = "https://github.com/Abdullahmughal123";

export const projects = [
  {
    id: "wavepeople",
    number: "01",
    slug: "wavepeople",
    name: "WavePeople",
    subtitle: "Horilla HR management frontend",
    category: "Frontend / HR Platform",
    type: "Production Frontend",
    role: "Frontend Developer",
    accentColor: "#10b981",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description:
      "Worked on the frontend of the Horilla HR management system using React and TypeScript. Fixed UI bugs, improved responsiveness, and enhanced user experience while working with reusable components and API integrations in a production-level codebase.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: GITHUB,
    live: "https://horilla-dev.synetechq.com/",
    preview: "management",
    caseStudy: {
      overview:
        "WavePeople is production frontend work on Horilla, an HR management system used for day-to-day people operations. The focus was shipping reliable UI in an existing React/TypeScript codebase rather than a greenfield demo.",
      problem:
        "HR teams need a responsive, consistent interface for core workflows. Existing screens had UI bugs, layout issues on smaller viewports, and uneven component reuse that slowed feature work.",
      solution:
        "Fixed UI defects, tightened responsive layouts, and improved component reuse while integrating REST APIs already used by the production backend.",
      features: [
        { title: "Reusable UI components", desc: "Shared React components used across HR screens instead of one-off markup." },
        { title: "Responsive layouts", desc: "Improved breakpoints so HR workflows stay usable on laptop and smaller screens." },
        { title: "REST API integration", desc: "Wired screens to existing APIs for live HR data rather than static mockups." },
        { title: "UX polish", desc: "Cleared visual bugs and interaction issues that blocked everyday use." }
      ],
      architecture: {
        frontend: "React and TypeScript with Tailwind CSS in a production Horilla frontend.",
        backend: "Existing Horilla / Synetech backend consumed over REST.",
        database: "Server-side HR data owned by the platform backend.",
        authentication: "Existing production auth flow used by the HR app.",
        apis: "REST endpoints for HR records, workflows, and UI state.",
        deployment: "Hosted at horilla-dev.synetechq.com."
      },
      folderStructure: `wavepeople-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/api.ts
│   └── hooks/`,
      modules: [
        { name: "UI kit", desc: "Shared layout, forms, and table patterns for HR screens." },
        { name: "API client", desc: "Typed REST calls used by pages and reusable widgets." }
      ],
      dataModel: [
        { table: "employees / HR entities", details: "Consumed via REST; schema owned by Horilla backend." }
      ],
      auth: "Uses the production HR application's existing session or token flow.",
      decisions: [
        { title: "Work inside the production codebase", rationale: "Fixes and UX work had to land in the live Horilla frontend, not a parallel rewrite." }
      ],
      challenges: [
        { challenge: "Changing UI in a large existing app without breaking other HR flows.", solution: "Preferred reusable components and scoped CSS/layout fixes over page-wide rewrites." }
      ],
      futureImprovements: [
        "Deeper design-system coverage for remaining HR modules.",
        "Automated visual regression checks on critical screens."
      ]
    }
  },
  {
    id: "burac",
    number: "02",
    slug: "burac",
    name: "Burac.ai",
    subtitle: "Cloud infrastructure monitoring",
    category: "Real-Time Dashboard",
    type: "Monitoring Application",
    role: "Frontend Developer",
    accentColor: "#06b6d4",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Real-time monitoring dashboard for cloud infrastructure with live metrics, alerts, and team collaboration.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket"],
    github: GITHUB,
    live: "https://burac.ai/",
    preview: "airquality",
    caseStudy: {
      overview:
        "Burac.ai is a live monitoring surface for cloud infrastructure: metrics, alerts, and collaboration so teams can react without waiting on a page refresh.",
      problem:
        "Infrastructure issues are easy to miss when dashboards only poll slowly or hide alerts in dense tables.",
      solution:
        "A React/TypeScript dashboard with D3 visualizations and WebSocket-backed live updates for metrics and alerts.",
      features: [
        { title: "Live metrics", desc: "Streaming charts and gauges for infrastructure health." },
        { title: "Alerts", desc: "Surfaces threshold and incident signals for the team." },
        { title: "Collaboration", desc: "Shared operational context so responders stay aligned." },
        { title: "D3 visualizations", desc: "Custom charts for time-series and status views." }
      ],
      architecture: {
        frontend: "React and TypeScript with D3.js chart layers.",
        backend: "Live metric and alert feeds consumed by the dashboard.",
        database: "Time-series / operational stores behind the monitoring API.",
        authentication: "Product auth for operator access.",
        apis: "WebSocket streams plus REST for historical views.",
        deployment: "Public product at burac.ai."
      },
      folderStructure: `burac-dashboard/
├── src/
│   ├── charts/
│   ├── sockets/
│   └── pages/Overview.tsx`,
      modules: [
        { name: "Chart layer", desc: "D3 renderers for live and historical metrics." },
        { name: "Socket client", desc: "Subscribes to metric and alert channels." }
      ],
      dataModel: [
        { table: "metrics / alerts", details: "timestamp, source, value, severity — served live to the UI." }
      ],
      auth: "Authenticated operator sessions for the monitoring product.",
      decisions: [
        { title: "WebSockets for live data", rationale: "Polling would add latency and extra load for infrastructure alerts." }
      ],
      challenges: [
        { challenge: "High-frequency metric updates can stall the UI.", solution: "Throttle chart redraws and keep socket payloads scoped to visible widgets." }
      ],
      futureImprovements: [
        "Richer incident timelines and on-call routing.",
        "Saved dashboard layouts per team."
      ]
    }
  },
  {
    id: "email-automation",
    number: "03",
    slug: "email-automation",
    name: "Email Automation System",
    subtitle: "Scheduling and background email dispatch",
    category: "Full-Stack Platform",
    type: "Full-Stack Web Application",
    role: "Full-Stack Developer",
    accentColor: "#6366f1",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Full-stack email automation platform that allows users to send and schedule emails with API integration and background processing.",
    technologies: [".NET Core", "React", "MySQL", "REST APIs"],
    github: GITHUB,
    live: null,
    preview: "cms",
    caseStudy: {
      overview:
        "A full-stack platform for composing, sending, and scheduling email with API hooks and background workers so campaigns do not block the web request.",
      problem:
        "Sending mail synchronously from a web request times out, cannot retry cleanly, and has no schedule or audit trail.",
      solution:
        "ASP.NET Core APIs plus a React UI, MySQL persistence, and background processing for queued and scheduled sends.",
      features: [
        { title: "Send now", desc: "Immediate dispatch through the email API integration." },
        { title: "Scheduling", desc: "Queue messages for a future send window." },
        { title: "Background processing", desc: "Workers pick jobs so the UI stays responsive." },
        { title: "REST API", desc: "Programmatic send/schedule from other services." }
      ],
      architecture: {
        frontend: "React client for templates, recipients, and schedule controls.",
        backend: "ASP.NET Core APIs and background job processing.",
        database: "MySQL for users, templates, jobs, and send logs.",
        authentication: "API and app authentication for senders.",
        apis: "REST for compose, schedule, and status.",
        deployment: "Self-hosted / internal tooling."
      },
      folderStructure: `email-automation/
├── server/  (.NET Core)
├── client/  (React)
└── jobs/    (background workers)`,
      modules: [
        { name: "Job queue", desc: "Persists scheduled and retryable send jobs." },
        { name: "Provider adapter", desc: "Talks to the outbound email API." }
      ],
      dataModel: [
        { table: "email_jobs", details: "id, recipient, scheduled_at, status, payload" }
      ],
      auth: "Authenticated users and API clients can enqueue mail; workers run with service credentials.",
      decisions: [
        { title: "Background processing", rationale: "SMTP/API latency and retries must not live on the HTTP thread." }
      ],
      challenges: [
        { challenge: "Duplicate sends if a worker retries after a timeout.", solution: "Idempotent job keys and status transitions in MySQL." }
      ],
      futureImprovements: [
        "Template versioning and bounce handling.",
        "Delivery analytics dashboard."
      ]
    }
  },
  {
    id: "synetec-hire",
    number: "04",
    slug: "synetec-hire",
    name: "Synetec.Hire.Server",
    subtitle: "Roles, permissions, and JWT auth",
    category: "Backend / APIs",
    type: "ASP.NET Core API",
    role: "Backend Developer",
    accentColor: "#a855f7",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Implemented a dynamic Role & Permission system with policy-based authorization using role claims. Includes role management, permission assignment/removal, automatic permission discovery from controllers, and full JWT authentication integration.",
    technologies: [
      ".NET Core",
      "JWT Authentication",
      "SQL Server",
      "Policy-Based Authorization"
    ],
    github: "https://github.com/Abdullahmughal123/Synetec.Hire.Server",
    live: null,
    preview: "construction",
    caseStudy: {
      overview:
        "Server-side authorization for a hiring platform: dynamic roles and permissions, policy-based checks from role claims, and JWT authentication end to end.",
      problem:
        "Hard-coded roles do not scale. New endpoints need permissions discovered and assigned without shipping a new auth rewrite each time.",
      solution:
        "Policy-based ASP.NET Core authorization using role claims, admin APIs to assign or remove permissions, and automatic permission discovery from controllers, all backed by SQL Server and JWT.",
      features: [
        { title: "Role management", desc: "Create and maintain roles used across the hiring API." },
        { title: "Permission assignment", desc: "Attach or remove permissions on a role without redeploying policy code." },
        { title: "Controller discovery", desc: "Find permissions from controller metadata so new actions are not forgotten." },
        { title: "JWT integration", desc: "Tokens carry claims the policies evaluate on each request." }
      ],
      architecture: {
        frontend: "Admin/hiring clients consume the API with Bearer tokens.",
        backend: "ASP.NET Core with policy-based authorization.",
        database: "SQL Server for users, roles, and permission maps.",
        authentication: "JWT with role claims.",
        apis: "REST for hiring domain plus role/permission admin.",
        deployment: "Server API (no public demo)."
      },
      folderStructure: `Synetec.Hire.Server/
├── Controllers/
├── Authorization/
├── Services/PermissionDiscovery
└── Models/`,
      modules: [
        { name: "Permission discovery", desc: "Scans controllers for permission names to register." },
        { name: "Policy handlers", desc: "Evaluates role claims against required permissions." }
      ],
      dataModel: [
        { table: "roles / permissions", details: "role_id, permission_name, claim mappings" }
      ],
      auth: "JWT Bearer tokens; policies fail closed when a claim is missing.",
      decisions: [
        { title: "Policy-based authorization", rationale: "Keeps endpoint rules declarative and claim-driven instead of scattered if-role checks." }
      ],
      challenges: [
        { challenge: "New controllers shipping without matching permission rows.", solution: "Automatic discovery from controller metadata plus admin assignment APIs." }
      ],
      futureImprovements: [
        "Audit log of permission changes.",
        "Fine-grained resource-level policies where hiring records need owner checks."
      ]
    }
  },
  {
    id: "slack-integration",
    number: "05",
    slug: "slack-integration",
    name: "Slack Integration API",
    subtitle: "OAuth 2.0 workspace install and messaging",
    category: "Integrations",
    type: "ASP.NET Core Web API",
    role: "Backend Developer",
    accentColor: "#f59e0b",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Developed a Slack Integration API using OAuth 2.0 for secure Slack workspace integration, including app installation, OAuth callback handling, and channel messaging.",
    technologies: [
      "ASP.NET Core Web API",
      "JWT Authentication",
      "SQL Server",
      "Slack API",
      "OAuth 2.0"
    ],
    github: GITHUB,
    live: null,
    preview: "social",
    caseStudy: {
      overview:
        "An ASP.NET Core API that installs a Slack app into a workspace via OAuth 2.0, stores tokens securely, and posts messages to channels.",
      problem:
        "Teams want Slack notifications from internal products without sharing bot tokens in frontend code or skipping OAuth.",
      solution:
        "OAuth install + callback, JWT-protected API routes, SQL Server token storage, and Slack Web API calls for channel messaging.",
      features: [
        { title: "App installation", desc: "OAuth 2.0 install into a Slack workspace." },
        { title: "OAuth callback", desc: "Exchanges the code for tokens and persists them." },
        { title: "Channel messaging", desc: "Sends messages through the Slack API after install." },
        { title: "JWT-protected routes", desc: "Your app's users cannot call Slack as each other without auth." }
      ],
      architecture: {
        frontend: "Optional install UI; API is the source of truth.",
        backend: "ASP.NET Core Web API.",
        database: "SQL Server for workspace tokens and install state.",
        authentication: "JWT for your API; OAuth 2.0 for Slack.",
        apis: "Slack OAuth and chat.postMessage (or equivalent).",
        deployment: "Internal API."
      },
      folderStructure: `SlackIntegration.Api/
├── Controllers/OAuthController.cs
├── Controllers/MessagesController.cs
└── Services/SlackClient.cs`,
      modules: [
        { name: "OAuth handler", desc: "Install URL, callback, token exchange." },
        { name: "Slack client", desc: "Authenticated channel messaging." }
      ],
      dataModel: [
        { table: "slack_installs", details: "workspace_id, access_token, scopes, installed_at" }
      ],
      auth: "Slack OAuth for workspace tokens; JWT for callers of this API.",
      decisions: [
        { title: "OAuth 2.0 instead of a shared bot token", rationale: "Each workspace grants access explicitly and tokens stay on the server." }
      ],
      challenges: [
        { challenge: "Token refresh and revoked installs.", solution: "Persist install metadata and fail clearly when Slack returns invalid_auth." }
      ],
      futureImprovements: [
        "Slash commands and interactive payloads.",
        "Per-channel destination mapping in admin UI."
      ]
    }
  },
  {
    id: "crm",
    number: "06",
    slug: "crm",
    name: "CRM Management System",
    subtitle: "Customers, roles, and workflows",
    category: "Full-Stack",
    type: "Full-Stack Web Application",
    role: "Full-Stack Developer",
    accentColor: "#ff9a3d",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Built CRM modules for customer records, authentication, role management, and workflow handling using ASP.NET Core and SQL.",
    technologies: [".NET", "Entity Framework Core", "SQL", "React"],
    github: "https://github.com/Abdullahmughal123/Synetec.Hire.Server",
    live: null,
    preview: "realestate",
    caseStudy: {
      overview:
        "CRM modules covering customer records, login, role management, and workflow handling on ASP.NET Core, EF Core, SQL, and React.",
      problem:
        "Sales and ops teams need a single place for customer data, who can edit it, and which workflow step a record is in.",
      solution:
        "ASP.NET Core + EF Core for persistence and rules; React for CRM screens; SQL for customers, users, roles, and workflow state.",
      features: [
        { title: "Customer records", desc: "Create and maintain account/contact data." },
        { title: "Authentication", desc: "Signed-in access to CRM modules." },
        { title: "Role management", desc: "Control who can view or change records." },
        { title: "Workflow handling", desc: "Move records through defined business steps." }
      ],
      architecture: {
        frontend: "React CRM UI.",
        backend: "ASP.NET Core with Entity Framework Core.",
        database: "SQL Server (or SQL) for CRM entities.",
        authentication: "App authentication with role checks.",
        apis: "REST for customers, users, and workflows.",
        deployment: "Internal / hiring-platform related services."
      },
      folderStructure: `crm/
├── api/   (ASP.NET Core + EF Core)
└── web/   (React)`,
      modules: [
        { name: "Customer module", desc: "CRUD and search for customer records." },
        { name: "Workflow engine", desc: "Status transitions with role gates." }
      ],
      dataModel: [
        { table: "customers", details: "id, name, status, owner_id, timestamps" },
        { table: "workflow_steps", details: "id, customer_id, step, acted_by" }
      ],
      auth: "Authenticated users; roles gate CRM actions.",
      decisions: [
        { title: "EF Core + SQL", rationale: "Relational customer and workflow data needs transactions and constraints." }
      ],
      challenges: [
        { challenge: "Workflow steps colliding when two users update the same record.", solution: "Persist status in SQL and validate allowed transitions on the server." }
      ],
      futureImprovements: [
        "Activity timeline and email logging.",
        "Reporting views for pipeline stages."
      ]
    }
  },
  {
    id: "task-app",
    number: "07",
    slug: "task-app",
    name: "Task Management App",
    subtitle: "Daily tasks and status tracking",
    category: "Frontend",
    type: "Web Application",
    role: "Frontend Developer",
    accentColor: "#22c55e",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    description:
      "A productivity app for managing daily tasks with features like task creation, updates, and status tracking in a clean UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: GITHUB,
    live: null,
    preview: "management",
    caseStudy: {
      overview:
        "A focused React/TypeScript task app: create items, update them, and track status in a clean Tailwind UI.",
      problem:
        "Generic productivity tools are noisy. This app keeps daily task CRUD and status in a simple layout.",
      solution:
        "React state (or a thin API later) with TypeScript models and Tailwind for a compact task board.",
      features: [
        { title: "Create tasks", desc: "Add daily work items quickly." },
        { title: "Updates", desc: "Edit title, details, and assignment as work changes." },
        { title: "Status tracking", desc: "Move items through todo / in progress / done." },
        { title: "Clean UI", desc: "Tailwind layout without extra chrome." }
      ],
      architecture: {
        frontend: "React, TypeScript, Tailwind CSS.",
        backend: "Optional; UI-first productivity app.",
        database: "Local or API-backed task records.",
        authentication: "Not required for the core UI.",
        apis: "REST if persisted; otherwise client state.",
        deployment: "Static frontend."
      },
      folderStructure: `task-app/
├── src/
│   ├── components/TaskList.tsx
│   └── types/task.ts`,
      modules: [
        { name: "Task list", desc: "Renders and filters tasks by status." },
        { name: "Task form", desc: "Create and update flows." }
      ],
      dataModel: [
        { table: "tasks", details: "id, title, status, updated_at" }
      ],
      auth: "None for the core personal-productivity UI.",
      decisions: [
        { title: "TypeScript models", rationale: "Status unions catch invalid transitions at compile time." }
      ],
      challenges: [
        { challenge: "Keeping the UI fast as the list grows.", solution: "Simple filters and compact rows instead of heavy board libraries." }
      ],
      futureImprovements: [
        "Persistence and sharing.",
        "Keyboard shortcuts for power users."
      ]
    }
  },
  {
    id: "portfolio",
    number: "08",
    slug: "portfolio",
    name: "Portfolio Website",
    subtitle: "Personal site for work and skills",
    category: "Frontend",
    type: "Marketing / Personal Site",
    role: "Frontend Developer",
    accentColor: "#e11d48",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Personal portfolio website to showcase projects, skills, and experience with a modern and responsive design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: GITHUB,
    live: null,
    preview: "cms",
    caseStudy: {
      overview:
        "This site: a React portfolio with motion, case studies, and a 3D skills view so recruiters can scan projects and .NET/React experience quickly.",
      problem:
        "A GitHub profile alone does not explain production HR, hiring, Slack, and CRM work in context.",
      solution:
        "A single-page React site with Tailwind, Framer Motion, and dedicated project write-ups.",
      features: [
        { title: "Project case studies", desc: "Architecture, features, and stack for each piece of work." },
        { title: "Skills visualization", desc: "Interactive tech orbit for the .NET and React stack." },
        { title: "Responsive layout", desc: "Works on desktop and mobile." },
        { title: "Motion", desc: "Framer Motion for section and card transitions." }
      ],
      architecture: {
        frontend: "React, Tailwind CSS, Framer Motion, Three.js for skills.",
        backend: "Static site; contact form via a form API.",
        database: "None.",
        authentication: "None.",
        apis: "Contact form endpoint only.",
        deployment: "Vite static build."
      },
      folderStructure: `portfolio/
├── src/components/
├── src/data/projects.js
└── src/data/experience.js`,
      modules: [
        { name: "Projects stack", desc: "Sticky cards and case study routes." },
        { name: "Profile data", desc: "Experience, services, and tech lists." }
      ],
      dataModel: [],
      auth: "Public site.",
      decisions: [
        { title: "Content in JS data files", rationale: "Projects and jobs can be updated without a CMS." }
      ],
      challenges: [
        { challenge: "Keeping copy aligned with real work (no leftover previous-portfolio projects).", solution: "Replaced the project catalog and identity with this profile's .NET/React work." }
      ],
      futureImprovements: [
        "Real product screenshots when they can be published.",
        "A public email and LinkedIn once those links are confirmed."
      ]
    }
  }
];
