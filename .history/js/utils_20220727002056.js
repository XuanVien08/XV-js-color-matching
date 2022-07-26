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
