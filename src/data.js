// All site content lives here. To add a project, append to `projects`.
// status: "code" = runnable code in the repo, "design" = planning pack / architecture docs.

export const profile = {
  name: 'Simbarashe Nyamusa',
  role: 'Senior software developer',
  location: 'Harare, Zimbabwe',
  summary:
    'I build the payment, messaging and data systems behind a national telecom: five years at TelOne running production services for 500,000+ subscribers in C#/.NET, SQL Server, React and Kubernetes. Now applying the same discipline to AI: retrieval, fraud detection and agents.',
  email: 'simbarashenyamusa@gmail.com',
  phone: '+263 775 006 615',
  github: 'https://github.com/momosto',
  linkedin: 'https://www.linkedin.com/in/simbarashe-nyamusa-4236101b7/',
};

const gh = (repo) => `https://github.com/momosto/${repo}`;

export const projects = [
  {
    name: 'Telco RAG Assistant',
    repo: gh('telco-rag-assistant'),
    demo: 'https://telco-rag-assistant.vercel.app',
    status: 'code',
    pitch:
      'AI support agent that answers customer questions from a telecom provider’s own documents and cites the passage behind every answer. Says “I don’t know” when the documents don’t cover it, and is scored on a 20-question evaluation.',
    stack: ['Python', 'FastAPI', 'Claude API', 'BM25', 'Evals'],
  },
  {
    name: 'InsureHub',
    repo: gh('insurehub'),
    status: 'code',
    pitch:
      'Insurer core system for motor, funeral and home cover in USD and ZiG: rating engines, quote-to-policy, EcoCash premium collection, a claims state machine with full audit trail, JWT and role-based access, and 31 automated tests.',
    stack: ['ASP.NET Core 8', 'EF Core', 'React', 'TypeScript', 'xUnit'],
  },
  {
    name: 'InsureAssist',
    repo: gh('insureassist'),
    status: 'code',
    pitch:
      'Agentic WhatsApp customer-service assistant with guardrails, human handoff and releases gated on an evaluation suite.',
    stack: ['Python', 'Claude API', 'MCP', 'Docker'],
  },
  {
    name: 'LendHub',
    repo: gh('lendhub'),
    status: 'code',
    pitch:
      'Microfinance loan management: origination, amortisation, portfolio-at-risk ageing, IFRS 9 provisioning and EcoCash repayments.',
    stack: ['Java 21', 'Spring Boot', 'Spring Modulith', 'Angular'],
  },
  {
    name: 'InsureHub USSD',
    repo: gh('insurehub-ussd'),
    status: 'code',
    pitch:
      'Feature-phone self-service over *263#: check policies, pay with EcoCash, lodge claims and apply for loans without a smartphone.',
    stack: ['C#', '.NET 8', 'Redis', 'Docker'],
  },
  {
    name: 'InsureHub Platform',
    repo: gh('insurehub-platform'),
    status: 'code',
    pitch:
      'GitOps, observability and DevSecOps platform for the InsureHub services, with the ecosystem architecture documented.',
    stack: ['k3s', 'ArgoCD', 'Terraform', 'OpenTelemetry'],
  },
  {
    name: 'InsureHub SAP Fiori',
    repo: gh('insurehub-sap-fiori'),
    status: 'code',
    pitch:
      'SAP Fiori apps on mock OData services: a freestyle SAPUI5 leave-request app and a Fiori elements loan-application list report.',
    stack: ['SAPUI5', 'Fiori elements', 'OData'],
  },
];

// Live sites on Vercel. Front-end work and client websites.
export const sites = [
  {
    name: 'Designed 4 Resilience',
    url: 'https://designed-4-resilience.vercel.app',
    text: 'Website for a community organisation working in youth development, gender advocacy and environmental education.',
    kind: 'Client website',
  },
  {
    name: 'Physics Sandbox',
    url: 'https://physics-sandbox-portfolio-ubmk.vercel.app',
    repo: gh('PhysicsSandboxPortfolio'),
    text: 'Real-time particle simulation on HTML5 Canvas: click and drag to spawn particles, then tune gravity, bounce and spawn rate.',
    kind: 'Interactive demo',
  },
  {
    name: 'PAGRAGO',
    url: 'https://pagrago.vercel.app',
    text: 'Company site for a distributor of video management software and AI-assisted CCTV theft detection.',
    kind: 'Client website',
  },
];

