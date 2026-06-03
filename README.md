Dream Maze Game

A fun browser-based maze game built with **TypeScript** and **Vite** where players guide a pig through a maze while avoiding walls, racing against the clock, and aiming for the best score.

Live Demo

**Play Here:**
https://maze-game-six-fawn.vercel.app/

---

Features

* Custom pig cursor
* Dreamy cloud-themed background
* Interactive maze gameplay
* Real-time timer
* Best score tracking
* Sound effects for collisions and victory
* Wall collision detection
* Public deployment on Vercel

---

## 🛠️ Tech Stack

### Frontend

* TypeScript
* Vite
* HTML5
* CSS3

### DevOps & Deployment

* Git
* GitHub
* GitHub Container Registry (GHCR)
* Docker
* Vercel

---

Project Structure

```text
maze-game/
├── public/
│   ├── background.png
│   ├── pig.png
│   ├── hit.mp3
│   └── win.mp3
├── src/
│   ├── main.ts
│   └── style.css
├── Dockerfile
├── package.json
├── vite.config.ts
└── README.md
```

---

Run Locally

Clone the repository:

```bash
git clone https://github.com/Sarabjeeth-kaur/maze-game.git
cd maze-game
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

---

Docker

Build image:

```bash
docker build -t maze-game .
```

Run container:

```bash
docker run -p 3000:3000 maze-game
```

Open:

```text
http://localhost:3000
```

---

GitHub Container Registry (GHCR)

Pull image:

```bash
docker pull ghcr.io/sarabjeeth-kaur/maze-game:latest
```

Run image:

```bash
docker run -p 3000:3000 ghcr.io/sarabjeeth-kaur/maze-game:latest
```

---

CI/CD

The application is automatically deployed through Vercel whenever changes are pushed to the main branch.

Workflow:

```text
Git Push
   ↓
GitHub Repository
   ↓
Vercel Build
   ↓
Automatic Deployment
   ↓
Live Website Updated
```

---

Future Improvements

* Multiple difficulty levels
* Random maze generation
* Leaderboard
* Mobile support
* GitHub Actions CI pipeline
* Kubernetes deployment
* AWS EKS deployment
* Terraform infrastructure provisioning

---

Author

**Sardarni Sarabjeeth Kaur**

M.Tech (Computer Science)
Cloud & DevOps Enthusiast
