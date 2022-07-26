import { GAME_STATUS } from './constants'
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

console.log(getRandomColorPairs(4))
