const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url).then(db => {
    /* 更新符合条件的首个数据 updateOne() */
    /* 注意：newVal 应包含数据的所有自定义变量，否则未传入的变量也会引起数据表单元的变化，及未传入的变量会被置空 */
    /* const query = { name: 'nooldey' }
    const newVal = { cost: 1024 }
    db.collection('members').updateOne(query,newVal).then(res => {
        console.log(res)
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 更新符合条件的首个数据 使用$set声明以更新指定字段而不是所有字段，与上一条区分 */
    /* 虽然newVal中未指明其他字段，但只会更新cost字段而不影响其他字段 */
    /* const query = { name: 'nooldey' }
    const newVal = { $set: {cost: 2048} }
    db.collection('members').updateOne(query,newVal).then(res => {
        console.log(res.result)
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 更新符合条件的所有数据 updateMany() 注意加上$set */
    /* const query = {}
    const newVal = { $set: { cost: 1024 } }
    db.collection('members').updateMany(query,newVal).then(res => {
        console.log(res.result)
        db.close()
    }).catch(err => {
        console.log(err)
    }) */
}).catch(err => {
    console.log(err)
})