const btn = document.querySelectorAll('.btn__collapse')

btn.forEach( elem => {
    elem.addEventListener("click", function(e){
        e.preventDefault()
        // const target = `.${elem.parentNode.className}.chapter__paragraph`
        const target = elem.parentNode.children[3]
        setTimeout(function(){ target.style.opacity = '1' }, 100)
        target.style.display = 'block'
        const btn1 = elem.parentNode.children[4]
        btn1.style.display = 'none'
    })
})