# 💖 Date Invitation Web Page

> A cute, romantic, and interactive date invitation experience built with React & Vite.

I made this one for my partner, but I realized — why not share this online so you can impress your partners too?

This website is made with **React + Vite**, using just plain **JavaScript & CSS** — no Tailwind, no Bootstrap, no Material UI. Just pure, handcrafted styling.

Built with **3 interactive questions** and **1 celebration finale**. Check the demo to see the magic in action!

---

## 🚀 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## ✨ Features

- **Interactive Proposal** — A playful "Will you go on a date with me?" section with a mischievous NO button that runs away!
- **Date Picker** — Beautiful glassmorphism calendar to pick your perfect date.
- **Time Selector** — Choose your time in 30-minute intervals with a cute dropdown.
- **Restaurant Grid** — Pick your favorite spot from popular brands (Jollibee, Mang Inasal, Starbucks, and more!) or enter a custom location.
- **Celebration Finale** — Confetti explosion, floating hearts, and a romantic summary card.
- **Fully Responsive** — Looks stunning on mobile, tablet, and desktop.
- **Zero Emojis** — All icons are Font Awesome SVGs for a clean, professional look.
- **Smooth Animations** — Framer Motion powers every transition, hover, and micro-interaction.

---

## 📸 Preview

> *Check the live demo to experience the full interaction!*

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/vnxyzq/date-inviation-react.git

# Navigate into the project
cd date-invitation

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx
│   ├── Button.jsx
│   ├── CalendarSection.jsx
│   ├── Card.jsx
│   ├── FinalSection.jsx
│   ├── FloatingHearts.jsx
│   ├── QuestionOne.jsx
│   ├── RestaurantSection.jsx
│   └── SpeechBubble.jsx
├── styles/
│   ├── animations.css
│   ├── global.css
│   └── variables.css
├── App.jsx
├── App.css
├── config.js
└── main.jsx
```

---

## 🎨 Customization

You can easily customize the restaurant logos and other settings by editing `src/config.js`:

```js
export const SITE_CONFIG = {
  restaurantLogos: {
    jollibee: "https://your-cdn-link-here.png",
    // ... add your own CDN links
  }
}
```

---

## 📬 Connect With Me

<p align="center">
  <a href="https://www.facebook.com/profile.php?id=61590988717902" target="_blank">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" />
  </a>
  <a href="https://www.linkedin.com/in/havencharlespapasin/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/vnxyzq" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

---

## 📝 License

All Rights Reserved © **vnxyzq**

This project is proprietary and all rights are reserved by the author. You may view and use this code for personal, non-commercial purposes. Redistribution, modification, or commercial use without explicit permission is prohibited.

---

<p align="center">
  Made with <img src="https://img.shields.io/badge/❤️-FF6B9A?style=flat-square" alt="love" /> for my partner — and now, for you too.
</p>
