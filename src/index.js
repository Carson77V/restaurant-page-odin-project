import homepage from "./pages/homepage";
import aboutPage from "./pages/about";
import menuPage from "./pages/menu";

//auto load homepage
homepage()

const btns = document.querySelectorAll('button')

//add eventListener to all buttons
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const currentContent = document.querySelector('#content > div')
        //check what content is already loaded by comparing btn id with 
        //content class. If they are different then load the new content
        if (event.target.id != currentContent.classList.value) {
            //remove current content
            currentContent.remove()
            addContent(event.target.id)
        }
    })
})

//adds content to the webpage
function addContent(id) {
    switch(id) {
        case 'title-div': homepage();
        break;
        case 'menu-box': menuPage();
        break;
        case 'about-box': aboutPage();
    }
}