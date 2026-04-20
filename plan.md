# CertShelf — Project Plan

## Vision

CertShelf is the single place where professionals track, manage, and discover certifications and licenses. We start with deadline tracking and CE logging, and grow into a credential hub where professionals manage their entire license lifecycle.

## Architecture Overview

```
certshelf.com (Next.js PWA)
├── /app                    # Frontend (React + Next.js App Router)
│   ├── /dashboard          # Main dashboard — licenses at a glance
│   ├── /licenses           # Add/edit/manage licenses
│   ├── /ce                 # CE credit logging and tracking
│   ├── /documents          # Document vault (certificates, PDFs)
│   ├── /discover           # Browse new certifications by field
│   ├── /settings           # Profile, notifications, billing
│   └── /api                # API routes
├── /lib
│   ├── /db                 # Database client and queries
│   ├── /data               # State requirements seed data
│   └── /utils              # Shared utilities
└── /supabase               # Database migrations and seed data
```

## Database Schema (Core)

### `users`
- id, email, name, created_at, subscription_tier

### `licenses`
- id, user_id, profession_type, state, license_number, issue_date, expiry_date, status, notes

### `ce_credits`
- id, user_id, license_id, activity_type, title, provider, hours, date_completed, certificate_url

### `documents`
- id, user_id, license_id, filename, file_url, uploaded_at, category

### `state_requirements` (seed data — the moat)
- id, profession_type, state, renewal_cycle_months, ce_hours_required, ce_categories, renewal_fee, board_url, notes

### `professions`
- id, name, category (healthcare/trades/real_estate/etc), icon

### `reminders`
- id, user_id, license_id, reminder_date, type (30/60/90 day), sent, read

## Development Phases

### Phase 0 — Foundation (Week 1)
- [x] Repo created
- [ ] Next.js project scaffold with TypeScript
- [ ] Tailwind CSS + design system (colors, spacing, typography)
- [ ] Clerk auth integration
- [ ] PostgreSQL + Prisma setup
- [ ] Coolify deployment pipeline
- [ ] Basic layout (header, nav, footer)

### Phase 1 — Core Tracking (Week 2-3)
- [ ] License CRUD (add, edit, delete, view)
- [ ] Dashboard with license cards showing status and countdown
- [ ] State requirements seed data for nursing (all 50 states)
- [ ] CE credit logger (manual entry)
- [ ] Renewal deadline calculation engine
- [ ] Color-coded status: green (>90 days), yellow (30-90), red (<30), expired

### Phase 2 — Notifications & Documents (Week 3-4)
- [ ] Email reminders (via Resend or similar)
- [ ] Push notification setup (Web Push)
- [ ] Document upload and storage
- [ ] Certificate PDF viewer
- [ ] Reminder preferences (30/60/90/180 days, email/push/both)

### Phase 3 — Multi-Profession (Week 4-6)
- [ ] State requirements for contractors (electrician, plumber, HVAC)
- [ ] State requirements for real estate agents
- [ ] State requirements for cosmetologists
- [ ] Profession-specific CE categories
- [ ] Multi-license dashboard view

### Phase 4 — Pro Features & Monetization (Week 6-8)
- [ ] Stripe integration for subscriptions
- [ ] Free tier limits (2 licenses, manual CE only)
- [ ] Pro tier (unlimited licenses, documents, multi-state, export)
- [ ] CE credit report export (PDF for state board audits)
- [ ] Tax deduction report (CE expenses)

### Phase 5 — Discovery & Growth (Week 8+)
- [ ] Certification discovery — browse certs by profession, state
- [ ] "People in your field also have..." recommendations
- [ ] CE course provider directory with referral links
- [ ] IT certification tracking (CompTIA, AWS, etc.)
- [ ] Military credential tracking
- [ ] Native app wrapper (Capacitor)

## State Requirements Data Strategy

### Data Sources
1. **Primary:** State licensing board websites (official)
2. **Secondary:** NASBA, NCSBN, national professional orgs
3. **Tertiary:** User submissions (crowd-sourced with verification)

### Data Structure
For each profession × state:
- Renewal cycle (months)
- CE hours required (total)
- CE category requirements (ethics, pharmacology, etc.)
- Accepted CE activity types (online, in-person, self-study)
- Renewal fees
- Direct link to renewal portal
- Grace period (if any)
- First renewal vs subsequent renewal rules

### Initial Data Population
Start with nursing (50 states) as the most high-value and well-documented:
- ~50 entries = manageable manual research
- Clear, consistent format across states
- Large addressable market (4.2M nurses)

Then expand to trades, real estate, etc.

## Design Principles

1. **Dead simple** — Add a license in under 30 seconds
2. **Status at a glance** — Dashboard = "am I good?" answered instantly
3. **Mobile-first** — Most checks happen on phone between jobs
4. **No unnecessary fields** — License number is optional (some people don't want to store it)
5. **Respects privacy** — License numbers stored encrypted, never shared

## Key Decisions — RESOLVED

- [x] **Database:** Self-hosted PostgreSQL on Coolify
- [x] **ORM:** Drizzle (lightweight, SQL-like, fast)
- [x] **Payments:** Stripe
- [x] **Pricing:** Free tier (manual entry only) + Pro tier (auto-lookup, recommendations, documents, etc.)
- [ ] Email provider (Resend vs Nodemailer)
- [ ] File storage (S3-compatible via Coolify)

## Competitive Positioning

| Feature | CertShelf | CE Broker | Generic Reminders |
|---------|-----------|-----------|-------------------|
| Multi-profession | ✅ | ❌ Healthcare only | ✅ But manual |
| All 50 states | ✅ | ✅ Some states | ❌ |
| CE tracking | ✅ | ✅ | ❌ |
| Document storage | ✅ Pro | ✅ Premium | ❌ |
| Certification discovery | ✅ Future | ❌ | ❌ |
| Price | Free / $19.99/yr | Free / $29.99/yr | Free |
| Trade licenses | ✅ | ❌ | ❌ |
| IT certifications | ✅ Future | ❌ | ❌ |

## Open Questions

- Should we include international licenses? (Start US-only, expand later)
- Should free users see ads? (Lean toward no — keep it clean)
- Should we offer a lifetime deal at launch for early adopters?
- How do we verify state requirement accuracy? (Community corrections + periodic audits)
