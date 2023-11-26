import { createItem } from "./components/item.js"
import { getAll, getOne, create, deleteItem, update } from "./requests.js"

(function(){
    class Item{
        constructor(name, type, short_description, full_description, price, image){
            this.name = name
            this.type = type
            this.short_description = short_description
            this.full_description = full_description
            this.price = price
            this.image = image
        }
        newWheel(id, name, type, short_description,  full_description, price, image){
            this.id = id
            this.name = name
            this.type = type
            this.short_description = short_description
            this.full_description = full_description
            this.price = price
            this.image = image
        }
    }


    let btn = document.getElementById('btn')


    let itemImage = document.getElementById('item-img')
    let itemName = document.getElementById('item-name')
    let itemType = document.getElementById('item-type')
    let itemSDescription = document.getElementById('item-sdes')
    let itemFDescription = document.getElementById('item-ldes')
    let itemPrice = document.getElementById('item-price')

    btn.addEventListener('click', function(){
        let item = new Item( itemName.value, itemType.value, itemSDescription.value, itemFDescription.value, itemPrice.value, itemImage.value)
        create(item)
    })

    btn.onmouseover = function() {
        this.style.backgroundColor = '#d5a638'
    }
    btn.onmouseout = function() {
        this.style.backgroundColor = ''
    }
})()