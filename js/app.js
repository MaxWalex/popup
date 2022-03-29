window.addEventListener('DOMContentLoaded', () => {

    const popupBtn = document.querySelector('.popup_btn'),
        popup = document.querySelector('.popup')

    const openPopup = (e) =>{
        e.preventDefault()
        popup.classList.add('open')
    }

    const closePopup = (event) => {
        if (event.target === popup) {
            popup.classList.remove('open')
        } else if (event.target.classList.contains('popup_close')) {
            popup.classList.remove('open')
        }
    }

    popup.addEventListener('click', event => closePopup(event))
    popupBtn.addEventListener('click', (e) => openPopup(e))

    
    
})