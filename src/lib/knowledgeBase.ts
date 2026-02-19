// ============================================
// TQL KNOWLEDGE BASE - Total Quality Lending Guidelines
// ============================================
// Comprehensive RAG system built from official TQL training documents:
// - DSCR Investor Solutions (124 Q&A)
// - Closed End Second Lien Matrix (116 Q&A)
// - Foreign National DSCR Guidelines
// - Full Alt Doc Matrix Card
// - Full Underwriting Guidelines (90 pages)
// ALL DATA IS LOCAL - NO internet queries

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
// TQL PROGRAM MATRICES - Quick Lookup Tables
// ============================================

export const programMatrices: ProgramMatrix[] = [
  // --- DSCR Investor Solutions (DSCR >= 1.00) ---
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 740,
    loanAmountMin: 100000,
    loanAmountMax: 1000000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    reserves: "2 Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit", "Condo", "Condo Hotel", "Rural"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 740,
    loanAmountMin: 1000001,
    loanAmountMax: 2500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    reserves: "6-12 Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit", "Condo"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 740,
    loanAmountMin: 2500001,
    loanAmountMax: 3500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 70,
    ltvRateTerm: 65,
    ltvCashOut: 0,
    reserves: "12+ Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 720,
    loanAmountMin: 100000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 85,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    reserves: "2-6 Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit", "Condo", "Condo Hotel", "Rural"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 700,
    loanAmountMin: 100000,
    loanAmountMax: 2000000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 80,
    ltvRateTerm: 75,
    ltvCashOut: 70,
    reserves: "2-6 Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit", "Condo"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 660,
    loanAmountMin: 100000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 75,
    ltvRateTerm: 70,
    ltvCashOut: 65,
    reserves: "2-6 Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit", "Condo"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "DSCR Investor Solutions",
    occupancy: "Investment",
    creditScoreMin: 640,
    loanAmountMin: 100000,
    loanAmountMax: 1000000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 75,
    ltvRateTerm: 70,
    ltvCashOut: 60,
    reserves: "2-6 Months PITIA",
    propertyTypes: ["SFR", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  // --- Non-Agency / Alt Doc (Primary Residence) ---
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Primary Residence",
    creditScoreMin: 720,
    loanAmountMin: 150000,
    loanAmountMax: 4000000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 90,
    ltvRateTerm: 90,
    ltvCashOut: 85,
    dtiMax: 50,
    reserves: "3-18 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Primary Residence",
    creditScoreMin: 700,
    loanAmountMin: 150000,
    loanAmountMax: 2500000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 85,
    ltvRateTerm: 85,
    ltvCashOut: 80,
    dtiMax: 50,
    reserves: "3-12 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Primary Residence",
    creditScoreMin: 680,
    loanAmountMin: 150000,
    loanAmountMax: 2000000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    dtiMax: 50,
    reserves: "3-9 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Primary Residence",
    creditScoreMin: 660,
    loanAmountMin: 150000,
    loanAmountMax: 2000000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    dtiMax: 50,
    reserves: "3-9 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Primary Residence",
    creditScoreMin: 640,
    loanAmountMin: 150000,
    loanAmountMax: 1000000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 75,
    ltvRateTerm: 75,
    ltvCashOut: 70,
    dtiMax: 50,
    reserves: "3-6 Months PITIA",
    propertyTypes: ["SFR", "PUD"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  // --- Non-Agency (Second Home) ---
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Second Home",
    creditScoreMin: 720,
    loanAmountMin: 150000,
    loanAmountMax: 1500000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 85,
    ltvRateTerm: 85,
    ltvCashOut: 80,
    dtiMax: 50,
    reserves: "12 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Second Home",
    creditScoreMin: 680,
    loanAmountMin: 150000,
    loanAmountMax: 1500000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    dtiMax: 50,
    reserves: "12 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  // --- Non-Agency (Investment) ---
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Investment",
    creditScoreMin: 720,
    loanAmountMin: 150000,
    loanAmountMax: 1500000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 80,
    ltvRateTerm: 80,
    ltvCashOut: 75,
    dtiMax: 50,
    reserves: "6 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  {
    programName: "Non-Agency Alt Doc",
    occupancy: "Investment",
    creditScoreMin: 680,
    loanAmountMin: 150000,
    loanAmountMax: 1500000,
    incomeDocType: "Full Doc / Bank Statements / 1099",
    ltvPurchase: 75,
    ltvRateTerm: 70,
    ltvCashOut: 65,
    dtiMax: 50,
    reserves: "6 Months PITIA",
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All 50 states except ineligible territories"]
  },
  // --- Closed End Second Lien ---
  {
    programName: "Closed End Second Lien",
    occupancy: "Primary Residence",
    creditScoreMin: 740,
    loanAmountMin: 50000,
    loanAmountMax: 500000,
    incomeDocType: "Standard Doc / Alt Doc",
    ltvPurchase: 90,
    ltvRateTerm: 0,
    ltvCashOut: 90,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All except TX, PR, GU, USVI"]
  },
  {
    programName: "Closed End Second Lien",
    occupancy: "Primary Residence",
    creditScoreMin: 700,
    loanAmountMin: 50000,
    loanAmountMax: 500000,
    incomeDocType: "Standard Doc / Alt Doc",
    ltvPurchase: 85,
    ltvRateTerm: 0,
    ltvCashOut: 85,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD", "Condo", "2-4 Unit"],
    eligibleStates: ["All except TX, PR, GU, USVI"]
  },
  {
    programName: "Closed End Second Lien",
    occupancy: "Primary Residence",
    creditScoreMin: 680,
    loanAmountMin: 50000,
    loanAmountMax: 500000,
    incomeDocType: "Standard Doc / Alt Doc",
    ltvPurchase: 75,
    ltvRateTerm: 0,
    ltvCashOut: 75,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD", "Condo"],
    eligibleStates: ["All except TX, PR, GU, USVI"]
  },
  {
    programName: "Closed End Second Lien",
    occupancy: "Second Home",
    creditScoreMin: 740,
    loanAmountMin: 50000,
    loanAmountMax: 500000,
    incomeDocType: "Standard Doc / Alt Doc",
    ltvPurchase: 80,
    ltvRateTerm: 0,
    ltvCashOut: 80,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD", "Condo"],
    eligibleStates: ["All except TX, PR, GU, USVI"]
  },
  {
    programName: "Closed End Second Lien",
    occupancy: "Investment",
    creditScoreMin: 740,
    loanAmountMin: 50000,
    loanAmountMax: 500000,
    incomeDocType: "Standard Doc / Alt Doc",
    ltvPurchase: 75,
    ltvRateTerm: 0,
    ltvCashOut: 75,
    dtiMax: 50,
    propertyTypes: ["SFR", "PUD"],
    eligibleStates: ["All except TX, PR, GU, USVI"]
  },
  // --- Foreign National DSCR ---
  {
    programName: "Foreign National DSCR",
    occupancy: "Investment",
    creditScoreMin: 680,
    loanAmountMin: 150000,
    loanAmountMax: 1500000,
    incomeDocType: "DSCR",
    dscrMin: 1.00,
    ltvPurchase: 75,
    ltvRateTerm: 65,
    ltvCashOut: 65,
    reserves: "6 Months PITIA",
    propertyTypes: ["SFR", "Condo", "2-4 Unit"],
    eligibleStates: ["All except PR, GU, USVI; IL/NY no 2-4 units"]
  },
  {
    programName: "Foreign National DSCR",
    occupancy: "Investment",
    creditScoreMin: 0,
    loanAmountMin: 150000,
    loanAmountMax: 1000000,
    incomeDocType: "DSCR (No Score)",
    dscrMin: 1.00,
    ltvPurchase: 75,
    ltvRateTerm: 65,
    ltvCashOut: 65,
    reserves: "6 Months PITIA",
    propertyTypes: ["SFR", "Condo", "2-4 Unit"],
    eligibleStates: ["All except PR, GU, USVI; IL/NY no 2-4 units"]
  },
];

// ============================================
// TQL KNOWLEDGE ENTRIES - Detailed Guidelines
// ============================================

export const knowledgeBase: KnowledgeEntry[] = [
  // ── DSCR INVESTOR SOLUTIONS ──
  {
    id: "dscr-matrix-full",
    category: "DSCR",
    subcategory: "Full LTV Matrix",
    title: "DSCR Investor Solutions — Full LTV Matrix (DSCR >= 1.00)",
    content: `DSCR >= 1.00 Maximum LTV by FICO Tier and Loan Amount:

| Min FICO | Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|----------|
| 740+ | $1.0M | 80% | 80% | 75% |
| 740+ | $1.5M | 80% | 80% | 75% |
| 740+ | $2.0M | 80% | 80% | 75% |
| 740+ | $2.5M | 75% | 75% | 70% |
| 740+ | $3.0M | 70% | 70% | 65% |
| 740+ | $3.5M | 70% | 65% | NA |
| 720+ | $1.0M | 85% | 80% | 75% |
| 720+ | $1.5M | 80% | 80% | 75% |
| 720+ | $2.0M | 80% | 80% | 75% |
| 720+ | $2.5M | 80% | 80% | 75% |
| 720+ | $3.0M | 75% | 75% | 70% |
| 720+ | $3.5M | 70% | 70% | NA |
| 700+ | $1.0M | 80% | 80% | 75% |
| 700+ | $1.5M | 80% | 75% | 70% |
| 700+ | $2.0M | 75% | 75% | 70% |
| 680+ | $1.0M | 75% | 75% | 70% |
| 680+ | $1.5M | 75% | 70% | 65% |
| 660+ | $1.0M | 70% | 70% | 65% |
| 660+ | $1.5M | 65% | 65% | NA |
| 640+ | $1.0M | 75% | 70% | 60% |

Loan Range: $100,000 - $3,500,000
Under $150K: Max 70% Purchase, 65% Refi, min DSCR 1.00
Occupancy: Investment only
Products: Fixed 15/30/40yr, ARM 5/6, 7/6, 10/6

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["dscr", "dscr matrix", "dscr ltv", "dscr purchase", "dscr cash out", "dscr refinance", "investor", "investment", "dscr score", "dscr loan amount", "dscr ratio"],
    priority: 10
  },
  {
    id: "dscr-below-one",
    category: "DSCR",
    subcategory: "Below 1.00 Matrix",
    title: "DSCR Investor Solutions — DSCR Below 1.00 Matrix",
    content: `DSCR < 1.00 Maximum LTV (more restrictive):

| Min FICO | Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|----------|
| 700+ | $1.0M | 75% | 70% | 65% |
| 700+ | $1.5M | 70% | 65% | NA |
| 680+ | $1.0M | 70% | 65% | NA |
| 660+ | $1.0M | 65% | NA | NA |

Minimum FICO for DSCR < 1.00: 660
Most cash-out combinations are NOT allowed with DSCR < 1.00
Minimum reserves: 6 months PITIA for all DSCR < 1.00 scenarios

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["dscr below one", "dscr less than one", "dscr under 1", "low dscr", "negative cash flow"],
    priority: 10
  },
  {
    id: "dscr-reserves",
    category: "DSCR",
    subcategory: "Reserves",
    title: "DSCR Investor Solutions — Reserve Requirements",
    content: `DSCR Reserve Requirements by Loan Amount:

| Loan Amount | Reserves Required |
|-------------|-------------------|
| Up to $1.0M | 2 months PITIA |
| $1.0M - $1.5M | 6 months PITIA |
| $1.5M - $2.5M | 6 months PITIA |
| Over $2.5M | 12 months PITIA |
| DSCR < 1.00 | 6 months PITIA minimum |

Gift funds are OK after 10% borrower contribution.
Cash-out proceeds may satisfy reserve requirements.
Document age: 120 days maximum.

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["reserves", "dscr reserves", "months reserves", "pitia", "liquid assets", "dscr requirements"],
    priority: 9
  },
  {
    id: "dscr-general",
    category: "DSCR",
    subcategory: "General Requirements",
    title: "DSCR Investor Solutions — General Program Requirements",
    content: `DSCR Investor Solutions General Requirements:

- Loan Purpose: Purchase, Rate/Term Refinance, Cash-Out Refinance
- Occupancy: Investment only
- Products: Fixed Rate 15, 30, 40 years; ARM 5/6, 7/6, 10/6 (30yr term)
- Interest Only: Eligible (min 680 FICO; 75% Purchase, 75% R/T, 70% C/O)
- Loan Amounts: $100,000 - $3,500,000
- Under $150K: 70% Purchase / 65% Refi, min DSCR 1.00
- Max Cash-In-Hand: $500K (LTV > 65%) or $1M (LTV <= 65%)
- STR: 5% LTV reduction from matrix, 80% max Purchase/R-T, 70% Cash-Out
- Max Acreage: 5 acres

Property Types Eligible:
- SFR (attached/detached), 2-4 Units, Condominiums
- Condo Hotels: 75% Purchase, 65% Refi, max $1.5M
- Rural: 75% Purchase, 70% Refi

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["dscr requirements", "dscr program", "dscr general", "interest only", "dscr property", "condo hotel", "rural", "short term rental", "str"],
    priority: 9
  },
  {
    id: "dscr-calculation",
    category: "DSCR",
    subcategory: "Income Calculation",
    title: "DSCR Ratio Calculation — Long-Term and Short-Term Rental",
    content: `DSCR Calculation Methods:

Long-Term Rental:
- DSCR = Monthly Gross Rents / PITIA (or ITIA for IO loans)
- Use FNMA Form 1007 or 1025 for market rents
- Lower of actual lease or market rent: no further docs needed
- Higher actual lease: 2-month receipt evidence, capped at 120% of market
- Higher market rent: capped at 120% of lease
- Vacant/unleased purchase: allowed without LTV restriction
- Vacant/unleased refi: allowed, LTV reduction NOT required
- Rent control/housing subsidy: use current contractual rent

Short-Term Rental (Airbnb, VRBO, FlipKey):
- DSCR = (Gross Rents x 0.80) / PITIA
- 20% expense factor minimum (or actual if higher)
- 12-month average gross rents (seasonality adjusted)
- Acceptable STR income docs:
  1. STR analysis form or 1007/1025 by licensed appraiser
  2. 12-month rental history from 3rd party service
  3. 12-month bank statements with rental records
  4. AIRDNA Rentalizer (Purchase ONLY, Market Score >= 60)

No DTI calculation required for DSCR programs.

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["dscr calculation", "dscr ratio", "rental income", "gross rents", "pitia", "short term rental", "str", "airbnb", "vrbo", "long term rental", "lease", "market rent"],
    priority: 10
  },
  {
    id: "dscr-investor-experience",
    category: "DSCR",
    subcategory: "Investor Experience",
    title: "DSCR — Investor Experience Requirements",
    content: `Investor Experience Requirements:

Experienced Investor:
- Must have owned/managed investment property for 1+ year in last 3 years
- OR have an experienced co-borrower who meets this requirement

First-Time Investors:
- Allowed under these conditions:
  - Minimum 700 FICO
  - 1-unit properties only
  - DSCR must be > 1.00
  - Must currently own a primary residence
- NOT allowed for Short-Term Rentals (STR)

Housing History:
- 1x30x12 OK (one 30-day late in 12 months)
- 0x60x12 required for best LTV tiers (limits to 70% Purchase, 65% Refi)

Credit Event Seasoning:
- BK/FC/SS: >= 36 months, no LTV reduction
- BK/FC/SS: >= 24 months, max 75% Purchase, 70% Refi
- Forbearance/Mod/Deferral: > 12 months seasoned

Refinance Seasoning:
- 0-6 months: lesser of purchase price + improvements or appraised value
- > 6 months: may use appraised value

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["first time investor", "investor experience", "housing history", "credit event", "bankruptcy", "foreclosure", "seasoning", "dscr seasoning"],
    priority: 9
  },
  {
    id: "dscr-underwriting",
    category: "DSCR",
    subcategory: "Underwriting",
    title: "DSCR — Underwriting Requirements",
    content: `DSCR Underwriting Requirements:

Credit Score:
- Use highest representative score of borrower/guarantor
- Minimum: 640 (DSCR >= 1.00), 660 (DSCR < 1.00)

Tradelines:
- 2 tradelines reporting 24 months with activity in last 12 months, OR
- 3 tradelines reporting 12 months with recent activity
- Waived if primary borrower has 3 credit scores

Prepayment Penalty:
- Up to 5 years, minimum 3% fixed
- NOT allowed in: AK, KS, MI, MN, NM, RI
- OH: 1% max on 1-2 unit properties
- PA: not allowed under ~$320K
- IL, NJ: not allowed for individuals (entities OK)

Escrows:
- May be waived per Section 2.4.5
- LTV <= 80%, 720+ FICO, 12 months reserves for waiver

Document Age: 120 days maximum

Source: TQL DSCR Investor Solutions Program Matrix`,
    keywords: ["dscr underwriting", "tradelines", "prepayment penalty", "ppp", "escrow", "dscr credit", "dscr fico"],
    priority: 8
  },
  // ── CLOSED END SECOND LIEN ──
  {
    id: "ces-matrix-standard",
    category: "Closed End Second",
    subcategory: "Standard Doc CLTV Matrix",
    title: "Closed End Second Lien — Standard Doc CLTV Matrix",
    content: `Closed End Second Lien — Standard Doc Max CLTV:

Loan Amount up to $350,000:
| Min FICO | Primary | Second Home | Investment |
|----------|---------|-------------|------------|
| 740+ | 90% | 80% | 75% |
| 700-739 | 85% | 80% | 65% |
| 680-699 | 75% | 75% | NA |

Loan Amount $350,001 - $500,000:
| Min FICO | Primary | Second Home | Investment |
|----------|---------|-------------|------------|
| 740+ | 85% | 75% | 75% |
| 700-739 | 85% | 75% | 65% |
| 680-699 | 75% | 70% | NA |

Key Rules:
- Loan Range: $50,000 - $500,000
- Max Cash-Out: $500,000
- Terms: Fixed Rate 10, 15, 20, 25, 30 years (fully amortizing)
- Max Combined Balance (all liens): $4,000,000
- Combined > $2M: max 80% CLTV
- Combined > $3M: max 75% CLTV
- Condos: max 80% CLTV
- 2-4 Units: max 75% CLTV
- No reserves required

Source: TQL Closed End Second Lien Matrix`,
    keywords: ["closed end second", "second lien", "cltv", "second mortgage", "heloan", "standard doc", "ces"],
    priority: 10
  },
  {
    id: "ces-matrix-altdoc",
    category: "Closed End Second",
    subcategory: "Alt Doc CLTV Matrix",
    title: "Closed End Second Lien — Alt Doc CLTV Matrix",
    content: `Closed End Second Lien — Alt Doc Max CLTV:

Alt Doc generally has 5% lower CLTV than Standard Doc.

Loan Amount up to $350,000:
| Min FICO | Primary | Second Home | Investment |
|----------|---------|-------------|------------|
| 740+ | 85% | 75% | 70% |
| 700-739 | 80% | 70% | 60% |
| 680-699 | 75% | 65% | NA |

Loan Amount $350,001 - $500,000:
| Min FICO | Primary | Second Home | Investment |
|----------|---------|-------------|------------|
| 740+ | 80% | 70% | 65% |
| 700-739 | 75% | 65% | 60% |
| 680-699 | 70% | 60% | NA |

Alt Doc Income Types:
- Personal Bank Statements (12 or 24 months)
- Business Bank Statements (12 or 24 months)
- IRS Form 1099 (1-2 years)
- Written VOE (FNMA Form 1005, max 80% CLTV)
- DU/LPA (simultaneous purchase only)

Source: TQL Closed End Second Lien Matrix`,
    keywords: ["closed end second alt doc", "second lien alt doc", "bank statement second", "ces alt doc", "cltv alt doc"],
    priority: 10
  },
  {
    id: "ces-general",
    category: "Closed End Second",
    subcategory: "General Requirements",
    title: "Closed End Second Lien — General Requirements",
    content: `Closed End Second Lien General Requirements:

Eligible Borrowers:
- US Citizens, Permanent Resident Aliens, Non-Permanent Resident Aliens (max 80% CLTV)
- First-time home buyers: NOT allowed

Occupancy: Primary Residence, Second Home, Investment
Loan Purpose: Stand-Alone Cash Out (6-month ownership required), Simultaneous Purchase
Simultaneous Purchase: First lien must be Agency-eligible loan

Housing History: 0x30x12 (zero 30-day lates in last 12 months)
Credit Score: 680 minimum across all CLTV tables
DTI: 50% max (CLTV <= 80%), 45% max (CLTV > 80%)
Document Age: 120 days max (credit, appraisal, title)

Credit Event Seasoning:
- BK/FC/SS/DIL/PreFC/MC/NOD: 48 months minimum
- Forbearance/Modification/Deferral: > 12 months

Ineligible States: Texas, Puerto Rico, Guam, US Virgin Islands
State Overlays (CT, FL, IL, NJ, NY):
- SF/Condo: max 80% CLTV, min 720 FICO
- 2-4 Units: max 75% CLTV, min 720 FICO

Declining Market: max 80% CLTV for all transactions
Ineligible Features: Lien-free properties, unseasoned cash-out (< 6 months), 2+ cash-outs in 12 months

Source: TQL Closed End Second Lien Matrix`,
    keywords: ["closed end second requirements", "second lien requirements", "ces requirements", "second lien eligibility", "second lien states"],
    priority: 9
  },
  {
    id: "ces-income",
    category: "Closed End Second",
    subcategory: "Income Documentation",
    title: "Closed End Second Lien — Income Documentation Options",
    content: `Closed End Second Lien Income Documentation:

Standard Doc:
- Wage/Salary: Paystubs, 1-2 year W-2s, IRS 4506-C, Verbal VOE
- Self-Employed: 1-2 years Personal & Business Tax Returns, YTD P&L, IRS 4506-C

Alt Doc Options:
- Personal Bank Statements: 12 or 24 months personal + 2 months business statements
  - Income = total eligible deposits / number of statements
- Business Bank Statements: 12 or 24 months
  - Income via: Fixed 50% expense ratio, OR 3rd party expense ratio (min 10%), OR CPA/EA P&L
- IRS Form 1099: 1-2 years, 10% fixed expense ratio, YTD support
- Written VOE: FNMA Form 1005 + 2 months bank statements, max 80% CLTV
- DU/LPA: Final AUS Approve/Eligible or Accept/Eligible, simultaneous purchase only

Tradelines Required:
- 2 tradelines/24 months with activity in last 12 months, OR
- 3 tradelines/12 months with recent activity
- Waived if primary borrower has 3 credit scores

Source: TQL Closed End Second Lien Matrix`,
    keywords: ["second lien income", "ces income", "bank statement second lien", "second lien documentation", "ces documentation"],
    priority: 8
  },
  {
    id: "ces-appraisal",
    category: "Closed End Second",
    subcategory: "Appraisal Requirements",
    title: "Closed End Second Lien — Appraisal and Valuation",
    content: `Closed End Second Lien Appraisal Requirements:

Loan up to $250,000 — Primary Valuation Options:
1. AVM (approved vendor, acceptable FSD) + Property Condition Report
2. Exterior Drive-By (Hybrid, 2055, or 1075) — 1-unit only
3. New Full Appraisal (FNMA 1004/1025/1073)
4. Prior 1st lien appraisal (< 12 months, same lender) + Property Condition Report + recertification
5. Broker Price Opinion (BPO) from approved vendor

Loan over $250,000 — Primary Valuation Options:
1. New Full Appraisal (FNMA 1004/1025/1073)
2. Prior 1st lien appraisal (< 12 months, same lender) + PCR + recert + AVM

HPML loans: Full appraisal with interior inspection required
Simultaneous purchase: Full appraisal required
Transferred appraisals: Eligible

Secondary Valuation ALWAYS required:
- CU/LCA score <= 2.5, enhanced desk review, AVM, or BPO
- If desk review/BPO > 10% below appraised value: field review or second appraisal required

Acceptable AVM Vendors (FSD Scores):
- Clear Capital: 0.00-0.13
- Collateral Analytics: 0.00-0.10
- House Canary: 0.00-0.10
- Red Bell / Homegenius: 0.00-0.10

Source: TQL Closed End Second Lien Matrix`,
    keywords: ["appraisal second lien", "valuation", "avm", "fsd score", "bpo", "ces appraisal", "property condition report"],
    priority: 8
  },
  // ── FOREIGN NATIONAL DSCR ──
  {
    id: "fn-dscr-matrix",
    category: "Foreign National",
    subcategory: "LTV Matrix",
    title: "Foreign National DSCR — LTV Matrix",
    content: `Foreign National DSCR — Investment Property Only

DSCR >= 1.00, Credit Score 680+:
| Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|
| $1.0M | 75% | 65% | 65% |
| $1.5M | 70% | 60% | 60% |

DSCR >= 1.00, No Credit Score:
| Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|
| $1.0M | 75% | 65% | 65% |
| $1.5M | 70% | 60% | 60% |

DSCR < 1.00, Credit Score 680+:
| Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|
| $1.0M | 65% | 60% | 60% |
| $1.5M | 65% | NA | NA |

DSCR < 1.00, No Credit Score:
| Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|
| $1.0M | 65% | 60% | 60% |
| $1.5M | 65% | NA | NA |

Property Type Restrictions:
- SFR/Condo Hotel: Max 70% Purchase, 65% Refi
- 2-4 Units/Condos: Max 70% Purchase, 65% Refi
- Rural: NOT eligible

Source: TQL Foreign National DSCR Guidelines`,
    keywords: ["foreign national", "fn dscr", "foreign national dscr", "foreign borrower", "non-citizen", "international borrower", "foreign national ltv"],
    priority: 10
  },
  {
    id: "fn-dscr-requirements",
    category: "Foreign National",
    subcategory: "Requirements",
    title: "Foreign National DSCR — Full Requirements",
    content: `Foreign National DSCR Full Requirements:

Occupancy: Investment only (for all eligible foreign citizens)
Loan Range: $150,000 - $1,500,000
Product Types: Fixed 15/30/40yr, ARM 5/6, 7/6, 10/6
Interest Only: Eligible (40yr ARM eligible with IO)
DTI: Not required (DSCR program)

Credit: Use representative score of borrower/guarantor with highest score (if available). No score accepted.
Housing History: 0x30x12 if documented
Credit Events: BK/FC/SS/DIL >= 36 months; Forbearance/Mod/Deferral > 12 months

Assets: Min 30 days verification
Reserves: 6 months PITIA (cash-out proceeds may satisfy)
Gift Funds: NOT allowed
Tradelines: Not required (if US credit exists, see Seller Guide 2.5.12)
Document Age: 120 days max

Cash-In-Hand: $300K if LTV > 50%, $500K if LTV <= 50%
First Time Investors: ALLOWED
Acreage: Up to 2 acres (must not be rural)

Prepayment Penalty: Up to 5 years
- NOT allowed: AK, KS, MI, MN, NM, RI
- NOT allowed for individuals in IL, NJ
- NOT allowed on loans < $319,777 in PA
Escrows: May be waived

Declining Markets: No market adjustment required for FN program
State Restrictions: IL, NY — 2-4 units not eligible
Ineligible: Puerto Rico, Guam, US Virgin Islands, OFAC sanctioned countries
Florida: Requires FL Land Title Association Affidavit

STR (Short-Term Rental):
- Purchase < 70%, Refi < 65% (excludes Condo Hotel)
- 20% expense factor, 12-month average, AIRDNA Rentalizer (Purchase only, Market Score >= 60)

Source: TQL Foreign National DSCR Guidelines`,
    keywords: ["foreign national requirements", "fn requirements", "foreign national program", "fn reserves", "fn prepayment", "fn str", "foreign national florida"],
    priority: 9
  },
  // ── NON-AGENCY ALT DOC ──
  {
    id: "altdoc-matrix-primary",
    category: "Alt Doc",
    subcategory: "Primary Residence Matrix",
    title: "Non-Agency Alt Doc — Primary Residence Full LTV Matrix",
    content: `Non-Agency Alt Doc — Primary Residence Max LTV:

Full Doc / Bank Statements / 1099:
| Min FICO | Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|----------|
| 720+ | $1.5M | 90% | 90% | 85% |
| 720+ | $2.0M | 85% | 85% | 80% |
| 720+ | $2.5M | 80% | 80% | 75% |
| 720+ | $3.0M | 75% | 75% | 70% |
| 720+ | $4.0M | 70% | 70% | 65% |
| 700+ | $1.5M | 85% | 85% | 80% |
| 700+ | $2.0M | 80% | 80% | 75% |
| 700+ | $2.5M | 80% | 75% | 70% |
| 680+ | $1.5M | 80% | 80% | 75% |
| 680+ | $2.0M | 75% | 75% | 70% |
| 660+ | $1.5M | 80% | 80% | 75% |
| 660+ | $2.0M | 75% | 75% | 70% |
| 640+ | $1.0M | 75% | 75% | 70% |

P&L / Written VOE / Asset Utilization:
| Min FICO | Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|----------|
| 720+ | $1.5M | 85% | 85% | 80% |
| 720+ | $2.0M | 80% | 80% | 75% |
| 720+ | $2.5M | 75% | 75% | 70% |
| 720+ | $3.0M | 70% | 70% | 65% |
| 700+ | $1.5M | 80% | 80% | 75% |
| 700+ | $2.0M | 75% | 75% | 70% |
| 680+ | $1.5M | 75% | 75% | 70% |
| 680+ | $2.0M | 70% | 70% | 65% |
| 660+ | $1.5M | 75% | 75% | 70% |
| 640+ | $1.0M | 70% | 70% | 65% |

Source: TQL Full Alt Doc Matrix Card`,
    keywords: ["alt doc", "alternative documentation", "bank statement", "1099", "p&l", "profit loss", "voe", "asset utilization", "non agency", "primary residence", "full doc"],
    priority: 10
  },
  {
    id: "altdoc-matrix-secondhome-investment",
    category: "Alt Doc",
    subcategory: "Second Home & Investment Matrix",
    title: "Non-Agency Alt Doc — Second Home & Investment LTV Matrix",
    content: `Non-Agency Alt Doc — Second Home & Investment Max LTV:

Full Doc / Bank Statements / 1099:
| Min FICO | Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|----------|
| 720+ | $1.5M | 85% | 85% | 80% |
| 720+ | $2.0M | 80% | 80% | 75% |
| 720+ | $2.5M | 75% | 75% | 70% |
| 700+ | $1.5M | 80% | 80% | 75% |
| 700+ | $2.0M | 75% | 75% | 70% |
| 680+ | $1.5M | 75% | 75% | 70% |
| 680+ | $2.0M | 70% | 70% | 65% |
| 660+ | $1.5M | 70% | 70% | 65% |
| 640+ | $1.0M | 65% | 65% | 60% |

P&L / Written VOE / Asset Utilization:
| Min FICO | Max Loan | Purchase | R/T Refi | Cash-Out |
|----------|----------|----------|----------|----------|
| 720+ | $1.5M | 80% | 80% | 75% |
| 720+ | $2.0M | 75% | 75% | 70% |
| 700+ | $1.5M | 75% | 75% | 70% |
| 680+ | $1.5M | 70% | 70% | 65% |
| 660+ | $1.5M | 65% | 65% | 60% |
| 640+ | $1.0M | 60% | 60% | NA |

Source: TQL Full Alt Doc Matrix Card`,
    keywords: ["alt doc second home", "alt doc investment", "bank statement investment", "second home ltv", "investment ltv"],
    priority: 10
  },
  {
    id: "altdoc-income-types",
    category: "Alt Doc",
    subcategory: "Income Documentation",
    title: "Non-Agency Alt Doc — Income Documentation Types",
    content: `TQL Non-Agency Income Documentation Options:

Full Doc:
- Wage/Salary: 1-2 year W-2s, paystubs, VOE
- Self-Employed: 1-2 years Personal & Business Tax Returns

Bank Statements (Personal):
- 12 or 24 months personal bank statements
- Plus 2 months business bank statements
- Income = total eligible deposits / number of statements

Bank Statements (Business):
- 12 or 24 months business bank statements
- Income via: Fixed 50% expense ratio, OR
- 3rd party expense ratio (CPA/EA, min 10%), OR
- CPA/EA-prepared Profit & Loss Statement

IRS Form 1099:
- 1-2 years of 1099s
- Fixed 10% expense ratio
- YTD documentation to support continued income

P&L (Profit & Loss):
- 12 months CPA/Licensed Accountant-prepared P&L
- Plus last 2 months bank statements (or P&L only)

Written VOE:
- FNMA Form 1005
- 2 months personal bank statements showing employer deposits
- Max 80% CLTV

Asset Utilization:
- Available for qualifying borrowers
- Uses liquid assets to calculate income

Source: TQL Full Alt Doc Matrix Card & Underwriting Guidelines`,
    keywords: ["income documentation", "bank statements", "1099", "profit loss", "p&l", "voe", "asset utilization", "full doc", "w2", "tax returns", "self employed"],
    priority: 9
  },
  {
    id: "altdoc-quick-reference",
    category: "Alt Doc",
    subcategory: "Quick Reference Rules",
    title: "Non-Agency Alt Doc — Quick Reference Rules",
    content: `Non-Agency Alt Doc Quick Reference:

Property Types:
- SFR (attached/detached): Eligible
- 2-4 Units: Eligible (max 80% LTV)
- Condos: Eligible
- Non-Warrantable Condos: Max 80% LTV
- Condo Hotels: Max 75% Purchase, 65% Refi, max $1.5M loan
- Rural: Max 75% Purchase, 70% Refi (Primary Only)
- Max Acreage: 10 acres

Housing History:
- 1x30x12: No LTV reduction
- 0x60x12: Max 80% LTV
- 0x90x12: Max 75% LTV
- Forbearance/Mod > 12 months: 5% LTV reduction

Credit Event Seasoning:
- BK/FC/SS >= 36 months: No LTV reduction
- BK/FC/SS >= 24 months: Max 80% LTV
- BK/FC/SS >= 12 months: Max 75% LTV

State Overlays (CT, FL, IL, NJ, NY):
- 5% LTV reduction from matrix
- 2-4 Units max 75% LTV

Declining Market: 5% LTV reduction

DTI: 50% standard, 55% extended (with residual income qualification)
Reserves by LTV: >80% = 3 months, >75% = 6 months, <=75% varies by loan amount
Borrower Contribution: 5% primary/second home, 10% investment

Prepayment Penalty: Investment only
- Not allowed: AK, KS, MI, MN, NM, RI
- IL, NJ: not for individuals
- PA: not under ~$320K

Source: TQL Full Alt Doc Matrix Card`,
    keywords: ["alt doc rules", "property type", "housing history", "credit event", "state overlay", "declining market", "dti", "prepayment", "borrower contribution"],
    priority: 9
  },
  // ── GENERAL UNDERWRITING GUIDELINES ──
  {
    id: "uw-credit-score",
    category: "Underwriting",
    subcategory: "Credit Score",
    title: "Credit Score Requirements by Program",
    content: `TQL Credit Score Minimums by Program:

| Program | Min FICO |
|---------|----------|
| Non-Agency (Prime) | 620 |
| Non-Agency (Alt Doc) | 640 |
| DSCR Investor Solutions | 640 (DSCR >= 1.00), 660 (DSCR < 1.00) |
| ITIN | 660 |
| Foreign National DSCR | 680 (or No Score) |
| Closed End Second | 680 |

Qualifying Score: Middle score of primary borrower (or lower of 2 scores).
Representative score of borrower with highest qualifying income.

Tradeline Requirements:
- 3 tradelines reporting 12+ months, OR
- 2 tradelines reporting 24+ months
- Must show activity in last 12 months
- Waived when borrower has 3 bureau scores

Source: TQL Full Underwriting Guidelines`,
    keywords: ["credit score", "fico", "minimum score", "credit requirements", "qualifying score", "tradeline"],
    priority: 10
  },
  {
    id: "uw-borrower-eligibility",
    category: "Underwriting",
    subcategory: "Borrower Eligibility",
    title: "Borrower Eligibility — Citizenship and Entity Types",
    content: `TQL Borrower Eligibility:

Eligible Citizenship:
- US Citizens
- Permanent Resident Aliens (Green Card / Form I-551)
- Non-Permanent Resident Aliens (2-year US residency, valid visa)
- DACA Recipients (per DACA-specific guidelines)
- Asylees / Refugees (with EAD)
- Foreign Nationals: DSCR Investment only, max 75% LTV

Eligible Entities:
- LLC, Partnership, Corporation, Inter Vivos/Living Trust
- Entity must be domestic (US-formed)
- Individual guarantor required for entity borrowers

ITIN Borrowers:
- ITIN number required
- Min 660 FICO
- Primary residence only

First-Time Home Buyers:
- Allowed on Primary Residence (Non-Agency)
- NOT allowed on Closed End Second
- First-Time Investors: See DSCR investor experience requirements

Source: TQL Full Underwriting Guidelines`,
    keywords: ["borrower eligibility", "citizenship", "permanent resident", "non-permanent resident", "foreign national", "itin", "entity", "llc", "trust", "first time home buyer", "daca"],
    priority: 9
  },
  {
    id: "uw-reserves",
    category: "Underwriting",
    subcategory: "Reserve Requirements",
    title: "Reserve Requirements — All Programs",
    content: `TQL Reserve Requirements by Program:

Non-Agency (Primary Residence):
| Loan Amount | Reserves |
|-------------|----------|
| $100K - $500K | 3 months PITIA |
| $500K - $1.5M | 6 months PITIA |
| $1.5M - $2.5M | 9 months (12 on expanded) |
| $2.5M - $3.0M | 12 months PITIA |
| $3.0M - $4.0M | 18 months PITIA |
| Second Home | 12 months PITIA |

DSCR Investor Solutions:
| Loan Amount | Reserves |
|-------------|----------|
| Up to $1.0M | 2 months PITIA |
| $1.0M - $1.5M | 6 months PITIA |
| $1.5M - $2.5M | 6 months PITIA |
| Over $2.5M | 12 months PITIA |
| DSCR < 1.00 | 6 months minimum |

Foreign National DSCR: 6 months PITIA
Closed End Second: None required

Gift Funds: Allowed after borrower contributes:
- Primary: 5% own funds
- Second Home: 10% own funds
- Investment: 10% own funds

Cash-out proceeds may satisfy reserve requirements (except 2-8 Units/Mixed Use).

Source: TQL Full Underwriting Guidelines`,
    keywords: ["reserves", "months reserves", "pitia", "reserve requirements", "liquid assets", "gift funds", "borrower contribution"],
    priority: 9
  },
  {
    id: "uw-dti",
    category: "Underwriting",
    subcategory: "DTI Requirements",
    title: "DTI Requirements — Non-Agency Programs",
    content: `TQL Debt-to-Income Ratio Requirements:

Non-Agency Programs:
- Standard DTI: 50% maximum
- Extended DTI (50.01% - 55%): Primary Residence ONLY
  - Requires residual income qualification
  - 720+ FICO recommended for extended DTI

Closed End Second:
- CLTV <= 80%: Max 50% DTI
- CLTV > 80%: Max 45% DTI

DSCR Programs: No DTI calculation required (qualify on DSCR ratio only)
Foreign National DSCR: No DTI required

DTI Qualification Methods:
- Fixed Rate: Note rate amortized over total term
- ARM: Higher of fully indexed rate or note rate
- Interest Only: Qualifying rate amortized over remaining term after IO period

Source: TQL Full Underwriting Guidelines`,
    keywords: ["dti", "debt to income", "debt ratio", "qualifying ratio", "residual income", "extended dti"],
    priority: 9
  },
  {
    id: "uw-property-types",
    category: "Underwriting",
    subcategory: "Property Types",
    title: "Eligible Property Types — All Programs",
    content: `TQL Eligible Property Types:

Standard Eligible:
- Single Family Residence (attached/detached)
- PUD (Planned Unit Development)
- Townhome
- Condominium (Warrantable)
- 2-4 Units

Specialty (with restrictions):
- Non-Warrantable Condos: Max 80% LTV
- Condo Hotels: 75% Purchase, 65% Refi, max $1.5M
- Rural: Primary only, 75% Purchase, 70% Refi (DSCR: 75%/70%)
- Mixed Use: DSCR only, max 25% commercial space
- 5-8 Units: DSCR only

Ineligible Properties:
- Condotels (except Condo Hotels per DSCR program)
- Commercial/Agricultural
- Leasehold Properties
- Log Homes
- Modular/Manufactured Homes
- Hobby Farms
- Land Contract
- Age-Restricted Communities

Acreage Limits:
- Non-Agency: Up to 10 acres
- DSCR: Up to 5 acres
- Foreign National: Up to 2 acres (must not be rural)

Source: TQL Full Underwriting Guidelines`,
    keywords: ["property type", "sfr", "condo", "pud", "townhome", "multi-unit", "rural", "condo hotel", "mixed use", "non warrantable", "acreage"],
    priority: 8
  },
  {
    id: "uw-loan-products",
    category: "Underwriting",
    subcategory: "Loan Products",
    title: "Available Loan Products and Terms",
    content: `TQL Available Loan Products:

Fixed Rate Products:
- 15 Year Fixed
- 30 Year Fixed
- 40 Year Fixed

ARM Products:
- 5/6 ARM (30-year term)
- 7/6 ARM (30-year term)
- 10/6 ARM (30-year term)

Interest Only:
- 30 Year Fixed with 10 Year IO Period
- 40 Year Fixed with 10 Year IO Period
- ARM with IO period
- After IO expires: converts to remaining amortization
- IO Requirements: Min 680 FICO, max 75-80% LTV depending on program

Closed End Second:
- Fixed Rate: 10, 15, 20, 25, 30 Year (fully amortizing)
- No IO available

Loan Amount Ranges:
- Non-Agency (Prime): $150,000 - $4,000,000
- DSCR Investor Solutions: $100,000 - $3,500,000
- Foreign National DSCR: $150,000 - $1,500,000
- Closed End Second: $50,000 - $500,000

Source: TQL Full Underwriting Guidelines`,
    keywords: ["loan products", "fixed rate", "arm", "interest only", "loan terms", "io", "loan amount", "40 year"],
    priority: 8
  },
  {
    id: "uw-credit-events",
    category: "Underwriting",
    subcategory: "Credit Events",
    title: "Credit Event Seasoning Requirements — All Programs",
    content: `TQL Credit Event Seasoning by Program:

Non-Agency Alt Doc:
| Event | >= 36 months | >= 24 months | >= 12 months |
|-------|-------------|-------------|-------------|
| BK/FC/SS/DIL | No reduction | Max 80% LTV | Max 75% LTV |

DSCR Investor Solutions:
| Event | >= 36 months | >= 24 months |
|-------|-------------|-------------|
| BK/FC/SS | No reduction | Max 75% Purchase, 70% Refi |

Foreign National DSCR:
- BK/FC/SS/DIL/PreFC/MC: >= 36 months required
- Forbearance/Mod/Deferral: > 12 months required

Closed End Second:
- BK/FC/SS/DIL/PreFC/MC/NOD: 48 months minimum
- Forbearance/Mod/Deferral: > 12 months

Housing History by Program:
- Non-Agency: 1x30x12 OK (no reduction), 0x60x12 = max 80%, 0x90x12 = max 75%
- DSCR: 1x30x12 OK, 0x60x12 = max 70% Purchase / 65% Refi
- Foreign National: 0x30x12 required
- Closed End Second: 0x30x12 required

Source: TQL Full Underwriting Guidelines`,
    keywords: ["credit event", "bankruptcy", "foreclosure", "short sale", "deed in lieu", "seasoning", "housing history", "late payments", "mortgage history"],
    priority: 9
  },
  {
    id: "uw-escrow-prepay",
    category: "Underwriting",
    subcategory: "Escrow and Prepayment",
    title: "Escrow Waiver and Prepayment Penalty Rules",
    content: `TQL Escrow and Prepayment Penalty Rules:

Escrow Waiver Requirements:
- LTV <= 80%
- 720+ FICO
- 12 months reserves
- Per Section 2.4.5 of Seller Guide
- HPML loans: Escrow ALWAYS required
- California: Escrow required > 89.99% LTV

Prepayment Penalty:
- Investment property ONLY (never on Primary or Second Home)
- Up to 5 years
- DSCR: minimum 3% fixed
- NOT allowed in: AK, KS, MI, MN, NM, RI
- IL, NJ: Not allowed for individual borrowers (entities OK)
- PA: Not allowed under ~$319,777
- OH: Max 1% on 1-2 unit properties

Cash-In-Hand Limits:
- DSCR: $500K (LTV > 65%), $1M (LTV <= 65%)
- Foreign National: $300K (LTV > 50%), $500K (LTV <= 50%)
- Closed End Second: Max $500K cash-out

Seller Concessions: Up to 6% all occupancies

Source: TQL Full Underwriting Guidelines`,
    keywords: ["escrow", "escrow waiver", "impounds", "prepayment penalty", "ppp", "cash in hand", "seller concessions", "cash out limits"],
    priority: 8
  },
  {
    id: "uw-refinance-seasoning",
    category: "Underwriting",
    subcategory: "Refinance Seasoning",
    title: "Refinance and Ownership Seasoning Rules",
    content: `TQL Refinance Seasoning Requirements:

DSCR:
- 0-6 months ownership: Use lesser of purchase price + improvements or appraised value
- > 6 months ownership: May use appraised value

Non-Agency:
- Primary: No ownership seasoning required
- If < 6 months seasoning: 10% CLTV reduction
- Second Home & Investment: 6 months ownership required
- < 6 months: Use Purchase Price + Documented Improvements

Closed End Second:
- Stand-alone cash-out: 6 months minimum ownership
- Unseasoned cash-out (< 6 months note-to-note): Ineligible
- 2+ cash-out refinances in 12 months: Ineligible

Cash-Out with < 6 Month Ownership:
- Max 75% LTV
- Requires CDA or SRR score <= 2.5

Source: TQL Full Underwriting Guidelines`,
    keywords: ["refinance seasoning", "ownership seasoning", "title seasoning", "cash out seasoning", "refi timing"],
    priority: 8
  },
  {
    id: "uw-state-eligibility",
    category: "Underwriting",
    subcategory: "State Eligibility",
    title: "State Eligibility and Overlays",
    content: `TQL State Eligibility:

All Programs Ineligible:
- Puerto Rico, Guam, US Virgin Islands

Closed End Second Ineligible: Texas (in addition to territories)

State Overlays (CT, FL, IL, NJ, NY):
- Non-Agency: 5% LTV reduction from matrix
- Closed End Second: Max 80% CLTV (SF/Condo), 75% (2-4 Units), min 720 FICO
- DSCR: Min 720 FICO for 2-8 Units/Multi-Family

Foreign National Restrictions:
- IL, NY: 2-4 unit properties NOT eligible
- Florida: Requires FL Land Title Association Affidavit

Prepayment Penalty State Restrictions:
- Not allowed: AK, KS, MI, MN, NM, RI
- IL, NJ: Not for individuals
- PA: Not under ~$320K
- OH: Max 1% on 1-2 units

Source: TQL Full Underwriting Guidelines`,
    keywords: ["state eligibility", "eligible states", "state overlay", "texas", "florida", "new york", "california", "geographic", "territory"],
    priority: 7
  },
  {
    id: "uw-appraisal",
    category: "Underwriting",
    subcategory: "Appraisal Requirements",
    title: "Appraisal Requirements — All Programs",
    content: `TQL Appraisal Requirements:

Non-Agency Standard:
- Use FNMA Forms (1004/1025/1073)
- Investment properties: Require Form 1007 and 216
- AVM required on all transactions < 80% LTV
- Loan > $2,000,000: 2 Full Appraisals required
- < 80% LTV: CDA, Field Review, or FNMA CU Review (SRR <= 2.5)

DSCR:
- Standard FNMA forms
- Form 1007/1025 for rental income verification
- AIRDNA Rentalizer acceptable for STR (Purchase only)

Closed End Second:
- Under $250K: AVM + PCR, Drive-By, Full Appraisal, or BPO
- Over $250K: Full Appraisal required
- Secondary valuation ALWAYS required
- HPML: Full interior appraisal required
- Transferred appraisals eligible

Document Age: 120 days max (appraisal, credit, title)
AVM: 90 days max

Source: TQL Full Underwriting Guidelines`,
    keywords: ["appraisal", "avm", "valuation", "1007", "1004", "bpo", "property condition report", "hpml"],
    priority: 8
  },
  // ── COMPANY INFORMATION ──
  {
    id: "company-info",
    category: "Company",
    subcategory: "About TQL",
    title: "Total Quality Lending — Company Information",
    content: `Total Quality Lending (TQL):
- NMLS #1933377
- Wholesale Non-QM Lender
- Service Area: 45+ States
- Closing Timeline: As fast as 7 business days
- Phone: (800) 304-1925
- Email: CustomerCare@tqlend.com
- Website: tqlpartner.totalqualitylending.com

Programs Offered:
1. Non-Agency (Prime & Alt Doc) — Primary, Second Home, Investment
2. DSCR Investor Solutions — Investment only
3. Foreign National DSCR — Investment only
4. Closed End Second Lien — Primary, Second Home, Investment
5. ITIN Program — Primary Residence

Broker Partnership Benefits:
- Dedicated Account Executive support
- Fast turn times and 7-day closings
- Comprehensive Non-QM product suite
- Online eligibility and pricing tools
- Broker portal for loan submission

Source: TQL Company Information`,
    keywords: ["tql", "total quality lending", "company", "nmls", "contact", "phone", "email", "closing timeline", "programs"],
    priority: 7
  },
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
