/*
 * @Author: nooldey 
 * @Date: 2017-09-28 14:30:31 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-09-29 11:27:41
 * @Description: Mongodb 数据、数据表collection、数据库Database删除
 */

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://nooldey:nooldey@localhost:27017/test'

MongoClient.connect(url).then(db => {

    /* 删除符合条件的一个数据deleteOne() */
    /* const query = { name: 'nooldey' }
    db.collection('members').deleteOne(query).then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 删除符合条件的多个数据 deleteMany() */
    /* const query = { name: /^nooldey/ }
    db.collection('members').deleteMany(query).then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 删除数据表 drop()，当返回到的res为true，数据表即被成功删除 */
    /* db.collection('members').drop().then(res => {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* 删除数据表 dropCollection() */
    /* db.dropCollection('posts').then(res =>  {
        console.log(JSON.stringify(res))
        db.close()
    }).catch(err => {
        console.log(err)
    }) */
    
}).catch(err => {
    console.log('db error:', err)
})