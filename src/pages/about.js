export default function aboutPage() {
    //create box that contains the contents of about page
    const aboutBox = document.createElement('div')
    aboutBox.classList.add('about-box')

    //create container and contents of About Us section
    const aboutUsContainer = document.createElement('div')
    const aboutUs = document.createElement('h2')
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')

    aboutUs.textContent = "About Us"
    para1.textContent = "A bit of history. The founder Francesco Simali grew up in a small town in Spain.Spanish food was great, but pizza seduced Francesco away from typical Spanish Cuisine.After moving to New York in his teens, Francesco was given the opportunity to work on his skills. In 2007 at the age of 32, he opened this restaurant."
    para2.textContent = "The food we make is filled with love and passion from out team. The team works hard to make the best pizza in New York. Unlike many other pizza restaurants, we offer dine in with some of the most comfortable furniture. We are proud of the design of our restaurantand we make our guests as comfortable as possible."

    aboutUsContainer.appendChild(aboutUs)
    aboutUsContainer.appendChild(para1)
    aboutUsContainer.appendChild(para2)

    //create container and contents of Contact section
    const contactUsContainer = document.createElement('div')
    const contact = document.createElement('h2')
    const smallPara = document.createElement('p')
    const number = document.createElement('h3')
    const email = document.createElement('h3')
    const address = document.createElement('h3')

    contact.textContent = "Get In Touch"
    smallPara.textContent = "Contact us for delivery, reservations or any general info."
    number.textContent = "(123) 456-7890"
    email.textContent = "lapizzeria@lapizzeria.com"
    address.textContent = "732 West Road, New York"

    contactUsContainer.appendChild(contact)
    contactUsContainer.appendChild(smallPara)
    contactUsContainer.appendChild(number)
    contactUsContainer.appendChild(email)
    contactUsContainer.appendChild(address)

    //Append the two containers to the main container and add to DOM
    const content = document.querySelector('#content')
    aboutBox.appendChild(aboutUsContainer)
    aboutBox.appendChild(contactUsContainer)
    content.appendChild(aboutBox)
}