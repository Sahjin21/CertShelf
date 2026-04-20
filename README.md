# CertShelf

> Your professional credentials, organized and tracked.

CertShelf is a web app (PWA) for tracking professional certifications, licenses, and continuing education across all industries and all 50 states.

## The Problem

- 70%+ of licensed professionals have missed or nearly missed a renewal deadline
- Requirements vary wildly by state and profession — no central source of truth
- Existing apps are either single-profession, enterprise-only, or overpriced
- CE tracking is scattered across paper certificates, emails, and spreadsheets

## The Solution

A single place to:
- Track all your licenses and certifications with renewal deadlines
- Log continuing education (CE) credits per state requirements
- Get reminders before deadlines hit
- Store certificates and license documents
- Discover new certifications relevant to your field

## Target Professions

**Phase 1 (Launch):**
- Nursing (RN/LPN/CNA) — 4.2M professionals
- Contractors (electrical, plumbing, HVAC, general)
- Real Estate Agents
- Cosmetologists / Barbers

**Phase 2:**
- IT Certifications (CompTIA, AWS, Cisco, Microsoft)
- Healthcare (physicians, dentists, therapists, pharmacists)
- Insurance Agents
- Teachers / Educators

**Phase 3:**
- Drone Pilot (FAA Part 107)
- Military certifications and clearances
- Pilot licenses (FAA)
- Security Guard licenses
- Any state-issued professional license

## Tech Stack

- **Frontend:** Next.js (React) as PWA
- **Backend:** Next.js API routes + tRPC
- **Database:** PostgreSQL self-hosted on Coolify (Drizzle ORM)
- **Auth:** Clerk (Google, Apple, email) — same account as other projects
- **Hosting:** Coolify on Hetzner
- **Mobile:** Capacitor wrapper for App Store / Play Store (later)
- **Push Notifications:** Web Push + Firebase Cloud Messaging

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Up to 2 licenses, basic reminders, manual CE logging |
| Pro | $2.99/mo or $19.99/yr | Unlimited licenses, document vault, multi-state, export, priority reminders |
| Teams | $5/user/mo | Shared dashboard for clinics, agencies, companies |

Additional revenue:
- CE course provider referrals ($5-15 per enrollment)
- New certification recommendations (affiliate)
- Job board / recruiter access (future)

## Moat

The **state requirements database**. Every state has different rules for every profession — renewal cycles, CE hours, accepted activities, fees. This data is public but scattered across hundreds of state board websites. Aggregating and maintaining it is the core value that's hard to replicate.

## Domain

**certshelf.com**

## Status

🟡 Planning phase
