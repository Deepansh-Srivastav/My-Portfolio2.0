let navButtons = document.querySelectorAll('.item')

navButtons.forEach((btn) => {

    btn.addEventListener('click', () => {

        navButtons.forEach((btn)=>{
            btn.classList.remove('item-active')
        })

        btn.classList.add('item-active')


        setInterval(()=>{
            btn.classList.remove('item-active')
        },1300)

    })
})