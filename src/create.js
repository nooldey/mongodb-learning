/*
 * @Author: nooldey 
 * @Date: 2017-09-28 15:19:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-09-28 17:45:16
 * @Desc: mongodb数据库、数据表、数据文档创建
 */

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url).then(db => {
    /* 创建数据库 */
    /* 当所连接的数据库test不存在时，MDB会自动创建该数据库并连接 */
    /* console.log('Database created!')
    db.close() */

    /* 新建数据表createCollection() */
    /* db.createCollection('members').then(res => {
        console.log('created Members Collection!')
        db.close()
    }).catch(err => {
        console.log(err)
    }) */
    /* db.createCollection('posts').then(res => {
        console.log('created Members Collection!')
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 插入单条数据insertOne() */
    /* const newObj = {
        name: 'nooldey1',
        cost: 1024
    }
    db.collection('members').insertOne(newObj).then(res => {
        console.log('inserted one Document')
        db.close()
    }).catch(err => {
        console.log(err)
    }) */
    
    /* 插入多条数据insertMany() */
    const newObjs = [{
            // _id: 158,  //指定_id则按照给定的id进行插入数据;不指定_id,mongodb会默认为每条信息新建一个id.
            name: 'josh',
            cost: 2048
        },
        {
            name: 'nooldey2',
            cost: 512
        },
        {
            name: 'nooldey3',
            cost: 512
        },
        {
            name: 'nooldey4',
            cost: 512
        },
        {
            name: 'nooldey5',
            cost: 512
        }
    ]
    db.collection('members').insertMany(newObjs).then(res => {
        console.log(`Success inserted ${res.insertedCount} documents`)
        console.log(res)
        db.close()
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})