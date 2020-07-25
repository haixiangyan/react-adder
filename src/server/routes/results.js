const express = require('express');
const router = express.Router();

let resultList = []

router.get('/', (req, res, next) => {
    res.json({resultList, message: '成功获取'})

    next()
});

router.post('/', (req, res, next) => {
    const id = resultList.length
    const createdAt = new Date().getTime()

    resultList = [
        ...resultList,
        {
            id,
            createdAt,
            ...req.body
        }
    ].sort((r1, r2) => r2.timestamp - r1.timestamp)

    res.json({message: '成功添加'})

    next()
})

module.exports = router;
