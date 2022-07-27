import { GAME_STATUS, PAIRS_COUNT } from './constants.js'
import {
  getColorElementList,
  getColorListElement,
  getInActiveColorList,
  getPlayAgainButton,
  getTimerElement,
} from './selectors.js'
import {
  getRandomColorPairs,
  hidePlayAgainButton,
  setTimerText,
  showPlayAgainButton,
} from './utils.js'
// Global variables
let selections = []
let gameStatus = GAME_STATUS.PLAYING
// TODOs
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click

function handleColorClick(liElement) {
  const shouldBlockClick = [GAME_STATUS.BLOCKING, GAME_STATUS.FINISHED].includes(gameStatus)
  const isClicked = liElement.classList.contains('active')
  if (!liElement || isClicked || shouldBlockClick) return

  liElement.classList.add('active')

  // save clicked to selections
  selections.push(liElement)
  if (selections.length < 2) return

  //check match
  const firstColor = selections[0].dataset.color
  const secondColor = selections[1].dataset.color
  const isMatch = firstColor === secondColor
  if (isMatch) {
    //check win
    const isWin = getInActiveColorList().length === 0

    if (isWin) {
      //show replay button
      showPlayAgainButton()
      //show you win
      setTimerText('YOU WIN ❤😘')

      gameStatus = GAME_STATUS.FINISHED
    }

    selections = []
    return
  }
  gameStatus = GAME_STATUS.BLOCKING
  //in case of not match
  //remove active class for 2 li elements
  setTimeout(() => {
    selections[0].classList.remove('active')
    selections[1].classList.remove('active')
    selections = []
    gameStatus = GAME_STATUS.PLAYING
  }, 500)
  //reset selection for next turn
}

function initColor() {
  //random 8 pairs of colors
  const colorList = getRandomColorPairs(PAIRS_COUNT)

  //bin to li > div.overlay
  const liList = getColorElementList()
  liList.forEach((liElement, index) => {
    liElement.dataset.color = colorList[index]
    const overlayElement = liElement.querySelector('.overlay')
    if (overlayElement) overlayElement.style.backgroundColor = colorList[index]
  })
}

function attachEvenForColorList() {
  const ulElement = getColorListElement()
  if (!ulElement) return

  ulElement.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return

    handleColorClick(event.target)
  })
}

function resetGame() {
  //reset global vars
  gameStatus = GAME_STATUS.PLAYING
  selections = []
  //reset DOM elements
  //- remove active class from li
  const colorElementList = getColorElementList()
  if (!colorElementList) return
  for (const colorElement of colorElementList) {
    colorElement.classList.remove('active')
  }
  //- hide replay button
  hidePlayAgainButton()
  //- clear you win // timeout text
  setTimerText('')
  // re-generate new color
  initColor()
}

function attachEvenForPlayAgainButton() {
  const playAgainButton = getPlayAgainButton()

  if (!playAgainButton) return

  playAgainButton.addEventListener('click', resetGame)
}

//MAIN
;(() => {
  initColor()

  attachEvenForColorList()
  attachEvenForPlayAgainButton()
})()
