# TT-Tutorcen - Website UI Clone

A modern, responsive React + Vite clone of the TT-Tutorcen educational website, built with HTML5, CSS3, Tailwind CSS, and React JSX.

---

## 🛠️ Prerequisites for Windows

Before starting, make sure you have the following installed on your Windows PC:

1. **Node.js** (v18 or higher recommended, LTS):
   - Download and install from [nodejs.org](https://nodejs.org/) (Choose the LTS version).
   - Verify installation in Windows PowerShell or Command Prompt:
     ```powershell
     node -v
     npm -v
     ```
2. **Visual Studio Code (VS Code)**:
   - Download from [code.visualstudio.com](https://code.visualstudio.com/).
   - Recommended extension: **ES7+ React/Redux/React-Native snippets** and **Tailwind CSS IntelliSense**.

---

## 🚀 Step-by-Step Guide: Running in VS Code on Windows

### 1. Open the Project Folder in VS Code
- Open **VS Code**.
- Click **File** > **Open Folder...** (or press `Ctrl + K`, `Ctrl + O`).
- Select the `tutorcen` project folder.

### 2. Open the Integrated Terminal
- In VS Code, open the built-in terminal by pressing:
  - **`Ctrl + \``** (Control + Backtick)
  - Or go to the top menu: **Terminal** > **New Terminal**.
- Ensure the terminal is open at the root of the project directory.

### 3. Install Dependencies
In the VS Code terminal, run:

```powershell
npm install
```

> **Note for Windows PowerShell Users:** If you see an error like `cannot be loaded because running scripts is disabled on this system`, run this command in PowerShell to temporarily bypass the execution policy for that session:
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```
> Then re-run `npm install`.

### 4. Start the Local Development Server
Run:

```powershell
npm run dev
```

You should see output similar to:
```text
  VITE v8.x.x  ready in 320 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
  ➜  press h + enter to show help
```

### 5. View in Your Browser
- Hold **`Ctrl`** and **click the URL** in the terminal: `http://localhost:3000/`
- Or open your web browser (Chrome, Edge, Firefox, Brave) and navigate to:
  ```
  http://localhost:3000
  ```

---

## 📂 Project Structure

```text
├── index.html                  # HTML entry point with fonts & metadata
├── metadata.json               # Application metadata
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration (React + Tailwind CSS)
└── src/
    ├── App.jsx                 # Main application component & layout
    ├── main.jsx                # React DOM render entry point
    ├── index.css               # Global Tailwind CSS imports
    ├── styles.css              # Custom styling & font declarations
    ├── data/
    │   └── courses.js          # Course catalog data & locations
    ├── assets/
    │   └── images/             # High-resolution generated UI imagery
    └── components/
        ├── Navbar.jsx          # Header with logo, links, dropdown & auth CTA
        ├── HeroSection.jsx     # Hero banner with tutor graphic & search
        ├── SearchBar.jsx       # Location picker & keyword search input
        ├── CourseSection.jsx   # Top courses with working left/right carousel
        ├── CourseCard.jsx      # Reusable course card component
        ├── LearningSection.jsx # "Elevate Your Learning" with sunburst & NEW!
        ├── JoinTeamSection.jsx # 3 tutor cards with 100% EXPERTS rosette
        ├── FindTutorBanner.jsx # Dark green banner with headphone student
        ├── RedefineExperienceSection.jsx # 5 tabs, mother/daughter graphic & stats
        ├── GlobalReachSection.jsx # Dotted world map with avatar pins & astronaut
        ├── CallToActionBanner.jsx # Navy banner with laptop & megaphone artwork
        ├── Footer.jsx          # Footer with categorized columns & social icons
        ├── AuthModal.jsx       # Login & Sign Up modal
        ├── ApplyTutorModal.jsx # "Apply for tutor" application modal
        └── CourseDetailModal.jsx # Course syllabus & enrollment modal
```

---

## 💡 Troubleshooting on Windows

| Issue | Solution |
| :--- | :--- |
| **Port 3000 is in use** | If port 3000 is busy, Vite will automatically select the next available port (e.g. `3001`). Look at the terminal output for the exact URL. |
| **PowerShell script execution disabled** | Open PowerShell as Administrator and run `Set-ExecutionPolicy RemoteSigned`, or switch VS Code default terminal to **Command Prompt (cmd)**. |
| **Node.js not recognized** | Restart VS Code after installing Node.js so that the `PATH` environment variable is refreshed. |
| **Build for production** | Run `npm run build` to generate the production-ready `dist` folder, and test it locally with `npm run preview`. |
