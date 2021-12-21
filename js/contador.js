//definindo uma constante para a data atual
const hoje = new Date()

//montando a data de dataAlvo => ano referente à variavel hoje + mês de índice 11 (dez) + data 31
const dataAlvo = new Date(hoje.getFullYear(), 11, 31)

//24horas * 60 minutos * 60 segundos * 1000 milisegundos
const umDiaMilisegundos = 24 * 60 * 60 * 1000

//condicional para caso o dataAlvo seja a data atual (hoje), altera o ano para que comece uma nova contagem
if (hoje.getMonth() === 11 && hoje.getDate() > 31) {
  dataAlvo.setFullYear(dataAlvo.getFullYear() + 1)
}

//calculando os dias inteiros até o dataAlvo
const hojeTime = hoje.getTime()
const dataAlvoTime = dataAlvo.getTime()
const diasAteDataAlvo = Math.ceil(
  (dataAlvoTime - hojeTime) / (umDiaMilisegundos)
)

//RELÓGIO PARA O dataAlvo
const contadorReverso = setInterval(() => {

  let agora = Date.now()
  let xmas = dataAlvoTime
  let contador = xmas - agora

  let dias = Math.floor(contador / umDiaMilisegundos)
  diasEdit = dias < 10 ? `0${dias}` : dias
  let horas = Math.floor((contador % umDiaMilisegundos) / (60 * 60 * 1000))
  horasEdit = horas < 10 ? `0${horas}` : horas
  let minutos = Math.floor((contador % (60 * 60 * 1000)) / (60 * 1000))
  minutosEdit = minutos < 10 ? `0${minutos}` : minutos
  let segundos = Math.floor((contador % (60 * 1000)) / (1000))
  segundosEdit = segundos < 10 ? `0${segundos}` : segundos

  const textoDataAlvo = document.getElementById('texto-dataAlvo')
  textoDataAlvo.innerHTML = `Faltam <span>${diasEdit}</span> dias <span>${horasEdit}:${minutosEdit}:${segundosEdit}</span> para o Reveillon 2021.`

  if (contador < 0) {
    clearInterval(contadorReverso)
  }

}, 1000)