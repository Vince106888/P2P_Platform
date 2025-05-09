# 🎓 P2P Student Platform

A decentralized, community-driven student support system built to empower learners through peer-to-peer help, micro-mentorship, and student-led marketplaces — starting at Strathmore University.

## 🚀 Overview

This platform is designed to be a **decentralized digital campus layer**, giving students the ability to:

* Create and manage their own **profiles**.
* Access a **social peer-to-peer support forum**.
* **Sell and showcase** their products/services on campus.
* Participate in **group learning**, **event planning**, and **collaborative challenges**.
* Eventually scale into **DAOs**, **NFT campus experiences**, and **blockchain-based incentives**.

> 🧠 This project is focused on solving real-world student challenges — from loneliness to financial constraints — by empowering individuals and connecting communities.

---

## 🧱 Tech Stack

| Layer      | Stack/Tool                      | Purpose                                 |
| ---------- | ------------------------------- | --------------------------------------- |
| Frontend   | `React + Vite + TailwindCSS`    | Lightning-fast UI, responsive design    |
| Routing    | `React Router DOM`              | SPA Navigation                          |
| State Mgmt | React Local State / IndexedDB   | Offline-first profile/data caching      |
| Backend    | `Firebase (Auth, Firestore)`    | Authentication, Realtime Database       |
| Storage    | `Firebase Storage`              | User-uploaded avatars                   |
| Offline    | `Dexie.js + IndexedDB`          | Offline mode and performance resilience |
| Hosting    | `Static Hosting / GitHub Pages` | Dev phase — simple HTTP server hosting  |

---

## 📁 Project Structure

```
p2p-student-platform/
│
├── public/                   # Static HTML pages
│   ├── auth.html             # Login/Signup Page
│   ├── profile.html          # Profile Update Page
│   ├── dashboard.html        # User Dashboard (post-login)
│
├── src/                      # React Components (WIP)
│   ├── pages/
│   ├── components/
│
├── index.html                # Main app entry (for React SPA)
├── package.json
├── vite.config.js
└── README.md                 # Project documentation
```

---

## 🔐 Firebase Configuration

Ensure your Firebase project is configured as follows:

```js
const firebaseConfig = {
  apiKey: "AIzaSyAOybEgXfQX_tJx5dqg_OGzcrPcGBKq2gg",
  authDomain: "p2p-student-platform.firebaseapp.com",
  projectId: "p2p-student-platform",
  storageBucket: "p2p-student-platform.appspot.com",
  messagingSenderId: "23452791627",
  appId: "1:23452791627:web:de87fcbd0ba47949b9aece"
};
```

* ✅ **Authentication**: Enabled (Email/Password)
* ✅ **Firestore**: Used for storing user profiles
* ✅ **Storage**: Used for avatars and images

---

## ✨ Features

### ✅ Profile Page (`profile.html`)

* Live Firebase-authenticated user profile management
* Upload avatar (optional)
* Purpose-driven student profiling
* Firebase Firestore & Storage integration

> If performance is an issue, avatar upload can be disabled temporarily.

### ✅ Auth Page (`auth.html`)

* Sign Up and Login using Firebase Authentication
* Redirects to profile or dashboard upon success

### ✅ Dashboard (WIP)

* Placeholder for user dashboard and personalized journey
* Will include group discovery, forums, and P2P tools

---

## 🛠 Setup Instructions

### 🧪 Local Testing (Dev)

1. Clone the repo:

   ```bash
   git clone https://github.com/Vince106888/P2P_Platform.git
   cd P2P_Platform
   ```

2. Install dependencies (React app):

   ```bash
   npm install
   ```

3. Start Vite dev server:

   ```bash
   npm run dev
   ```

4. For static HTML testing:

   ```bash
   python3 -m http.server
   ```

   Access it at: [http://localhost:8000/profile.html](http://localhost:8000/profile.html)

---

## 📦 Offline Support (WIP)

* Will be handled using **Dexie.js** and **IndexedDB** for storing profiles and forums locally.
* Aim: Full functionality even when offline, syncs when online.

---

## 💡 Vision & Roadmap

* ✅ **MVP (Now)**: Profile + Auth + Basic structure
* 🕒 **Phase 2**: Decentralized forums, group creation, peer study hubs
* 🕒 **Phase 3**: Marketplace, anonymous peer help, reputation system
* 🔮 **Future**:

  * DAO-based class management
  * NFT-based gamified campus experiences
  * Decentralized identity and privacy features

---

## 🧐 Contributors

* **@Vince106888** — Lead Developer, Vision Architect
* Open for collaborators — Contact via GitHub

---

## 🔧 Known Issues

* ⏳ Profile save might lag due to Firebase Storage + Firestore write latency
* 🛠 Avatar upload might slow down UX; optional fallback planned
* 🚧 Dashboard and IndexedDB sync still under development

---

## 📜 License

This project is under the **MIT License** — Free to use, modify, and distribute.

