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

// const root = document.documentElement


let  main = document.querySelector('.main')

let themeButton = document.querySelector('.theme-container')

let themeBox = document.querySelector('.themes')

themeButton.addEventListener('click',()=>{

    main.classList.toggle('blur')
    themeBox.classList.toggle('theme-active')

    
    // root.style.setProperty('--bg', '#112e42 ');
    // root.style.setProperty('--main-color', '#ededed ');
})

