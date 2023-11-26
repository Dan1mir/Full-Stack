import { createItem } from "./components/item.js"
import { createPopup } from "./popup.js"
import { getAll, getOne, create, deleteItem, update } from "./requests.js"

(function(){
    class Item{
        constructor(name, type, short_description, price, image){
            this.name = name
            this.type = type
            this.short_description = short_description
            this.price = price
            this.image = image
        }
        newWheel(id, name, type, short_description, price, image){
            this.id = id
            this.name = name
            this.type = type
            this.short_description = short_description
            this.price = price
            this.image = image
        }
    }
    const list = document.getElementById('item-list')

    async function generateElements(){
        const tosell = await getAll()
        for(let selling of tosell){
            let listItem = createItem(selling.name, selling.type, selling.short_description, selling.price, selling.image)
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
    }

    document.addEventListener('DOMContentLoaded', function(){
        generateElements()
    })
})()
