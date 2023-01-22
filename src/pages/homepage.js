export default function homepage() {
    //create the div that holds all the main text
    const titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')

    //create the header
    const title = document.createElement('h1')
    title.textContent = "La Pizzeria"

    //create the two paragraphs below
    const para1 = document.createElement('p')
    para1.textContent = "La finnest pizza in the world! Unique flavors only found here!"
    const para2 = document.createElement('p')
    para2.textContent = "We strive for the best food and the best customer service. Chefs from all over the world give us 4.5 stars! Come visit sometime to try out our world famous pizza."

    titleDiv.appendChild(title)
    titleDiv.appendChild(para1)
    titleDiv.appendChild(para2)

    // select content div to append new elements
    const content = document.querySelector('#content')
    content.appendChild(titleDiv)
}