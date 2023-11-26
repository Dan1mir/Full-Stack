import { createItem } from "./components/item.js"
import { getAll, getOne, create, deleteItem, update } from "./requests.js"

export async function createPopup(selling, listItem){

    let popup = document.createElement('div')
    popup.classList.add('popup')

    let popupContent = document.createElement('div')
    popupContent.classList.add('popup-content')

    let topSection = document.createElement('div')
    topSection.classList.add('top-section')

    let imageDiv = document.createElement('div')
    imageDiv.classList.add('image-div')

    let sellingItem = await getOne(selling.id)

    let popupImg = document.createElement('img')
    popupImg.src = sellingItem.image
    popupImg.alt = sellingItem.name
    popupImg.classList.add('card-img')
    imageDiv.appendChild(popupImg)

    let rightSection = document.createElement('div')
    rightSection.classList.add('right-section')

    let h2 = document.createElement('h2')
    h2.classList.add('popup-text')
    h2.textContent = sellingItem.name
    rightSection.appendChild(h2)

    let p1 = document.createElement('p')
    p1.classList.add('popup-text')
    p1.textContent = sellingItem.type
    rightSection.appendChild(p1)

    let p2 = document.createElement('p')
    p2.classList.add('popup-text')
    p2.textContent = sellingItem.short_description
    rightSection.appendChild(p2)

    let btnGroupTop = document.createElement('div')
    btnGroupTop.classList.add('btn-group')
    btnGroupTop.classList.add('btn-add')

    let Edit = document.createElement('button')
    let img = document.createElement('img')
    img.classList.add('pupa')
    
    img.src = 'img/zalupa.png'
    img.classList.add('imageClass')
    
    Edit.classList.add('btn')
    Edit.appendChild(img)
    
    btnGroupTop.appendChild(Edit);

    topSection.appendChild(imageDiv)
    topSection.appendChild(rightSection)

    topSection.appendChild(btnGroupTop)

    let p3 = document.createElement('p')
    p3.classList.add('popup-text')
    p3.textContent = sellingItem.full_description

    let p4 = document.createElement('p')
    p4.classList.add('popup-text')
    p4.textContent = sellingItem.price
    let span = document.createElement('span')
    span.textContent = "руб"
    p4.appendChild(span)

    let btnGroup = document.createElement('div')
    btnGroup.classList.add('btn-group')
    btnGroup.classList.add('btn-add-group')

    let ToCart = document.createElement('button')
    ToCart.classList.add('btn')
    ToCart.classList.add('popup-btn')
    ToCart.textContent = "В корзину"
    btnGroup.appendChild(ToCart)

    let Exit = document.createElement('button')
    Exit.classList.add('btn')
    Exit.classList.add('popup-btn')
    Exit.textContent = "Выход"
    btnGroup.appendChild(Exit)

    popupContent.appendChild(topSection)
    popupContent.appendChild(p3)
    popupContent.appendChild(p4)
    popupContent.appendChild(btnGroup)

    popup.appendChild(popupContent)

    const list = document.getElementById('item-list')


    Exit.addEventListener('click', function(){
        popup.remove()
    })

    Exit.style.transition = 'background-color 0.2s ease'
    Exit.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    Exit.onmouseout = function() {
        this.style.backgroundColor = ''
    }

    ToCart.addEventListener('click', function(){
        if(confirm("Добавить в корзину?")){
            deleteItem(selling.id)
            popup.remove()
            listItem.item.remove()
        }else{
            popup.remove()
        }
    })

    ToCart.style.transition = 'background-color 0.2s ease'
    ToCart.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    ToCart.onmouseout = function() {
        this.style.backgroundColor = ''
    }

    let inputDiv = document.createElement('div')
    inputDiv.classList.add('input-div')
    inputDiv.style.display = 'none'

    let inputImage = document.createElement('input')
    inputImage.type = 'text'
    inputImage.classList.add('search-field')
    inputImage.classList.add('input-input')
    inputImage.placeholder = "Ссылка на изображение"
    inputDiv.appendChild(inputImage)

    let inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.classList.add('search-field')
    inputName.classList.add('input-input')
    inputName.placeholder = "Название товара"
    inputDiv.appendChild(inputName)

    let inputType = document.createElement('input')
    inputType.type = 'text'
    inputType.classList.add('search-field')
    inputType.classList.add('input-input')
    inputType.placeholder = "Тип товара"
    inputDiv.appendChild(inputType)

    let inputSDesc = document.createElement('input')
    inputSDesc.type = 'text'
    inputSDesc.classList.add('search-field')
    inputSDesc.classList.add('input-input')
    inputSDesc.placeholder = "Короткое описание товара"
    inputDiv.appendChild(inputSDesc)

    let inputFDesc = document.createElement('input')
    inputFDesc.type = 'text'
    inputFDesc.classList.add('search-field')
    inputFDesc.classList.add('input-input')
    inputFDesc.placeholder = "Полное описание товара"
    inputDiv.appendChild(inputFDesc)

    let inputPrice = document.createElement('input')
    inputPrice.type = 'text'
    inputPrice.classList.add('search-field')
    inputPrice.classList.add('input-input')
    inputPrice.placeholder = "Цена товара"
    inputDiv.appendChild(inputPrice)
    

    let saveAllBtn = document.createElement('button')
    saveAllBtn.textContent = 'Сохранить'
    saveAllBtn.classList.add('btn')
    inputDiv.appendChild(saveAllBtn)

    popupContent.appendChild(inputDiv)

    Edit.addEventListener('click', function() {
        inputDiv.style.transform = 'translateX(0)'
        inputDiv.style.display = 'block'

        inputImage.value = selling.image
        inputName.value = selling.name
        inputType.value = selling.type
        inputSDesc.value = selling.short_description
        inputFDesc.value = selling.full_description
        inputPrice.value = selling.price
    });

    Edit.style.transition = 'background-color 0.2s ease'
    Edit.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    Edit.onmouseout = function() {
        this.style.backgroundColor = ''
    }
    async function Save(){
        await update({
            name: inputName.value,
            type: inputType.value,
            short_description: inputSDesc.value,
            full_description: inputFDesc.value,
            price: inputPrice.value,
            image: inputImage.value,
            id: selling.id
        })
        listItem.item.remove()
        popup.remove()
        await generateElement()
    }
    saveAllBtn.addEventListener('click', function() {
        Save()
    })

    async function generateElement(){
        const tosell = await getOne(selling.id)

        let listItem = createItem(tosell.name, tosell.type, tosell.short_description, tosell.price, tosell.image)
        listItem.btnAddToCart.addEventListener('click', function(){
            if(confirm("Добавить в корзину?")){
                deleteItem(selling.id)
                listItem.item.remove()
            }
        })
        listItem.btnDetail.addEventListener('click', function(){
            createPopup(selling, listItem)
        })
        list.append(listItem.item)
    }

    saveAllBtn.style.transition = 'background-color 0.2s ease'
    saveAllBtn.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    saveAllBtn.onmouseout = function() {
        this.style.backgroundColor = ''
    }
    
    document.body.appendChild(popup);
}


