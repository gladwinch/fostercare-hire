function Snackbar(message, duration = 3000) {
    
    const snackbar = document.createElement('div')
    snackbar.className = 'snackbar'
    snackbar.innerHTML = message
    document.body.appendChild(snackbar)

    setTimeout(() => {
        snackbar.classList.add('show')
    }, 0)

    setTimeout(() => {
        snackbar.classList.remove('show')
        snackbar.addEventListener('transitionend', () => {
            document.body.removeChild(snackbar)
        })
    }, duration)
}

export default Snackbar