function createGame(player1, hour, player2) {
  return `
  <li>
  <img
    src="assets/icon=${player1}.svg"
    alt="Icone bandeira ${player1}"
  />
  <strong>${hour}</strong>
  <img
    src="assets/icon=${player2}.svg"
    alt="Icone bandeira ${player2}"
  />
  </li>
`
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

const body = document.querySelector('body')
const BtnYellow = document.querySelector('.BtnYellow')
const BtnBlue = document.querySelector('.BtnBlue')
const BtnGreen = document.querySelector('.BtnGreen')

BtnYellow.onclick = () => {
  body.classList.add('yellow')
  body.classList.remove('blue')
  body.classList.remove('green')
  BtnYellow.style.backgroundColor = '#ccae05'
  BtnBlue.style.backgroundColor = '#338Af3'
  BtnGreen.style.backgroundColor = '#047C3F'
}

BtnBlue.onclick = () => {
  body.classList.remove('yellow')
  body.classList.add('blue')
  body.classList.remove('green')
  BtnYellow.style.backgroundColor = '#F7DD43'
  BtnBlue.style.backgroundColor = '#296ab9'
  BtnGreen.style.backgroundColor = '#047C3F'
}

BtnGreen.onclick = () => {
  body.classList.remove('yellow')
  body.classList.remove('blue')
  body.classList.add('green')
  BtnYellow.style.backgroundColor = '#F7DD43'
  BtnBlue.style.backgroundColor = '#338Af3'
  BtnGreen.style.backgroundColor = '#04562d'
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'Quinta', createGame('brazil', '16:00', 'serbia')) +
  createCard(
    '28/11',
    'Segunda',
    createGame('switzerland', '13:00', 'brazil') +
      createGame('portugal', '13:00', 'uruguay') +
      createGame('portugal', '13:00', 'uruguay') +
      createGame('portugal', '13:00', 'uruguay')
  ) +
  createCard('02/12', 'Sexta', createGame('brazil', '16:00', 'cameroon'))
