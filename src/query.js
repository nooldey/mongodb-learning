/*
 * @Author: nooldey 
 * @Date: 2017-09-28 15:20:03 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-09-29 15:44:49
 * @DESC： mongodb 数据查询
 */

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url).then(db => {
    /* 搜索符合条件的第一条信息 findOne()*/
    /* db.collection('members').findOne({cost: 2048}).then(res => {
        console.log(res)
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 搜索符合条件的所有信息 find().toArray()*/
    /* db.collection('members').find({}).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 将符合条件的结果按照要求只返回指定的字段.*/
    /* find(条件，指定字段--true返回false不返回).toArray()*/
    /* db.collection('members').find({name: 'josh'},{cost: true,name: true, _id: false}).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 根据查询参数进行搜索 */
    /* const query = { cost: 1024 }
    db.collection('members').find(query).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 查询条件以正则表达式编写，返回符合条件的所有数据 */
    /* const query = { name: /^n/ }
    db.collection('members').find(query).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 对搜索结果进行排序sort({}),1表示升序，-1表示降序 */
    /* const mysort = { cost: -1 }
    db.collection('members').find().sort(mysort).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 限制返回的结果总个数 limit(Number) */
    /* db.collection('members').find().limit(5).toArray().then(res => {
        console.log(res)
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 跳过搜索结果的前N条 skip(n) 性能一般，不建议使用 */
    /* db.collection('members').find().skip(4).limit(3).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    db.collection('members').find({cost:{"$gte":513,"$lte":2048}}).toArray().then(res => {
        console.log(JSON.stringify(res))
    }).catch(err => {
        console.log(err)
    })

}).catch(err => {
    console.log(err)
})