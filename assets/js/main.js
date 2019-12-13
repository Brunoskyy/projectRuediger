const btn = document.querySelectorAll('.btn__collapse')

btn.forEach( elem => {
    elem.addEventListener("click", function(e){
        e.preventDefault()
        // const target = `.${elem.parentNode.className}.chapter__paragraph`
        const btn1 = elem.parentNode.children[4]
        const target = elem.parentNode.children[3]
        
        if(btn1.textContent == 'Leia mais') {
            setTimeout(function(){ target.style.opacity = '1' }, 100)
            target.style.display = 'block'
            btn1.textContent = 'Leia menos'
        } else if(btn1.textContent == 'Leia menos') {
            target.style.transition = '1000ms'
            setTimeout(function(){ target.style.opacity = '0' }, 300)
            target.style.display = 'none'
            btn1.textContent = 'Leia mais'
        }
    })
})