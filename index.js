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

const root = document.documentElement


let  main = document.querySelector('.main')

let themeButton = document.querySelector('.theme-container')

let themeBox = document.querySelector('.themes')



themeButton.addEventListener('click',()=>{

    main.classList.toggle('blur')
    themeBox.classList.toggle('theme-active')
  
    // root.style.setProperty('--bg', '#112e42 ');
    // root.style.setProperty('--main-color', '#ededed ');
})



let selectTheme = document.querySelectorAll('.theme-select')

let myImage = document.querySelector('#my-image')

let back2TopButton = document.querySelector('#back-to-top')


function toggleImage(value){

    switch (value) {
        case 0:
            myImage.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/My%20Images/me-blue.png'
            back2TopButton.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/Back%20to%20top%20icons/blue-arrow.png'
            break;
    
        case 1:
            myImage.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/My%20Images/me-purple.png'
            back2TopButton.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/Back%20to%20top%20icons/purple-arrow.png'
            break;
    
        case 2:
            myImage.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/My%20Images/me-green.png'
            back2TopButton.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/Back%20to%20top%20icons/green-arrow.png'
            break;
    
        case 3:
            myImage.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/My%20Images/me-red.png'
            back2TopButton.src = 'https://deepansh-srivastav.github.io/My-Portfolio2.0/Icons/Back%20to%20top%20icons/red-arrow.png'
            break;
    


        default:
            break;
    }

}




// Blue Button
selectTheme[0].addEventListener('click',()=>{
    root.style.setProperty('--bg', '#081b29 ');
    root.style.setProperty('--main-color', '#00abf0 ');
    toggleImage(0)

})

// Purple Button
selectTheme[1].addEventListener('click',()=>{
    root.style.setProperty('--bg', '#040c18 ');
    root.style.setProperty('--main-color', '#614bc3 ');
    toggleImage(1)
})

// Teal Button
selectTheme[2].addEventListener('click',()=>{
    root.style.setProperty('--bg', '#112B3C ');
    root.style.setProperty('--main-color', '#61b093 ');
    toggleImage(2)
})

// Red Button
selectTheme[3].addEventListener('click',()=>{
    root.style.setProperty('--bg', '#2C3639 ');
    root.style.setProperty('--main-color', '#DC0000 ');
    toggleImage(3)
})