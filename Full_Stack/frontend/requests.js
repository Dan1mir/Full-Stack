export async function create(newItem){
    await fetch('http://localhost:8080/wheel',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: newItem.name,
            type: newItem.type,
            short_description: newItem.short_description,
            full_description: newItem.full_description,
            price: newItem.price,
            image: newItem.image
        })
    })
}
export async function getAll(){
    const response = await fetch('http://localhost:8080/wheel',{
        method: 'GET'
    })
    const result = await response.json()
    return result
}
export async function getOne(id){
    const response = await fetch('http://localhost:8080/wheel/' + id,{
        method: 'GET'
    })
    const result = await response.json()
    console.log(result)
    return result
}

export async function update(item){
    await fetch('http://localhost:8080/wheel', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: item.name,
            type: item.type,
            short_description: item.short_description,
            full_description: item.full_description,
            price: item.price,
            image: item.image,
            id: item.id
        })
    })
}

export async function deleteItem(id){
    await fetch('http://localhost:8080/wheel/' + id, {
        method: 'DELETE'
    })
}