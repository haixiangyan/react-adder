const connection = require("../db");

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = 'select * from record'

    connection.query(sql, (error, results) => {
        if (error) console.error(error)

        res.header('Access-Control-Allow-Origin', '*')
        res.json({recordList: results, message: '成功获取'})
    })
});

router.post('/', (req, res) => {
    const newResult = {
        ...req.body,
        createdAt: new Date()
    }

    const sql = 'insert into record set ?'

    connection.query(sql, newResult, (error) => {
        if (error) console.log(error)

        connection.commit(err => {
            if (err) connection.rollback(() => {
                throw err
            })

            console.log('成功插入');
        })

        res.header('Access-Control-Allow-Origin', '*')
        res.json({message: '成功添加'})
    })

})

module.exports = router;
