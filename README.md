# MED Consulting

A **Next.js + TypeScript** static web‑app that helps patients discover medical services and partner hospitals in Vienna. It offers instant search, an interactive map, and smooth, accessible UI animations powered by Framer Motion.

## ✨ Features

- **Explore Medical Services** – Browse a curated list of specialities such as cardiology, orthopedics, oncology, and more.
- **Partner Hospital Directory** – View accredited hospitals with dedicated pages and an interactive Google Map displaying exact locations.
- **Instant Fuzzy Search** – Find pages, services, and hospitals in real time with Fuse.js.
- **Smooth Animations** – Enjoy elegant transitions and micro‑interactions powered by Framer Motion.
- **Responsive & Accessible** – Pixel‑perfect on mobile, tablet, and desktop, with semantic markup for assistive technologies.
- **Static Export Ready** – Generates a fully static site (Next output: "export") and an optional GH_PAGES base‑path for painless GitHub Pages deployment.
- **SEO Optimised** – Server components, clean URLs, and optimised images for fast, discoverable content.

## ⚡ Technology Stack

- **Next.js** – React framework with file‑system routing and static export.
- **TypeScript** – End‑to‑end type safety.
- **SCSS Modules** – Locally‑scoped, maintainable styles.
- **Framer Motion** – Declarative animation library.
- **Fuse.js** – Lightweight fuzzy‑search for instant results.
- **Google‑Map‑React** – Embed interactive Google Maps.
- **React Icons** – Feather‑weight SVG icon set.
- **ESLint & Prettier** – Enforced code quality and style consistency.

## ⚙️ Build & Installation

### Prerequisites

Before installing the project, ensure you have the following installed:

- **Node.js (16+)** – Required to run Next.js.
- **npm** or **yarn** – To install dependencies and run scripts.

### Installation Instructions

Follow these steps to clone, build, and run MED Consulting website:
```sh
# Clone the repository
git clone https://github.com/andreiv03/medconsulting.git
cd medconsulting

# Create a .env.local at the project root:
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_KEY

# Install dependencies
npm install

# Start the development server
npm run dev

# To create an optimized production build
npm run build

# To preview the production build
npm run start
```
The app will be accessible at [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

Contributions are welcome! If you'd like to enhance the project, follow these steps:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature-branch`)
3. **Commit** your changes (`git commit -m "feat: add new feature"`)
4. **Push** your changes (`git push origin feature-branch`)
5. Open a **Pull Request** 🚀

For suggestions or bug reports, feel free to open an issue with the appropriate label.

⭐ **If you find this project useful, consider giving it a star!** ⭐

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.
