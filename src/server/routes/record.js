const connection = require("../db");

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = 'select * from record'

    connection.query(sql, (error, results) => {
        if (error) console.error(error)

        res.json({recordList: results, message: '成功获取'})
    })
});

router.get('/create', (req, res) => {
  const {first, second, result} = req.query
  const newResult = {
    first: Number(first),
    second: Number(second),
    result: Number(result),
    createdAt: new Date()
  }

  const sql = 'insert into record set ?'

  connection.query(sql, newResult, (error) => {
    if (!error) {
      connection.commit(err => {
        if (err) {
          connection.rollback(e => {
            console.error(e)
          })
        } else {
          res.json({message: '成功添加'})
        }
      })
    } else {
      console.log(error)
    }
  })
})

module.exports = router;
