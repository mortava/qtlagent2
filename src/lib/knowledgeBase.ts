// ============================================
// QUALR KNOWLEDGE BASE - Comprehensive Mortgage Lending Guidelines
// ============================================
// Hybrid RAG system with context-aware retrieval
// All data is LOCAL - NO internet queries

export interface KnowledgeEntry {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  content: string;
  keywords: string[];
  priority: number;
}

export interface ProgramMatrix {
  programName: string;
  occupancy: string;
  creditScoreMin: number;
  loanAmountMin: number;
  loanAmountMax: number;
  incomeDocType: string;
  dscrMin?: number;
  ltvPurchase: number;
  ltvRateTerm: number;
  ltvCashOut: number;
  dtiMax?: number;
  reserves?: string;
  propertyTypes: string[];
  eligibleStates: string[];
}

// ============================================
// PROGRAM MATRICES - Quick Lookup Tables
// ============================================

export const programMatrices: ProgramMatrix[] = [
  // NON-AGENCY Programs
  {
    programName: "NON-AGENCY",
    occupancy: "Primary Residence",
    creditScoreMin: 720,
    loanAmountMin: 100000,
    loanAmountMax: 150000,
    incomeDocType: "Full Doc & Alt-Doc",
    ltvPurchase: 90,
    ltvRateTerm: 90,
    ltvCashOut: 80,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD", "Townhome", "Condo", "2-4 Unit"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  },
  {
    programName: "NON-AGENCY",
    occupancy: "Primary Residence",
    creditScoreMin: 660,
    loanAmountMin: 100000,
    loanAmountMax: 150000,
    incomeDocType: "Full Doc & Alt-Doc",
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD", "Townhome", "Condo", "2-4 Unit"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  },
  // DSCR Programs
  {
    programName: "DEFY DSCR SELECT",
    occupancy: "Investor / Non-Owner",
    creditScoreMin: 720,
    loanAmountMin: 150000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.15,
    ltvPurchase: 85,
    ltvRateTerm: 85,
    ltvCashOut: 80,
    reserves: "3-6 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Townhome", "2-4 Units", "Condo"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  },
  {
    programName: "DEFY DSCR",
    occupancy: "Investor / Non-Owner",
    creditScoreMin: 700,
    loanAmountMin: 100000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    reserves: "3-6 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Townhome", "2-4 Units", "Condo"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  },
  {
    programName: "DEFY DSCR",
    occupancy: "Investor / Non-Owner",
    creditScoreMin: 680,
    loanAmountMin: 100000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 75,
    ltvRateTerm: 75,
    ltvCashOut: 70,
    reserves: "6 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Townhome", "2-4 Units", "Condo"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  },
  // Smart Equity Programs
  {
    programName: "Smart Equity",
    occupancy: "Primary Residence",
    creditScoreMin: 700,
    loanAmountMin: 50000,
    loanAmountMax: 350000,
    incomeDocType: "Full-Doc & Alt-Doc",
    ltvPurchase: 0,
    ltvRateTerm: 0,
    ltvCashOut: 90,
    propertyTypes: ["SFR", "PUD", "Townhome", "2-4 Units", "Warrantable Condos"],
    eligibleStates: ["CA", "GA", "FL", "AL", "OR", "TN", "TX"]
  },
  // BLANKET LOANS
  {
    programName: "BLANKET LOANS / CROSS COLLATERAL",
    occupancy: "Investor / Non-Owner",
    creditScoreMin: 700,
    loanAmountMin: 400000,
    loanAmountMax: 3000000,
    incomeDocType: "DSCR",
    dscrMin: 1.20,
    ltvPurchase: 70,
    ltvRateTerm: 65,
    ltvCashOut: 65,
    reserves: "6 Months PITIA",
    propertyTypes: ["SFR", "PUD", "2-4 Units Detached"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  },
  // 2-8 Units & Mixed Use
  {
    programName: "2-8 Units & Mixed Use",
    occupancy: "Investor / Non-Owner",
    creditScoreMin: 720,
    loanAmountMin: 400000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.10,
    ltvPurchase: 75,
    ltvRateTerm: 75,
    ltvCashOut: 70,
    reserves: "6-9 Months PITIA",
    propertyTypes: ["5-10 Units Attached", "2-8 Units Mixed Use"],
    eligibleStates: ["CA", "GA", "FL", "TX", "AL", "OR", "TN"]
  }
];

// ============================================
// KNOWLEDGE ENTRIES - Detailed Guidelines
// ============================================

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "credit-001",
    category: "Credit",
    subcategory: "Score Requirements",
    title: "Credit Score Minimums by Program",
    content: `NON-AGENCY Programs:
- Primary Residence: Min 640 FICO (720+ for best LTV)
- Second Home: Min 660 FICO
- Investment: Min 660 FICO

DSCR Programs:
- Standard DSCR: Min 660 FICO
- DSCR SELECT: Min 720 FICO for best terms
- Foreign Nationals: No Score Required (special pricing)

Smart Equity (2nd Mortgages):
- Primary: Min 660 FICO
- Second Home: Min 660 FICO
- Investment: Min 660 FICO

Qualifying Score: Middle score of primary wage earner (or lower of 2 scores)`,
    keywords: ["credit score", "fico", "minimum score", "credit requirements"],
    priority: 10
  },
  {
    id: "credit-002",
    category: "Credit",
    subcategory: "Tradeline Requirements",
    title: "Tradeline Requirements",
    content: `Standard Tradeline Requirements:
- 3 tradelines reporting for 12+ months, OR
- 2 tradelines reporting for 24+ months, OR
- 1 mortgage/installment tradeline for 36+ months

All tradelines must show activity in the last 12 months.
Maximum: 0x60 in most recent 12 months (no 60-day lates).

Tradeline Waiver: Can be waived when primary wage earner has 700+ scores from ALL 3 bureaus.

Limited Tradelines: Allowed on Primary Occupancy Only.`,
    keywords: ["tradelines", "credit history", "credit accounts", "trade lines"],
    priority: 9
  },
  {
    id: "credit-003",
    category: "Credit",
    subcategory: "Credit Events",
    title: "Credit Event Seasoning Requirements",
    content: `NON-AGENCY & NON-AGENCY SELECT:
- Foreclosure (FC): >48 months seasoning
- Deed-in-Lieu (DIL): >48 months seasoning
- Short Sale (SS): >48 months seasoning
- BK Chapter 7: 48 months from Discharge
- BK Chapter 13: 36 months from Filing Date
- Mortgage History: Max 1x30x12 (one 30-day late in 12 months)

DSCR Programs:
- FC/SS/DIL/BK: >48 months seasoning
- 2-8 Units & Mixed Use: >60 months seasoning
- Mortgage History: 0x30x12 required (no lates)`,
    keywords: ["bankruptcy", "foreclosure", "short sale", "deed in lieu", "credit event", "seasoning"],
    priority: 9
  },
  {
    id: "ltv-001",
    category: "LTV",
    subcategory: "Purchase",
    title: "Maximum LTV for Purchase Transactions",
    content: `NON-AGENCY (Primary Residence):
- 720+ FICO: Up to 90% LTV
- 700-719 FICO: Up to 85% LTV
- 680-699 FICO: Up to 80% LTV
- 660-679 FICO: Up to 80% LTV
- 640-659 FICO: Up to 75% LTV

DSCR (Investment):
- 720+ FICO: Up to 85% LTV
- 700-719 FICO: Up to 80% LTV
- 680-699 FICO: Up to 75% LTV
- 660-679 FICO: Up to 70% LTV

Property Type Adjustments:
- Condo: Purchase Max LTV 90%
- Non-Warrantable Condo: Purchase Max LTV 80%
- 2-4 Unit: Purchase Max LTV 80%
- Rural Property: Purchase Max LTV 75% (Primary Only)`,
    keywords: ["ltv", "loan to value", "purchase", "down payment"],
    priority: 10
  },
  {
    id: "ltv-002",
    category: "LTV",
    subcategory: "Refinance",
    title: "Maximum LTV for Refinance Transactions",
    content: `Rate & Term Refinance:
- NON-AGENCY Primary (720+): Up to 90% LTV
- NON-AGENCY Primary (660-719): Up to 80-85% LTV
- DSCR Investment (720+): Up to 85% LTV
- DSCR Investment (680-719): Up to 75-80% LTV

Cash-Out Refinance:
- NON-AGENCY Primary (720+): Up to 85% LTV
- DSCR Investment (720+): Up to 80% LTV
- Condo: Max 80% LTV
- Non-Warrantable Condo: Max 75% LTV
- 2-4 Unit: Max 75% LTV
- Rural: Max 70% LTV (Primary Only)

Max Cash-Out Amounts:
- LTV ≤65%: Unlimited cash out
- LTV >65% or Investment: Max $1,000,000 cash out`,
    keywords: ["refinance", "cash out", "rate term", "ltv", "cash-out"],
    priority: 10
  },
  {
    id: "income-001",
    category: "Income",
    subcategory: "Full Documentation",
    title: "Full Documentation Income Requirements",
    content: `W-2 Wage Earners:
- 1 or 2 years W-2s required
- Standard income calculation rules apply

Self-Employed Borrowers:
- 1 or 2 years Tax Returns required
- Personal and/or Business returns
- Standard self-employment income rules apply`,
    keywords: ["full doc", "w2", "tax returns", "income documentation", "wage earner"],
    priority: 8
  },
  {
    id: "income-002",
    category: "Income",
    subcategory: "Alternative Documentation",
    title: "Alt-Doc Income Options",
    content: `Bank Statement Programs:
- 12 Months Personal Bank Statements, OR
- 12 Months Business Bank Statements

1099 Income:
- 12 Months 1099 Income + WVOE, OR
- 12 Months 1099 + Last 2 Months Bank Statements

P&L (Profit & Loss):
- 12 Month CPA/Licensed Accountant Prepared P&L + Last 2 Months Bank Statements, OR
- 12 Month CPA P&L ONLY (No Bank Statements required)

Asset Depletion/Utilization:
- Available for qualifying borrowers`,
    keywords: ["bank statements", "alt doc", "1099", "p&l", "profit loss", "asset depletion"],
    priority: 9
  },
  {
    id: "income-003",
    category: "Income",
    subcategory: "DSCR",
    title: "DSCR (Debt Service Coverage Ratio) Requirements",
    content: `DSCR Calculation:
DSCR = Monthly Rental Income / PITIA (Principal + Interest + Taxes + Insurance + HOA)

DSCR Minimums by Program:
- DSCR SELECT: ≥1.15 (1.150%)
- Standard DSCR: ≥1.00 (1.000%)
- Blanket Loans: ≥1.20 (1.200%)
- 2-8 Units & Mixed Use: ≥1.10 (1.100%)

Rental Income Calculation:
- Use LESSER of: Estimated Market Rent (Form 1007) OR Monthly Rent from existing lease
- Higher lease rent allowed with 3 months receipts

Unleased Properties:
- Max LTV 70% on Refinances
- No LTV reduction for Purchase

Short Term Rentals (STR):
- Purchase: Max LTV 75%
- Cash-Out: Max LTV 70%
- 12 months documented STR history required for refinance
- Use AirDNA for monthly rental income
- Min 60% Occupancy Rate required`,
    keywords: ["dscr", "debt service coverage ratio", "rental income", "investment property", "cash flow"],
    priority: 10
  },
  {
    id: "dti-001",
    category: "DTI",
    subcategory: "Requirements",
    title: "Debt-to-Income Ratio Requirements",
    content: `NON-AGENCY SELECT:
- Maximum DTI: 50%

NON-AGENCY:
- Standard DTI: Up to 50%
- Expanded DTI (50.01% - 55%): Primary Residence ONLY

DSCR Programs:
- No DTI calculation required
- Qualification based on DSCR ratio only`,
    keywords: ["dti", "debt to income", "debt ratio", "qualifying ratio"],
    priority: 9
  },
  {
    id: "reserves-001",
    category: "Reserves",
    subcategory: "Requirements",
    title: "Reserve Requirements by Loan Amount",
    content: `NON-AGENCY & NON-AGENCY SELECT:
- $100,000 - $500,000: 3 Months PITIA
- $500,001 - $1,500,000: 6 Months PITIA
- $1,500,001 - $2,500,000: 9 Months (12 on Expanded)
- $2,500,001 - $3,000,000: 12 Months
- $3,000,001 - $4,000,000: 18 Months
- Second Home Occupancy: 12 Months

DSCR Programs:
- Standard: 3 Months PITIA (Loan ≤$1mm)
- Loan >$1mm: 6 Months PITIA
- DSCR <1.00x: 6 Months PITIA
- Foreign Nationals: 6 Months PITIA
- Cash-out can be used for reserves

2-8 Units & Mixed Use:
- ≤$1,500,000: 6 Months
- ≥$1,500,000: 9 Months
- Cash Out CANNOT be used for reserves`,
    keywords: ["reserves", "pitia", "months reserves", "liquid assets"],
    priority: 9
  },
  {
    id: "property-001",
    category: "Property",
    subcategory: "Eligible Types",
    title: "Eligible Property Types",
    content: `Standard Eligible Properties:
- Single Family Residence (SFR)
- Planned Unit Development (PUD)
- Townhome
- Condominium (Warrantable)
- 2-4 Units

Specialty Properties:
- Non-Warrantable Condos: Max LTV 75-80%
- Rural Properties: Primary Only, Max LTV 65-75%
- Mixed Use: Max 25% Commercial Space, DSCR Only
- 5-10 Units: DSCR Only

Ineligible Properties:
- Condotels
- Commercial/Agricultural
- Leasehold Properties
- Land Trusts
- Age-Restricted Communities
- Hobby Farms
- Modular Homes
- Land Contract
- Log Homes`,
    keywords: ["property type", "sfr", "condo", "pud", "townhome", "multi-unit"],
    priority: 8
  },
  {
    id: "products-001",
    category: "Products",
    subcategory: "Loan Terms",
    title: "Available Loan Products and Terms",
    content: `Fixed Rate Products:
- 15 Year Fixed
- 30 Year Fixed
- 40 Year Fixed (NON-AGENCY)

Interest Only Products:
- 30 Year Fixed with 10 Year I/O Period
- 40 Year Fixed with 10 Year I/O Period
- After I/O period, converts to remaining amortization

Smart Equity (2nd Mortgages):
- 10, 20, 30 Year Fixed
- I/O: 25/30 Year with 5 Year I/O Period

Interest Only Requirements:
- Maximum LTV: 80%
- Minimum DSCR: >1.000`,
    keywords: ["loan products", "fixed rate", "interest only", "loan terms", "io"],
    priority: 8
  },
  {
    id: "prepay-001",
    category: "Prepayment",
    subcategory: "Penalties",
    title: "Prepayment Penalty Options",
    content: `Investment Property Prepay Options:
- Standard: 5% of Current Balance
- Step Down 5/4/3-year: 5%, 4%, 3%, 2%, 1%
- 2-Year Standard: 5%
- 1-Year Standard: 5% or 6 Months Interest

Program Requirements:
- NON-AGENCY: Only on Investment Property
- 2-8 Units & Mixed Use: Min 1 Year PPP
- 9-10 Units: Min 3 Year PPP
- Blanket Loans: Min 1 Year - Standard 5% of UPB

Note: NOT allowed on Primary Residence or Second Home.`,
    keywords: ["prepayment penalty", "ppp", "prepay", "early payoff"],
    priority: 7
  },
  {
    id: "citizenship-001",
    category: "Borrower",
    subcategory: "Citizenship",
    title: "Eligible Citizenship Status",
    content: `NON-AGENCY & NON-AGENCY SELECT:
- US Citizens
- Permanent Resident Aliens
- Non-Permanent Resident Aliens (with US Credit)

DSCR Programs:
- US Citizens
- Permanent Resident Aliens
- Non-Permanent Resident Aliens (with US Credit)
- Foreign Nationals: Max 65% LTV all transaction types

Smart Equity:
- US Citizens
- Permanent Resident Aliens
- Non-Permanent Resident Aliens (with SSN)`,
    keywords: ["citizenship", "foreign national", "permanent resident", "alien", "visa"],
    priority: 8
  },
  {
    id: "states-001",
    category: "Geography",
    subcategory: "Eligible States",
    title: "Eligible States by Program",
    content: `NON-AGENCY & NON-AGENCY SELECT:
- CA, GA, FL, TX, AL, OR, TN

DSCR Programs Full List:
AR, CT, CO, DC, DE, HI, IA, IN, KS, KY, LA, MA, MD, ME, MI, MO, MS, MT, NE, NH, NJ, NY, OH, OK, PA, RI, SC, VA, VT, WA, WI, WY, CA, GA, FL, TX, AL, OR, TN

Smart Equity Income Qualifying:
- CA, GA, FL, AL, OR
- TN & TX: DSCR Only

Ineligible States:
- MD, NY, HI (in Lava Zones)

Special Requirements (Min 720 FICO):
- NJ, NY, RI, MD, IL, DC for 2-8 Units/Multi-Family`,
    keywords: ["states", "eligible states", "california", "texas", "florida", "geographic"],
    priority: 7
  },
  {
    id: "seasoning-001",
    category: "Seasoning",
    subcategory: "Ownership",
    title: "Ownership and Refinance Seasoning",
    content: `Primary Residence:
- No ownership seasoning required
- If <6 months seasoning: 10% CLTV reduction

Second Home & Investment:
- 6 months ownership seasoning required
- Use appraised value after 6 months
- <6 months: Use Purchase Price + Documented Improvements

Cash-Out with <6 Month Ownership:
- Allowed at Max 75% LTV
- Requires CDA or SRR score ≤2.5`,
    keywords: ["seasoning", "ownership", "refinance seasoning", "title seasoning"],
    priority: 8
  },
  {
    id: "assets-001",
    category: "Assets",
    subcategory: "Source of Funds",
    title: "Asset and Gift Fund Requirements",
    content: `Source of Funds:
- Must be sourced OR seasoned for 30 days

Gift Funds - Allowed after borrower contributes:
- Primary Residence: 5% of own funds first
- Second Home: 10% of own funds first
- Investment Property: 10% of own funds first

Cash-in-Hand Limits:
- Standard: Max $1,000,000
- >$1.0M with <50% LTV: Contact Sales`,
    keywords: ["assets", "gift funds", "cash", "down payment source", "reserves"],
    priority: 7
  },
  {
    id: "fthb-001",
    category: "Borrower",
    subcategory: "FTHB",
    title: "First Time Home Buyer Guidelines",
    content: `NON-AGENCY:
- First Time Home Buyers: ALLOWED on Primary Residence
- NOT Allowed on Second Home
- NOT Allowed on Investment Property

DSCR & Investment:
- First Time Investors: Special restrictions apply
- STR: No First Time Investors allowed

Experience Requirements:
- 2-8 Units & Mixed Use: Must have owned property 1+ year in last 3 years
- Blanket Loans: Must have owned property 1+ year in last 3 years`,
    keywords: ["first time home buyer", "fthb", "first time investor", "experience"],
    priority: 7
  },
  {
    id: "appraisal-001",
    category: "Appraisal",
    subcategory: "Requirements",
    title: "Appraisal Requirements",
    content: `Standard Requirements:
- Use standard FNMA Forms
- Non-Owners must have Form 1007 and 216
- AVM required on all transactions <80% LTV

Additional Requirements:
- <80% LTV: CDA, Field Review, or FNMA CU Review (SRR ≤2.5)
- Loan >$2,000,000: 2 Full Appraisals Required

Smart Equity:
- ≤$400,000: AVM + Property Condition Report OR Full Interior
- >$400,000: Full Interior Appraisal Required
- HPML: Full Interior Required
- Appraisal Waivers NOT Allowed`,
    keywords: ["appraisal", "avm", "valuation", "1007", "1004"],
    priority: 8
  },
  {
    id: "escrow-001",
    category: "Escrow",
    subcategory: "Requirements",
    title: "Escrow Account Requirements",
    content: `Escrow Required When:
- LTV >80.01%
- CA Exception: Required >89.99% LTV
- All HPML (High Priced Mortgage Loans)

Per RESPA & TILA regulations.
No Section 32 or state high cost loans.`,
    keywords: ["escrow", "impounds", "tax escrow", "insurance escrow"],
    priority: 6
  },
  {
    id: "concessions-001",
    category: "Transaction",
    subcategory: "Seller Concessions",
    title: "Seller Concession Limits",
    content: `Maximum Seller Concessions:
- All Occupancies: Up to 6% towards closing costs

Note: May be limited by LTV in some scenarios.
Excess must reduce loan amount.`,
    keywords: ["seller concessions", "closing costs", "seller contributions"],
    priority: 6
  }
];

// ============================================
// CONTEXT-AWARE RETRIEVAL FUNCTIONS
// ============================================

export function searchKnowledge(query: string): KnowledgeEntry[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

  return knowledgeBase
    .map(entry => {
      let score = 0;

      // Check keywords (highest weight)
      entry.keywords.forEach(keyword => {
        if (queryLower.includes(keyword)) score += 10;
        queryWords.forEach(word => {
          if (keyword.includes(word)) score += 5;
        });
      });

      // Check title
      if (entry.title.toLowerCase().includes(queryLower)) score += 8;
      queryWords.forEach(word => {
        if (entry.title.toLowerCase().includes(word)) score += 3;
      });

      // Check content
      queryWords.forEach(word => {
        if (entry.content.toLowerCase().includes(word)) score += 1;
      });

      // Boost by priority
      score *= (entry.priority / 10);

      return { entry, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.entry);
}

export function findProgram(
  creditScore: number,
  loanAmount: number,
  occupancy: string,
  transactionType: "purchase" | "rateTerm" | "cashOut"
): ProgramMatrix[] {
  return programMatrices.filter(program => {
    if (creditScore < program.creditScoreMin) return false;
    if (loanAmount < program.loanAmountMin || loanAmount > program.loanAmountMax) return false;
    if (!program.occupancy.toLowerCase().includes(occupancy.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    const ltvA = transactionType === "purchase" ? a.ltvPurchase :
                 transactionType === "rateTerm" ? a.ltvRateTerm : a.ltvCashOut;
    const ltvB = transactionType === "purchase" ? b.ltvPurchase :
                 transactionType === "rateTerm" ? b.ltvRateTerm : b.ltvCashOut;
    return ltvB - ltvA;
  });
}

export function getContextForQuery(query: string): string {
  const relevantEntries = searchKnowledge(query);

  if (relevantEntries.length === 0) {
    return "No specific guidelines found. Please refer to the general program matrices.";
  }

  return relevantEntries
    .map(entry => `## ${entry.title}\n${entry.content}`)
    .join("\n\n---\n\n");
}
