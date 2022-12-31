function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar tag img
  const img = document.querySelector('#profile img')
  // subistituir a imagem 
  if (html.classList.contains('light')) {
    // se tiver light mode adicionar imagem light
    img.setAttribute('src', './assets/avatar-branco.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }

  


}


  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }