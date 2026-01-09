# 💪 Mscler - Workout Planner

> **A lightweight, privacy-focused, and highly customizable workout generator and tracker.**

**Mscler** is a browser-based application designed to help users generate, customize, and track their fitness routines without the need for complex accounts, internet dependencies, or heavy frameworks. Built with pure Vanilla JavaScript, it offers a fast and responsive experience on any device.

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Web-orange)
![Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

[Live Demo](https://odevstudio.de/mscler.html)

---

## 🌟 Key Features

### 🧠 Smart Training Generator
* **Customizable Frequency:** Create plans ranging from **1 to 6 days** per week (Full Body, Upper/Lower, PPL, etc.).
* **Equipment Filtering:** Filter exercises based on what you have available (Dumbbells, Barbell, Machines, Bodyweight, etc.).
* **Difficulty Setting:** Filter exercises based on your training level).
* **Advanced Settings:** Fine-tune volume by adjusting the number of exercises per muscle group via intuitive sliders.

### 📚 Comprehensive Exercise Database
* **180+ Exercises:** A massive library covering all major muscle groups.
* **Visual Guidance:** Includes text instructions and **YouTube integration** for video tutorials.
* **Smart Filtering:** Sort by Muscle Group, Category (Push/Pull/Legs), Difficulty, or Equipment.

### 🎨 User Experience
* **Dark & Light Mode:** Toggle themes to suit your environment.
* **Multilingual Support:** Instantly switch between **English**, **German**, **Spanish** and **French**.
* **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile usage.

### 🛠️ Customization & Tracking
* **Favorites & Exclusion:** Mark exercises as favorites to prioritize them in the generator, or blacklist exercises you cannot perform.
* **Integrated Logger:** Track your sets, reps, and weights directly in the app.
* **Smart Shuffling:** Don't like a specific exercise in your generated plan? Click the shuffle button (🔀) to swap it for a biomechanically similar alternative based on your available equipment.

### 🔒 Privacy Focused
* **Client-Side:** No server, no accounts, no tracking, only embedded youtube videos.
* **Local Storage:** All your settings, plans, logs, and favorites are saved securely in your device's `localStorage`.

---

## 🚀 Getting Started

Since Mscler is built with Vanilla HTML/CSS/JS, running it is incredibly simple.

### Prerequisites
* A modern web browser (Chrome, Firefox, Safari, Edge).

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ODevStudio/mscler.git](https://github.com/ODevStudio/mscler.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd mscler
    ```
3.  **Run the app:**
    * Simply double-click `index.html` to open it in your browser.
    * *Optional:* For a better development experience, you can use a simple local server (e.g., Live Server for VS Code).

---

## 📂 Project Structure

The project maintains a clean structure without heavy `node_modules` or build steps.

```text
Mscler/
├── mscler.html      # Main static ui parts and import of css and js
├── dist             # minified stylesheet and javasript for execution
├── src              # source files with clear names and destinction
└── README.md        # Documentation


## License

This project is licensed under the [GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html).
