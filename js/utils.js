import { getPlayAgainButton, getTimerElement, getBackgroundColor } from './selectors.js'
function shuffle(array) {
  if (!Array.isArray(array) || array.length <= 2) return

  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i)

    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export const getRandomColorPairs = (count) => {
  // receive count --> return count * 2 random colors
  // using lib: https://github.com/davidmerfield/randomColor

  const colorList = []

  const hueList = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'monochrome']

  //random 'count' colors
  for (let i = 0; i < count; i++) {
    //randomColor function is provided by lib: https://github.com/davidmerfield/randomColor
    const color = window.randomColor({
      luminosity: 'dark',
      hue: hueList[i % hueList.length],
    })
    colorList.push(color)
  }
  //double current color list
  const fullColorList = [...colorList, ...colorList]
  // shuffle it
  shuffle(fullColorList)

  return fullColorList
}

export function showPlayAgainButton() {
  const playAgainButton = getPlayAgainButton()

  if (!playAgainButton) return
  playAgainButton.classList.add('show')
}
export function hidePlayAgainButton() {
  const playAgainButton = getPlayAgainButton()

  if (!playAgainButton) return
  playAgainButton.classList.remove('show')
}
export function setTimerText(text) {
  const timerElement = getTimerElement()
  if (timerElement) timerElement.textContent = text
}

export function createTimer({ seconds, onChange, onFinish }) {
  let intervalId = null
  function start() {
    clear()
    let currentSecond = seconds
    intervalId = setInterval(() => {
      // if (onChange) onChange(currentSecond)
      onChange?.(currentSecond)
      currentSecond--
      if (currentSecond < 0) {
        clear()
        onFinish?.()
      }
    }, 1000)
  }

  function clear() {
    clearInterval(intervalId)
  }

  return {
    start,
    clear,
  }
}

export function setBackgroundColor(color) {
  const backgroundColor = getBackgroundColor()
  if (backgroundColor) backgroundColor.style.backgroundColor = color
}
