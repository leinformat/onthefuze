const modal = document.getElementById('modal');
const opened = document.getElementById('open');
const close = document.getElementById('close')

const openModal = (opend ='false') => {
    opend  === 'false' ? modal.hidden = true: modal.hidden = false
}

opened.addEventListener('click', () =>{
    openModal('true')
})

close.addEventListener('click', () =>{
    openModal('false')
})
