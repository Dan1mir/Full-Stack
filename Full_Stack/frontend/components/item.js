export function createItem(name, type, short_description, price, img){
    let item = document.createElement('div')
    
    let imageDiv = document.createElement('div')
    let image = document.createElement('img')

    let divBody = document.createElement('div')

    let h4 = document.createElement('h4')
    let pType = document.createElement('p')
    let pDescription = document.createElement('p')
    let pPrice = document.createElement('p')
    let pCurrency = document.createElement('p')

    let buttongroup = document.createElement('div')

    let btnDetail = document.createElement('button')
    let btnAddToCart = document.createElement('button')

    item.classList.add('card')
    item.classList.add('cells')
    item.style.width = '18rem'
    item.style.float = 'left'

    item.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    item.style.transition = '0.3s'

    item.onmouseover = function() {
        this.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.6)'
    }

    item.onmouseout = function() {
        this.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    }

    imageDiv.classList.add('image-div')
    image.classList.add('card-img')
    image.src = img
    image.onerror = function() {
        this.alt = name
    }
    imageDiv.appendChild(image)

    divBody.classList.add('card-body')
    
    h4.classList.add('product-name')
    h4.innerText = name

    pType.classList.add('desc-gray-text')
    pType.innerText = type

    pDescription.classList.add('desc-gray-text')
    pDescription.innerText = short_description

    pPrice.classList.add('gray-text')
    pPrice.innerText = price

    pCurrency.classList.add('gray-text')
    pCurrency.innerText = 'руб'

    buttongroup.classList.add('btn-group')
    btnDetail.classList.add('btn')
    btnDetail.textContent = "Подробнее"
    btnDetail.style.transition = 'background-color 0.2s ease'

    btnAddToCart.classList.add('btn')
    btnAddToCart.textContent = "В корзину"
    btnAddToCart.style.transition = 'background-color 0.2s ease'

    btnDetail.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    btnDetail.onmouseout = function() {
        this.style.backgroundColor = ''
    }

    btnAddToCart.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    btnAddToCart.onmouseout = function() {
        this.style.backgroundColor = ''
    }

    buttongroup.append(btnDetail, btnAddToCart)
    divBody.append(h4, pType, pDescription, pPrice, pCurrency, buttongroup)
    item.append(imageDiv, divBody)

    return {item, btnDetail, btnAddToCart}
}

