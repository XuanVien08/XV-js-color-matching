function shuffle(array) {
  if(<!DOCTYPE html>

  )
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

  const fullColorList = [...colorList, ...colorList]
  return fullColorList
}
