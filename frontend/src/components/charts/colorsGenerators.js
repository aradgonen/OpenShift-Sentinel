export const piechartColorsGenerator = (numOfColors) => {
    const backgroundColor = []
    const borderColor = []
  
    const backgroundWhite = 0.2
    const borderWhite = 1
  
    for (let colorIndex = 0; colorIndex < numOfColors; colorIndex++) {
      let {r,b,g} = randomColorGenerator()
      backgroundColor.push(`rgba(${r}, ${g}, ${b}, ${backgroundWhite})`)
      borderColor.push(`rgba(${r}, ${g}, ${b}, ${borderWhite})`)
    }
  
    return {backgroundColor, borderColor}
  
  }
export const BarChartColorsGenerator = (numOfColors) => {
    const backgroundColor = []
  
    const backgroundWhite = 0.2
  
    for (let colorIndex = 0; colorIndex < numOfColors; colorIndex++) {
      let {r,b,g} = randomColorGenerator()
      backgroundColor.push(`rgba(${r}, ${g}, ${b}`)
    }
  
    return backgroundColor
  
  }
  
export const randomColorGenerator = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return ({r, g, b})
  }