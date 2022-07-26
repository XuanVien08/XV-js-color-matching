import { GAME_STATUS, PAIRS_COUNT } from './constants.js'
import { getColorElementList, getColorListElement } from './selectors.js'
import { getRandomColorPairs } from './utils.js'
// Global variables
let selections = []
let gameState = GAME_STATUS.PLAYING
// TODOs
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click

function handleColorClick(liElement) {
  console.log(event.target)
}

function initColor() {
  //random 8 pairs of colors
  const colorList = getRandomColorPairs(PAIRS_COUNT)

  //bin to li > div.overlay
  const liList = getColorElementList()
  liList.forEach((liElement, index) => {
    const overlayElement = liElement.querySelector('.overlay')
    if (overlayElement) overlayElement.style.backgroundColor = colorList[index]
  })
}

function attachEvenForColorList() {
  const ulElement = getColorListElement()
  if (!ulElement) return

  ulElement.addEventListener('click', (event) => {
    handleColorClick(event.target)
  })
}

//MAIN
;(() => {
  initColor()

  attachEvenForColorList()
})()
