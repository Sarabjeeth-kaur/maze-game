import './style.css'

const hitSound = new Audio('/hit.mp3')
const winSound = new Audio('/win.mp3')

const warning = document.getElementById("warning") as HTMLDivElement
const timerText = document.getElementById("timer") as HTMLDivElement
const bestText = document.getElementById("best") as HTMLDivElement
const game = document.getElementById("game") as HTMLDivElement
const end = document.getElementById("end") as HTMLDivElement

const walls = document.querySelectorAll(".wall")

let startTime = Date.now()
let bestScore: number | null = null

function resetGame() {
  if (audioEnabled) {
  hitSound.currentTime = 0
  hitSound.play().catch(() => {})
}

  warning.textContent = "❌ Pig hit the wall!"

  game.classList.add("flash")

  setTimeout(() => {
    warning.textContent = ""
    game.classList.remove("flash")
  }, 800)

  startTime = Date.now()
}

function updateTimer() {
  const seconds = Math.floor((Date.now() - startTime) / 1000)
  timerText.textContent = `Time: ${seconds}s`
}

setInterval(updateTimer, 1000)

walls.forEach((wall) => {
  wall.addEventListener("mouseenter", () => {
    resetGame()
  })
})

end.addEventListener("mouseenter", () => {

  if (audioEnabled) {
  winSound.currentTime = 0
  winSound.play().catch(() => {})
}

  const seconds = Math.floor((Date.now() - startTime) / 1000)

  if (bestScore === null || seconds < bestScore) {
    bestScore = seconds
    bestText.textContent = `Best: ${bestScore}s`
  }

  alert(`🏆 You escaped the Dream Maze in ${seconds} seconds!`)

  startTime = Date.now()
})