// Production work at TelOne, grouped by area. Described, not linked: the code belongs to my employer.
export const workSystems = [
  {
    area: 'Payments and merchants',
    items: [
      {
        name: 'TelOne Payment Gateway (TOPG)',
        stack: 'C#, .NET 6, SQL Server, EcoCash, OneMoney and TelPay APIs',
        text: 'Designed and built the core mobile money platform. Background jobs chase pending payments and reconcile every status, so a customer who pays is always credited.',
      },
      {
        name: 'Online Merchant Integration (TOMI)',
        stack: 'ASP.NET MVC, SQL Server, LDAP',
        text: 'The platform prepaid merchants use to sell data and voice vouchers. Closed a race condition that let simultaneous purchases slip past balance checks, using semaphore locking proven under load.',
      },
      {
        name: 'Merchant Promotion and Prize-Draw Tool',
        stack: 'ASP.NET, SQL Server, LDAP',
        text: 'Reusable multi-merchant promotion engine that draws winners from TOMI transaction data, with LDAP staff login.',
      },
      {
        name: 'Electronic Voucher Distribution',
        stack: 'ASP.NET, SQL Server',
        text: 'Upgrades to the system that distributes prepaid electronic vouchers to the sales channel.',
      },
      {
        name: 'Self-Service Kiosks',
        stack: 'ASP.NET MVC, Angular, payment integration',
        text: 'Touchscreen kiosks where customers buy and activate data plans on their own, with secure payment and instant activation.',
      },
    ],
  },
  {
    area: 'Messaging and loyalty',
    items: [
      {
        name: 'SMS Queue API and Scheduler',
        stack: '.NET 8 (from .NET Framework 4.6.1), Infobip',
        text: 'Rebuilt the legacy messaging service as a queue-based SMS backbone, with a scheduler for timed campaigns and reminders.',
      },
      {
        name: 'SMS API Admin Portal',
        stack: 'Web front end, REST APIs',
        text: 'Admin dashboard for the SMS gateway: manage API clients, send messages and track delivery.',
      },
      {
        name: 'WhatsApp and SMS Notification Gateway',
        stack: 'Gikko (Infobip partner), REST APIs',
        text: 'Integrated a second notification channel for SMS and WhatsApp, and wrote the WhatsApp Business API business case that went to management.',
      },
      {
        name: 'HVC Loyalty Points Service',
        stack: '.NET 8 worker service, SQL Server',
        text: 'Spots each high-value subscriber’s first recharge of the month, awards points and sends an SMS. Index and key redesign kept it fast at volume.',
      },
    ],
  },
  {
    area: 'Customer and staff platforms',
    items: [
      {
        name: 'Support Portal and XGPON Rollout',
        stack: 'Alpine.js, HTMX, Tailwind CSS, .NET, SQL Server',
        text: 'One place for the support desk to work. Delivered XGPON fibre package management across billing, sales and self-service, and surfaced loyalty statistics for agents.',
      },
      {
        name: 'Contract Lifecycle Management',
        stack: 'Java 17, Spring Boot, PostgreSQL, React',
        text: 'Four-person team, 161 endpoints. I built the LDAP/JWT login, role-based access across 20 controllers, DOCX/PDF document generation, and screens and approval forms.',
      },
      {
        name: 'Casual Workers Recruitment System',
        stack: 'Python, Django, Docker, Linux',
        text: 'Built from scratch to take casual hiring online: public application forms, validation, and staff screens for reviewing and shortlisting applicants.',
      },
      {
        name: 'Digital Shop Admin',
        stack: 'Web front end, REST APIs',
        text: 'Back office for the online shop, where staff manage products, orders and customers.',
      },
      {
        name: 'Billing and CRM Integration',
        stack: 'C#, .NET, REST APIs',
        text: 'Connected legacy billing to the CRM through REST APIs for 500,000+ subscribers at 99.5% data accuracy, replacing manual reconciliation.',
      },
    ],
  },
  {
    area: 'Platform, security and fraud',
    items: [
      {
        name: 'Call Centre Platform on Kubernetes',
        stack: 'FreePBX, QueueMetrics, k3s on Hyper-V',
        text: 'Integrated reporting for a 96-agent call centre and stood up the Kubernetes cluster its supporting services run on.',
      },
      {
        name: 'Security Hardening Programme',
        stack: 'Nessus, IIS, Apache Tomcat, SSL/TLS',
        text: 'Led remediation of Nessus findings across production servers: weak SSL/TLS, jQuery XSS exposures and outdated Tomcat components.',
      },
      {
        name: 'VoIP Fraud Management System',
        stack: 'Spring Boot, React, CDR analytics',
        text: 'Designed detection for IRSF, Wangiri, traffic pumping and SIM box fraud: a CDR collector and rules engine with the IMS as enforcement point.',
      },
      {
        name: 'AI Virtual Care Centre',
        stack: 'Concept paper, Exco presentation',
        text: 'Proposal for AI-first customer care that handles routine queries and hands over to human agents.',
      },
    ],
  },
];

