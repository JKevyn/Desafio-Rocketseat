const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cursoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://app.rocketseat.com.br/${cursoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('active')
    modal.querySelector('.maximize-modal').style.visibility = 'visible'
    modal.querySelector('.minimize-modal').style.visibility = 'hidden'
    modalOverlay.querySelector('iframe').src = ''
})


document.querySelector('.maximize-modal').addEventListener('click', function(){
    modal.classList.add('active')
    modal.querySelector('.maximize-modal').style.visibility = 'hidden'
    modal.querySelector('.minimize-modal').style.visibility = 'visible'
})


document.querySelector('.minimize-modal').addEventListener('click', function(){
    modal.classList.remove('active')
    modal.querySelector('.maximize-modal').style.visibility = 'visible'
    modal.querySelector('.minimize-modal').style.visibility = 'hidden'
})
