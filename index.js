const GIFT_CARDS =[
    {
        img: 'images/card-0.png',
        text: 'eGifter Choice Card',
    },
    {
        img: 'images/card-1.png',
        text: 'AMC Theatres',
        
    },
    {
        img: 'images/card-2.png',
        text: 'American Express  eGift Card',
    },
    {
        img: 'images/card-3.png',
        text: 'Apple Gift Card',
    },
    {
        img: 'images/card-4.png',
        text: "Domino's",
    },
    {
        img: 'images/card-5.png',
        text: "Dunkin'",
    },
    {
        img: 'images/card-6.png',
        text: 'The Home Depot',
    },
    {
        img: 'images/card-7.png',
        text: "Macv's",
    },
    {
        img: 'images/card-8.png',
        text: 'Uber',
    },
    {
        img: 'images/card-9.png',
        text: 'Wayfair',
    },
    {
        img: 'images/card-10.png',
        text: 'adidas',
    },
    {
        img: 'images/card-11.png',
        text: 'Best Buy',
    },
    {
        img: 'images/card-12.png',
        text: "Lowe's",
    },
    {
        img: 'images/card-13.png',
        text: 'Target',
    },
    {
        img: 'images/card-14.png',
        text: ' Vanilla visa eGift Card',
    },
   
    
    
    

    
]
const cardsParent = document.getElementById('cards-parent')
GIFT_CARDS.forEach(card =>{
    
    const cardItem = document.createElement('div')
    cardItem.classList.add('card-item')

    const cardImg = document.createElement('img')
    cardImg.src = card.img
    const cardText = document.createElement('p')
    cardText.textContent= card.text

    cardItem.appendChild(cardImg)
    cardItem.appendChild(cardText)

    cardsParent.appendChild(cardItem)
})