export const experience = [
  {
    role: 'Senior Software Developer, Solutions Development',
    org: 'TelOne (Private) Limited',
    period: 'Jan 2021 – present',
    points: [
      'Own the payment and messaging back ends: payment gateway, merchant platform, SMS Queue API and loyalty service.',
      'Build web front ends in React, Alpine.js, HTMX and Tailwind CSS for contract management, support and admin portals.',
      'Set up Azure DevOps CI/CD to IIS, Docker and k3s, cutting deployment time by 60%; refactoring towards microservices improved reliability by 35%.',
      'Introduced code review and unit, integration and UAT testing that reached a 95% defect detection rate; mentor junior developers.',
      'Regularly act as Solutions Manager: sprint planning, team direction and stakeholder communication.',
    ],
  },
  {
    role: 'IT Systems Coordinator',
    org: 'Easi Group',
    period: 'Jun 2020 – Dec 2020',
    points: [
      'Supported 200+ users across five subsidiaries; led system migrations with zero data loss and set up disaster recovery.',
    ],
  },
];

export const skills = [
  { group: 'Back end', items: ['C#', '.NET 6/8', 'ASP.NET Core', 'Entity Framework', 'Java / Spring Boot', 'Python / Django, FastAPI'] },
  { group: 'Front end', items: ['React', 'TypeScript', 'Angular', 'HTMX', 'Alpine.js', 'Tailwind CSS'] },
  { group: 'Data', items: ['SQL Server', 'PostgreSQL', 'Query tuning', 'Stored procedures', 'Migrations'] },
  { group: 'AI', items: ['LLM APIs', 'RAG', 'Agents and MCP', 'Evaluation', 'Anomaly detection'] },
  { group: 'Platform', items: ['Docker', 'Kubernetes (k3s)', 'Azure DevOps', 'GitHub Actions', 'Linux', 'IIS'] },
  { group: 'Integration', items: ['EcoCash', 'TelPay', 'Infobip', 'WhatsApp Business API', 'LDAP'] },
];

export const education = [
  { award: 'MTech, Software Engineering', school: 'Harare Institute of Technology', year: '2025' },
  { award: 'BSc (Hons) Information Technology', school: 'Chinhoyi University of Technology', year: '2021' },
];

// The USSD menu in the hero. Keys map to section ids.
export const menu = [
  { key: '1', label: 'Projects', target: 'projects' },
  { key: '2', label: 'At TelOne', target: 'telone' },
  { key: '3', label: 'Experience', target: 'experience' },
  { key: '4', label: 'Skills', target: 'skills' },
  { key: '5', label: 'Contact', target: 'contact' },
];
