import { GAME_STATUS, PAIRS_COUNT } from './constants.js'
import { getColorElementList } from './selectors.js'
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

function initColor() {
  //random 8 pairs of colors
  const colorList = getRandomColorPairs(PAIRS_COUNT)

  //bin to li > div.overlay
  const liList = getColorElementList()
  liList.forEach((liElement, index) => {
    const overlayElement = liElement.querySelector('overlay')
    if (overlayElement) overlayElement.style.backgroundColor = colorList[index]
  })
}

function attachEvenForColorList() {}

//MAIN
;(() => {
  initColor()

  attachEvenForColorList()
})()
