const db = require('../db.js')
class Controller{
    async create(req, res){
        const {name, type, short_description, full_description, price, image} = req.body
        const newWheel = await db.query(`INSERT INTO wheel (name, type, short_description, full_description, price, image) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, type, short_description, full_description, price, image])
        res.json(newWheel.rows[0])
  }
    async getAll(req, res){
        const wheels = await db.query(`SELECT * FROM wheel`)
        console.log(wheels.rows)
        res.json(wheels.rows)
  }
    async getOne(req, res){
        const id = req.params.id
        const wheel = await db.query(`SELECT * FROM wheel where id = $1`, [id])
        res.json(wheel.rows[0])
  }
    async update(req, res){
        const {id, name, type, short_description, full_description, price, image} = req.body
        const updateWheel = await db.query(`UPDATE wheel set name = $1, type = $2, short_description = $3, full_description = $4, price = $5, image = $6 where id = $7 RETURNING *`, [name, type, short_description, full_description, price, image, id])
        res.json(updateWheel.rows[0])
  }
    async deleteItem(req, res){
        const id = req.params.id
        const deleteWheel = await db.query(`DELETE FROM wheel where id = $1`, [id])
        res.json(deleteWheel.rows[0])
  }
}
module.exports = new Controller()