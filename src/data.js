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
    name: 'InsureHub',
    repo: gh('insurehub'),
    status: 'code',
    pitch:
      'Full-stack insurance platform for motor, funeral and home cover in USD and ZiG: rating engines, quote-to-policy, EcoCash premium collection, automatic lapse and reinstatement, and an audited claims workflow.',
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

// Production work at TelOne. Described, not linked: the code belongs to my employer.
export const workSystems = [
  {
    name: 'TelOne Payment Gateway',
    stack: 'C#, .NET 6, SQL Server, EcoCash and TelPay APIs',
    text: 'The payment engine behind mobile money collections. Background jobs chase pending payments and reconcile every status, so a customer who pays is always credited.',
  },
  {
    name: 'Online Merchant Integration',
    stack: 'ASP.NET MVC, SQL Server, LDAP',
    text: 'Found and closed a race condition where simultaneous voucher purchases could slip past balance checks, then proved the fix under concurrent load.',
  },
  {
    name: 'SMS Queue API and Scheduler',
    stack: '.NET 8, Infobip',
    text: 'Rebuilt a legacy .NET Framework messaging service as a queue-based SMS backbone, with a scheduler for timed campaigns and reminders.',
  },
  {
    name: 'HVC Loyalty Points Service',
    stack: '.NET 8 worker service, SQL Server',
    text: 'Spots each high-value subscriber’s first recharge of the month, awards points and sends an SMS. Index and key redesign kept it fast at volume.',
  },
  {
    name: 'VoIP Fraud Management System',
    stack: 'Spring Boot, React, CDR analytics',
    text: 'Designed detection for IRSF, Wangiri, traffic pumping and SIM box fraud: a CDR collector and rules engine with the IMS as enforcement point.',
  },
  {
    name: 'Call Centre Platform',
    stack: 'FreePBX, QueueMetrics, k3s on Hyper-V',
    text: 'Integrated reporting for a 96-agent call centre and stood up the Kubernetes cluster its supporting services run on.',
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
      'Deploy through Azure DevOps CI/CD to IIS, Docker and k3s; refactoring towards microservices improved reliability by 35%.',
      'Introduced code review and unit, integration and UAT testing that reached a 95% defect detection rate; mentor junior developers.',
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
