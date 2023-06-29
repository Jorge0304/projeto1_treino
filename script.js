function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // subtituir a imagem
  if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png" )
  }

  // pegar o atributo alt
  const alt = document.querySelector("#profile img")

  // substituir o alt da imagem
  if(html.classList.contains ("light")) {
    // se tiver light mode, mudar o texto do alt
    alt.setAttribute("alt", "Foto de Mayk Brito sorrindo,usando óculos de sol, jaqueta preta, em um fundo rosa e azul.")
  } else {
    // se tiver sem light mode, manter o texto do alt
    alt.setAttribute("alt", "Foto de Mayk Brito sorrindo,usando óculos e camisa preta, barba e fundo amarelo.")
  }
}