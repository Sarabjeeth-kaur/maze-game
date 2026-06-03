import './style.css'

const hitSound = new Audio('/hit.mp3')
const winSound = new Audio('/win.mp3')

const warning = document.getElementById('warning') as HTMLDivElement
const timerText = document.getElementById('timer') as HTMLDivElement
const bestText = document.getElementById('best') as HTMLDivElement
const game = document.getElementById('game') as HTMLDivElement
const end = document.getElementById('end') as HTMLDivElement
const start = document.getElementById('start') as HTMLDivElement

const walls = document.querySelectorAll('.wall')

let startTime = Date.now()
let bestScore: number | null = null
let audioEnabled = false

// Unlock audio after user clicks START
start.addEventListener('click', async () => {
  audioEnabled = true

  try {
    await hitSound.play()
    hitSound.pause()
    hitSound.currentTime = 0

    await winSound.play()
    winSound.pause()
    winSound.currentTime = 0
  } catch (err) {
    console.log('Audio unlock failed:', err)
  }

  warning.textContent = '🎮 Game Started!'

  setTimeout(() => {
    warning.textContent = ''
  }, 1000)

  startTime = Date.now()
})

function resetGame() {
  if (audioEnabled) {
    hitSound.currentTime = 0

    hitSound.play().catch((err) => {
      console.log('Hit sound error:', err)
    })
  }

  warning.textContent = 'Pig hit the wall!'

  game.classList.add('flash')

  setTimeout(() => {
    warning.textContent = ''
    game.classList.remove('flash')
  }, 800)

  startTime = Date.now()
}

function updateTimer() {
  const seconds = Math.floor((Date.now() - startTime) / 1000)
  timerText.textContent = `Time: ${seconds}s`
}

setInterval(updateTimer, 1000)

walls.forEach((wall) => {
  wall.addEventListener('mouseenter', () => {
    console.log('WALL HIT')

    hitSound.pause()
    hitSound.currentTime = 0
    hitSound.volume = 1

    hitSound.play().then(() => {
      console.log('Sound played')
    }).catch(err => {
      console.log('Sound failed', err)
    })

    resetGame()
  })
})

end.addEventListener('mouseenter', () => {
  console.log('WIN REACHED')

  const seconds = Math.floor((Date.now() - startTime) / 1000)

  if (audioEnabled) {
    winSound.currentTime = 0

    winSound.play().catch(console.error)
  }

  if (bestScore === null || seconds < bestScore) {
    bestScore = seconds
    bestText.textContent = `Best: ${bestScore}s`
  }

  setTimeout(() => {
    alert(`You escaped the Dream Maze in ${seconds} seconds!`)
  }, 1000)

  startTime = Date.now()
})