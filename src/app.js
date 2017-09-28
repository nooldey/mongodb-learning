/*
 * @Author: nooldey 
 * @Date: 2017-09-28 14:30:31 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-09-28 14:38:40
 * @Description: Mongodb usage demo in NODEjs
 */

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url).catch(err => {
    throw err
}).then(db => {
    /* 新建数据表 */
    /* db.createCollection('members').then(res => {
        console.log('created Members Collection!')
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 插入单条数据 */
    /* const newObj = {
        name: 'nooldey1',
        cost: 1024
    }
    db.collection('members').insertOne(newObj).then(res => {
        console.log('inserted one Document')
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 插入多条数据 */
    /* const newObjs = [{
            // _id: 158,  //指定_id则按照给定的id进行插入数据，默认mongodb会为每条信息新建一个id.
            name: 'josh',
            cost: 2048
        },
        {
            name: 'linus',
            cost: 512
        }
    ]
    db.collection('members').insertMany(newObjs).then(res => {
        console.log(`Success inserted ${res.insertedCount} documents`)
        console.log(res)
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 搜索指定信息 findOne()*/
    /* db.collection('members').findOne({cost: 2048}).then(res => {
        console.log(res.name)
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 搜索多个信息 find().toArray()*/
    /* db.collection('members').find({}).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 带搜索条件及返回结果字段定义的搜索 find(条件，返回参数Boolean定义true则返回false则不返回字段) */
    /* db.collection('members').find({name: 'josh'},{cost: true,name: true, _id: false}).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 根据查询参数进行搜索 */
    /* const query = { cost: 1024 }
    db.collection('members').find(query).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 用正则表达式进行搜索匹配 */
    /* const query = { name: /^n/ }
    db.collection('members').find(query).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 对搜索结果进行排序,1表示升序，-1表示降序 */
    /* const mysort = { cost: -1 }
    db.collection('members').find().sort(mysort).toArray().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */

    /* 删除符合条件的一个数据 */
    /* const query = { name: 'nooldey' }
    db.collection('members').deleteOne(query).then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */
    /* 删除符合条件的多个数据 */
    /* const query = { name: /^nooldey/ }
    db.collection('members').deleteMany(query).then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        throw err
    }) */
    
})