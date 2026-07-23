# ONINFRA TECHNICAL SOLUTION - Backend Architecture & Firebase Configuration

This directory contains the database definitions, security rules, administrative SDK modules, and Firestore collections structure for **ONINFRA TECHNICAL SOLUTION**.

---

## 1. Directory Structure

```
backend/
├── firestore.rules      # Production security rules for Cloud Firestore
├── storage.rules        # Security rules for Firebase Storage
├── firebase.json        # Firebase CLI configuration for rules & emulators
├── firebaseAdmin.ts     # Server-side Firebase Admin SDK initialization
└── README.md            # Backend reference documentation
```

---

## 2. Cloud Firestore Collections Schema

1. **`company`** (Document ID: `main`)
   - `name`: string
   - `tagline`: string
   - `address`: string
   - `phone`: string
   - `email`: string
   - `workingHours`: string

2. **`services`** (Collection)
   - `slug`: string
   - `title`: string
   - `shortDescription`: string
   - `fullDescription`: string
   - `features`: array of strings
   - `benefits`: array of strings
   - `order`: number

3. **`team`** (Collection)
   - `name`: string
   - `designation`: string
   - `description`: string
   - `image`: string
   - `order`: number

4. **`contact_messages`** (Collection)
   - `name`: string
   - `email`: string
   - `phone`: string
   - `subject`: string
   - `message`: string
   - `createdAt`: serverTimestamp
   - `read`: boolean

5. **`clients`**, **`testimonials`**, **`hero`**, **`settings`**

---

## 3. Deploying Firebase Rules

To deploy security rules using Firebase CLI:
```bash
firebase deploy --only firestore:rules,storage:rules
```
