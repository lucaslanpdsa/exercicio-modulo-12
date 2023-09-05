let ponto = document.getElementById('some-nav')
let cabecalho = document.getElementById('cabecalho')

document.addEventListener("scroll", function() {
  let cordCabecalho = cabecalho.getBoundingClientRect().top //cordenadas do eixo y 
  let cordPonto = ponto.getBoundingClientRect().top //cordenadas do eixo y 

  if(cordPonto < cordCabecalho){
    cabecalho = document.getElementById('cabecalho')
    cabecalho.classList.add("bg")

    navLogo = document.getElementById('nav-logo')
    navLogo.classList.remove("navbar--none")

    btnAssine = document.getElementById('btn-assine')
    btnAssine.classList.remove("navbar--none")
  } 
  else {
    cabecalho.classList.remove("bg")
    navLogo.classList.add("navbar--none")
    btnAssine.classList.add("navbar--none")
  }
});

