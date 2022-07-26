export const getRandomColorPairs = (count) => {
  // receive count --> return count * 2 random colors
  // using lib: https://github.com/davidmerfield/randomColor

  const colorList = []

  const randomColor = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'monochrome']

  //random 'count' colors
  for (let i = 0; i < count; i++) {
    const color = window.randomColor({
      hue: i,
      li,
    })
  }

  //random colors
  return colorList
}
