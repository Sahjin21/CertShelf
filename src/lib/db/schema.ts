import { pgTable, uuid, varchar, text, timestamp, integer, boolean, pgEnum } from 'drizzle-orm/pg-core';

// Enums
export const professionCategoryEnum = pgEnum('profession_category', [
  'healthcare',
  'trades',
  'real_estate',
  'cosmetology',
  'it',
  'military',
  'aviation',
  'legal',
  'finance',
  'other',
]);

export const licenseStatusEnum = pgEnum('license_status', [
  'active',
  'expiring_soon',
  'expired',
  'pending_renewal',
  'inactive',
]);

// Tables
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  clerkId: varchar('clerk_id', { length: 255 }).unique().notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),
  subscriptionTier: varchar('subscription_tier', { length: 50 }).default('free'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const professions = pgTable('professions', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  category: professionCategoryEnum('category').notNull(),
  icon: varchar('icon', { length: 100 }),
  description: text('description'),
});

export const licenses = pgTable('licenses', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  professionId: uuid('profession_id').references(() => professions.id),
  professionName: varchar('profession_name', { length: 255 }).notNull(), // denormalized for quick display
  state: varchar('state', { length: 50 }).notNull(),
  licenseNumber: varchar('license_number', { length: 255 }), // optional, encrypted later
  licenseName: varchar('license_name', { length: 255 }).notNull(), // e.g. "Registered Nurse"
  issueDate: timestamp('issue_date'),
  expiryDate: timestamp('expiry_date'),
  status: licenseStatusEnum('status').default('active'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const ceCredits = pgTable('ce_credits', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  licenseId: uuid('license_id').references(() => licenses.id, { onDelete: 'cascade' }).notNull(),
  title: varchar('title', { length: 500 }).notNull(),
  provider: varchar('provider', { length: 255 }),
  activityType: varchar('activity_type', { length: 100 }), // online, in-person, self-study
  hours: integer('hours').notNull(),
  dateCompleted: timestamp('date_completed').notNull(),
  certificateUrl: varchar('certificate_url', { length: 1000 }),
  category: varchar('category', { length: 100 }), // ethics, pharmacology, etc.
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const documents = pgTable('documents', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  licenseId: uuid('license_id').references(() => licenses.id, { onDelete: 'cascade' }),
  filename: varchar('filename', { length: 500 }).notNull(),
  fileUrl: varchar('file_url', { length: 1000 }).notNull(),
  fileType: varchar('file_type', { length: 50 }), // pdf, jpg, png
  fileSize: integer('file_size'), // bytes
  category: varchar('category', { length: 100 }), // certificate, license, insurance, ce_proof
  uploadedAt: timestamp('uploaded_at').defaultNow().notNull(),
});

export const stateRequirements = pgTable('state_requirements', {
  id: uuid('id').defaultRandom().primaryKey(),
  professionId: uuid('profession_id').references(() => professions.id).notNull(),
  state: varchar('state', { length: 50 }).notNull(),
  renewalCycleMonths: integer('renewal_cycle_months'),
  ceHoursRequired: integer('ce_hours_required'),
  ceCategories: text('ce_categories'), // JSON string of category requirements
  acceptedActivityTypes: text('accepted_activity_types'), // JSON string
  renewalFee: integer('renewal_fee_cents'), // in cents
  boardUrl: varchar('board_url', { length: 1000 }),
  renewalUrl: varchar('renewal_url', { length: 1000 }),
  gracePeriodDays: integer('grace_period_days'),
  notes: text('notes'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const reminders = pgTable('reminders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  licenseId: uuid('license_id').references(() => licenses.id, { onDelete: 'cascade' }).notNull(),
  reminderDate: timestamp('reminder_date').notNull(),
  type: varchar('type', { length: 50 }).notNull(), // '30_day', '60_day', '90_day', 'expired'
  sent: boolean('sent').default(false),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
