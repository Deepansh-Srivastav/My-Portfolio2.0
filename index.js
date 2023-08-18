let navButtons = document.querySelectorAll('.item')

navButtons.forEach((btn) => {

    btn.addEventListener('click', () => {

        navButtons.forEach((btn) => {
            btn.classList.remove('item-active')
        })

        btn.classList.add('item-active')




    })
})

const root = document.documentElement


let main = document.querySelector('.main')

let themeButton = document.querySelector('.theme-container')

let themeBox = document.querySelector('.themes')



themeButton.addEventListener('click', () => {

    main.classList.toggle('blur')
    themeBox.classList.toggle('theme-active')

    // root.style.setProperty('--bg', '#112e42 ');
    // root.style.setProperty('--main-color', '#ededed ');
})



let selectTheme = document.querySelectorAll('.theme-select')

let myImage = document.querySelector('#my-image')

let back2TopButton = document.querySelector('#back-to-top')


function toggleImage(value) {

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
selectTheme[0].addEventListener('click', () => {
    root.style.setProperty('--bg', '#081b29 ');
    root.style.setProperty('--main-color', '#00abf0 ');
    toggleImage(0)

})

// Purple Button
selectTheme[1].addEventListener('click', () => {
    root.style.setProperty('--bg', '#040c18 ');
    root.style.setProperty('--main-color', '#614bc3 ');
    toggleImage(1)
})

// Teal Button
selectTheme[2].addEventListener('click', () => {
    root.style.setProperty('--bg', '#112B3C ');
    root.style.setProperty('--main-color', '#61b093 ');
    toggleImage(2)
})

// Red Button
selectTheme[3].addEventListener('click', () => {
    root.style.setProperty('--bg', '#2C3639 ');
    root.style.setProperty('--main-color', '#DC0000 ');
    toggleImage(3)
})







/* 
===================================================================================
===================================================================================
===================================================================================
===== Adding The Logic of Circular Progress Bars                              =====
===================================================================================
===================================================================================
===================================================================================
*/


let progress = document.querySelectorAll('.progress')

let display = document.querySelectorAll('.skill-percent')


let value = [
    // HTML
    {
        start: 0,
        end: 80
    },

    // CSS
    {
        start: 0,
        end: 70
    },

    // JAVASCRIPT
    {
        start: 0,
        end: 65
    },

    // React JS
    {
        start: 0,
        end: 45
    },

    // Bootstrap
    {
        start: 0,
        end: 80
    },

    // C++
    {
        start: 0,
        end: 40
    },

    // Python
    {
        start: 0,
        end: 40
    },

    // Git
    {
        start: 0,
        end: 80
    },

]

let arr = []

let speed = 50;


 arr[0] = setInterval(() => {
    value[0].start++

    display[0].innerText = `${value[0].start}%`

    progress[0].style.background = `conic-gradient(var(--main-color) ${3.6 * value[0].start}deg , white 0deg)`

    if(value[0].start === value[0].end){
        clearInterval(arr[0])
    }
},speed)


 arr[1] = setInterval(() => {
    value[1].start++

    display[1].innerText = `${value[1].start}%`

    progress[1].style.background = `conic-gradient(var(--main-color) ${3.6 * value[1].start}deg , white 0deg)`

    if(value[1].start === value[1].end){
        clearInterval(arr[1])
    }
},speed)


 arr[2] = setInterval(() => {
    value[2].start++

    display[2].innerText = `${value[2].start}%`

    progress[2].style.background = `conic-gradient(var(--main-color) ${3.6 * value[2].start}deg , white 0deg)`

    if(value[2].start === value[2].end){
        clearInterval(arr[2])
    }
},speed)


 arr[3] = setInterval(() => {
    value[3].start++

    display[3].innerText = `${value[3].start}%`

    progress[3].style.background = `conic-gradient(var(--main-color) ${3.6 * value[3].start}deg , white 0deg)`

    if(value[3].start === value[3].end){
        clearInterval(arr[3])
    }
},speed)


 arr[4] = setInterval(() => {
    value[4].start++

    display[4].innerText = `${value[4].start}%`

    progress[4].style.background = `conic-gradient(var(--main-color) ${3.6 * value[4].start}deg , white 0deg)`

    if(value[4].start === value[4].end){
        clearInterval(arr[4])
    }
},speed)


 arr[5] = setInterval(() => {
    value[5].start++

    display[5].innerText = `${value[5].start}%`

    progress[5].style.background = `conic-gradient(var(--main-color) ${3.6 * value[5].start}deg , white 0deg)`

    if(value[5].start === value[5].end){
        clearInterval(arr[5])
    }
},speed)


 arr[6] = setInterval(() => {
    value[6].start++

    display[6].innerText = `${value[6].start}%`

    progress[6].style.background = `conic-gradient(var(--main-color) ${3.6 * value[6].start}deg , white 0deg)`

    if(value[6].start === value[6].end){
        clearInterval(arr[6])
    }
},speed)


 arr[7] = setInterval(() => {
    value[7].start++

    display[7].innerText = `${value[7].start}%`

    progress[7].style.background = `conic-gradient(var(--main-color) ${3.6 * value[7].start}deg , white 0deg)`

    if(value[7].start === value[7].end){
        clearInterval(arr[7])
    }
},speed)

