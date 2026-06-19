export interface ServiceDetail {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  color: string
  accent: string
  icon: string
  keywords: string[]
  includes: string[]
  process: { step: string; detail: string }[]
  faq: { q: string; a: string }[]
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "gst-filing",
    title: "GST Filing & Compliance",
    shortTitle: "GST Filing",
    tagline: "Complete GST registration, returns, and advisory for your business",
    description:
      "We handle end-to-end GST compliance — from registration to monthly/quarterly return filing, reconciliation, and responding to notices — so your business stays fully compliant under the GST framework.",
    color: "#f97316",
    accent: "#ea580c",
    icon: "Receipt",
    keywords: ["gst", "gst filing", "gstr", "gstr1", "gstr3b", "gstr9", "gst return", "goods and services tax", "gst registration", "gst reconciliation"],
    includes: [
      "GST Registration (GSTIN)",
      "Monthly / Quarterly GSTR-1 filing",
      "Monthly GSTR-3B filing",
      "Annual GSTR-9 & GSTR-9C",
      "Input Tax Credit (ITC) reconciliation",
      "E-way bill management",
      "GST notice response & representation",
      "GST advisory for composition scheme",
    ],
    process: [
      { step: "Document Collection", detail: "We collect your sales & purchase invoices, bank statements, and prior returns." },
      { step: "Data Reconciliation", detail: "We match your GSTR-2B with purchase records and identify ITC mismatches." },
      { step: "Return Preparation", detail: "GSTR-1 and GSTR-3B are prepared accurately with full ITC optimization." },
      { step: "Review & Filing", detail: "You review the summary; we file on the portal and share acknowledgements." },
      { step: "Ongoing Support", detail: "We track due dates, send reminders, and handle any notices received." },
    ],
    faq: [
      { q: "Who needs to file GST returns?", a: "Any business registered under GST with a valid GSTIN must file GSTR-1 and GSTR-3B monthly or quarterly based on their turnover." },
      { q: "What is the penalty for late GST filing?", a: "Late fee of ₹50/day (₹20/day for nil returns) applies, plus 18% interest on tax due." },
      { q: "Can you handle GST notices?", a: "Yes, we draft and submit replies to show-cause notices, demand notices, and assessment orders on your behalf." },
    ],
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    shortTitle: "Income Tax Filing",
    tagline: "ITR filing for individuals, firms & companies with maximum refund",
    description:
      "We file Income Tax Returns for salaried individuals, business owners, partnership firms, and companies. Our experts handle tax planning, advance tax computation, and notice responses to keep you fully compliant.",
    color: "#93c5fd",
    accent: "#3b82f6",
    icon: "FileText",
    keywords: ["income tax", "itr", "itr filing", "tax return", "income tax return", "tax filing", "advance tax", "form 16", "tds refund", "tax planning", "it return"],
    includes: [
      "ITR-1, ITR-2, ITR-3, ITR-4 filing",
      "Business income computation",
      "Capital gains reporting",
      "Tax planning & advance tax calculation",
      "Form 16 / 16A verification",
      "Income tax notice response",
      "TDS refund tracking",
      "Salary restructuring advisory",
    ],
    process: [
      { step: "Document Review", detail: "We collect Form 16, bank statements, investment proofs, and prior ITRs." },
      { step: "Income Computation", detail: "All income heads (salary, business, capital gains, other) are computed accurately." },
      { step: "Deduction Optimization", detail: "We apply all eligible deductions under 80C, 80D, HRA, LTA, etc." },
      { step: "Return Filing", detail: "ITR is filed on the income tax portal; you receive the acknowledgement (ITR-V)." },
      { step: "Refund Follow-up", detail: "We track your refund status and follow up with the department if delayed." },
    ],
    faq: [
      { q: "Who must file an ITR?", a: "Anyone with taxable income above ₹2.5 lakh (or ₹3 lakh for seniors) must file. Filing is also beneficial even if income is below the threshold for refund claims." },
      { q: "What is the last date for ITR filing?", a: "For individuals and firms not requiring audit: July 31. For audit cases: October 31. Belated returns can be filed until December 31." },
      { q: "Can you file ITR for multiple years?", a: "Yes, we can file updated returns (ITR-U) for up to 2 years prior to the current assessment year." },
    ],
  },
  {
    slug: "tds-compliance",
    title: "TDS Compliance",
    shortTitle: "TDS Compliance",
    tagline: "Complete TDS deduction, deposit, returns, and certificates",
    description:
      "We manage your end-to-end TDS obligations — deducting the right amount from payments, depositing to the government on time, filing quarterly returns, and issuing Form 16/16A certificates to employees and vendors.",
    color: "#34d399",
    accent: "#10b981",
    icon: "TrendingUp",
    keywords: ["tds", "tds return", "tds filing", "form 24q", "form 26q", "form 16", "form 16a", "tds certificate", "tax deducted at source", "tds deduction", "tds deposit"],
    includes: [
      "TDS deduction calculation for salaries (Form 24Q)",
      "TDS on vendor payments (Form 26Q)",
      "TDS on rent & professional fees (Form 26Q)",
      "Monthly TDS deposit via challan",
      "Quarterly TDS return filing (24Q / 26Q)",
      "Form 16 generation for employees",
      "Form 16A for vendors & contractors",
      "TDS notice response & correction",
    ],
    process: [
      { step: "Payment Review", detail: "We analyze all payments liable for TDS deduction under various sections (192, 194C, 194J, etc.)." },
      { step: "Deduction & Deposit", detail: "Correct TDS amounts are deducted and deposited to the government by the 7th of next month." },
      { step: "Return Filing", detail: "Quarterly returns (24Q/26Q) are filed on TRACES portal with correct PAN mapping." },
      { step: "Certificate Generation", detail: "Form 16 and 16A certificates are generated and shared with employees/vendors." },
      { step: "Default Management", detail: "We identify and correct any short-deduction or short-payment defaults proactively." },
    ],
    faq: [
      { q: "What is the due date for TDS deposit?", a: "TDS must be deposited by the 7th of the following month (except March — due by April 30)." },
      { q: "What if TDS is not deducted?", a: "Non-deduction attracts 1% per month interest and disallowance of the related expense in your tax computation." },
      { q: "Do I need to file TDS returns if I have no TDS?", a: "If you are registered as a deductor (TAN holder), you must file NIL returns each quarter." },
    ],
  },
  {
    slug: "company-formation",
    title: "Company Formation & Registration",
    shortTitle: "Company Formation",
    tagline: "Register your company, LLP, or firm with complete MCA compliance",
    description:
      "We handle all business registrations — private limited companies, LLPs, partnership firms, sole proprietorships, and Udyam (MSME). From name approval to incorporation certificate, we manage the entire process.",
    color: "#f97316",
    accent: "#ea580c",
    icon: "Building2",
    keywords: ["company registration", "company formation", "pvt ltd", "private limited", "llp", "limited liability", "partnership", "sole proprietorship", "mca", "udyam", "msme registration", "shop act", "incorporation", "startup registration"],
    includes: [
      "Private Limited Company registration",
      "LLP (Limited Liability Partnership) formation",
      "Partnership firm registration",
      "Sole proprietorship setup",
      "Udyam / MSME registration",
      "Shop & Establishment Act registration",
      "DIN & DSC procurement",
      "Post-incorporation compliance (PAN, TAN, GST)",
    ],
    process: [
      { step: "Name Approval", detail: "We check availability and file RUN (Reserve Unique Name) application on MCA portal." },
      { step: "Document Preparation", detail: "MOA, AOA, and incorporation forms are prepared with all director and shareholder details." },
      { step: "Filing & Verification", detail: "Documents are filed on MCA21 portal; ROC verifies and processes the application." },
      { step: "Certificate of Incorporation", detail: "You receive the COI, CIN, PAN, and TAN for your new company." },
      { step: "Post-Incorporation Setup", detail: "We help with bank account opening, GST registration, and first board meeting compliance." },
    ],
    faq: [
      { q: "How long does company registration take?", a: "Private limited company registration typically takes 7–10 working days after all documents are submitted." },
      { q: "What is the minimum capital required?", a: "There is no minimum paid-up capital requirement for private limited companies or LLPs in India." },
      { q: "Can NRIs or foreigners register a company in India?", a: "Yes, subject to FDI guidelines. At least one director must be a resident Indian." },
    ],
  },
  {
    slug: "labour-law-compliance",
    title: "Labour Law Compliance",
    shortTitle: "Labour Law Compliance",
    tagline: "PF, ESIC, PT registration, returns, and full payroll compliance",
    description:
      "We manage all statutory labour law compliances for your workforce — Provident Fund (PF), Employee State Insurance (ESIC), Professional Tax (PT), Gratuity, and bonus calculations — keeping you fully compliant and audit-ready.",
    color: "#c084fc",
    accent: "#a855f7",
    icon: "Scale",
    keywords: ["labour law", "pf", "provident fund", "epfo", "esic", "esi", "professional tax", "pt", "payroll", "gratuity", "bonus", "labour compliance", "pf return", "esic return", "payroll compliance"],
    includes: [
      "PF registration & monthly ECR filing",
      "ESIC registration & monthly return",
      "Professional Tax (PT) registration & returns",
      "Payroll processing & salary slips",
      "Gratuity calculation & compliance",
      "Bonus calculation under Payment of Bonus Act",
      "PF & ESIC inspection handling",
      "Employee exit & full & final settlement",
    ],
    process: [
      { step: "Registration", detail: "We register your business under PF, ESIC, and PT with the respective authorities." },
      { step: "Monthly Payroll", detail: "Salaries are processed with correct PF/ESIC deductions and PT calculations." },
      { step: "Monthly Returns", detail: "PF ECR and ESIC returns are filed on the portals by the due dates each month." },
      { step: "Challan Payment", detail: "PF and ESIC challans are generated and paid to avoid interest and penalties." },
      { step: "Annual Compliance", detail: "Annual returns, bonus calculations, and renewal of registrations are handled." },
    ],
    faq: [
      { q: "When is PF registration mandatory?", a: "Any establishment with 20 or more employees must register with EPFO. Voluntary registration is also available." },
      { q: "What is the current PF contribution rate?", a: "Both employer and employee contribute 12% of basic salary. Employer's contribution also includes 0.5% to EDLI." },
      { q: "Is ESIC applicable to all employees?", a: "ESIC applies to employees earning up to ₹21,000/month (₹25,000 for persons with disabilities) in establishments with 10+ employees." },
    ],
  },
  {
    slug: "loan-syndication",
    title: "Loan Syndication & Finance",
    shortTitle: "Loan Syndication",
    tagline: "Business loans, working capital, and MSME finance facilitation",
    description:
      "We help MSMEs access the right financing — business loans, working capital facilities, MSME loans, and project finance. We prepare CMA data, project reports, and liaise with banks and NBFCs on your behalf.",
    color: "#34d399",
    accent: "#10b981",
    icon: "CreditCard",
    keywords: ["loan", "business loan", "msme loan", "working capital", "loan syndication", "project finance", "cma", "bank loan", "npa", "credit facility", "overdraft", "term loan", "mudra loan"],
    includes: [
      "Business loan facilitation (banks & NBFCs)",
      "Working capital loan & OD/CC limit",
      "MSME / Udyam loan under government schemes",
      "Mudra & CGTMSE loan assistance",
      "CMA data preparation",
      "Project report & feasibility study",
      "Bank liaison & documentation",
      "Loan restructuring advisory",
    ],
    process: [
      { step: "Requirement Assessment", detail: "We understand your business needs — loan amount, purpose, repayment capacity." },
      { step: "Document Preparation", detail: "Financial statements, ITRs, bank statements, and CMA data are compiled." },
      { step: "Lender Matching", detail: "We identify the best bank or NBFC based on your profile and loan requirements." },
      { step: "Application Filing", detail: "Loan application and project report are submitted to the lender with complete documentation." },
      { step: "Follow-up & Disbursement", detail: "We follow up with the lender until sanction and coordinate for disbursement." },
    ],
    faq: [
      { q: "What is CMA data?", a: "CMA (Credit Monitoring Arrangement) data is a financial analysis report required by banks for working capital loans above ₹10 lakh." },
      { q: "Can startups get loans?", a: "Yes, under Mudra Yojana and CGTMSE scheme, new businesses without collateral can get loans up to ₹2 crore." },
      { q: "How long does loan approval take?", a: "Processing time varies: PSU banks take 2–4 weeks; NBFCs and private banks can disburse in 5–7 working days." },
    ],
  },
]

export function findService(query: string): ServiceDetail[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.shortTitle.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.includes(q) || q.includes(k))
  )
}
