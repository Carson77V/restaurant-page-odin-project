export default function menuPage() {
    //create the box that contains the menu items
    const menuBox = document.createElement('div')
    menuBox.classList.add('menu-box')

    //append the created node to the DOM
    menuBox.appendChild(createMenuCard('Pepperoni Pizza',
     '$17', 
     'Savor the bold flavors of our classic pepperoni pizza, with a crispy crust, rich tomato sauce, and melted mozzarella cheese, topped with premium pepperoni slices.')
    )

    menuBox.appendChild(createMenuCard('Hawaiian Pizza',
    '$20',
    'Experience a taste of paradise with our Hawaiian pizza, featuring a crispy crust, tomato sauce, melted mozzarella cheese and a tropical medley of pineapple and ham.')
    )

    menuBox.appendChild(createMenuCard('Margherita Pizza',
    '$20',
    'A true classic, our Margherita pizza is a celebration of simplicity, featuring a wood-fired crust, fresh tomato sauce, mozzarella cheese, basil leaves, and a drizzle of olive oil.')
    )

    menuBox.appendChild(createMenuCard('Meat Lovers Pizza',
    '$23',
    "Satisfy your carnivorous cravings with our meat lover's pizza, featuring a crispy crust, rich tomato sauce, melted mozzarella cheese, and a generous topping of pepperoni, sausage, bacon and ham.")
    )

    menuBox.appendChild(createMenuCard('Vegetarian Pizza',
    '$23',
    "Our vegetarian pizza is a symphony of flavors, with a crispy crust, rich tomato sauce, melted mozzarella cheese and a medley of fresh vegetables, including mushrooms, bell peppers, onions, and olives.")
    )

    menuBox.appendChild(createMenuCard('Cheese Pizza',
    '$15',
    "Our gourmet cheese pizza boasts a delicate crust, fresh tomato sauce, and premium mozzarella cheese melted to perfection.")
    )

    //add the elements to the DOM
    const content = document.querySelector('#content')
    content.appendChild(menuBox)


}

//this function is used to create the dom elements to fill a menu card
//appends the DOM elements to the menu card in the function
function createMenuCard(title, price, text) {
    //create the div to contain the contents
    //this div is a menu-card
    const menuCard = document.createElement('div')
    menuCard.classList.add('menu-card')

    //create the header for each menu card
    const header = document.createElement('h2')
    header.textContent = title

    //create the description of each menu item
    const info = document.createElement('p')
    info.textContent = text

    //add the price for each menu card
    const cost = document.createElement('p')
    cost.id = "price"
    cost.textContent = price
    
    //append all the text content to the menu card
    menuCard.appendChild(header)
    menuCard.appendChild(info)
    menuCard.appendChild(cost)

    return menuCard
}