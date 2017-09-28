const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url).then(db => {
    /* 新建另一张表，并与members形成关系型 */
    /* const newObjs = [
        {
            author_id: "59ccbb860295941e1810cdd1",
            title: 'test post1'
        },
        {
            author_id: "59ccc4b5e846181f446a76c2",
            title: 'test post2'
        },
        {
            author_id: "59ccc4b5e846181f446a76c4",
            title: 'test post3'
        },
    ]
    db.collection('posts').insertMany(newObjs).then(res => {
        console.log(`Success inserted ${res.insertedCount} documents`)
        console.log(res)
        db.close()
    }).catch(err => {
        console.log(err)
    }) */

    /* $lookup 通过关联的信息，获取另一张表中的相关数据，存放到当前表单中 */
    /* db.collection('posts').aggregate([
        {
            $lookup: {
                from: 'members',
                localField: 'author_id',
                foreignField: '_id',
                as: 'author_info'
            }
        }
    ], (err,res) => {
        if (err) console.log(err)
        console.log(JSON.stringify(res))
        db.close()
    }) */
/* 这里遇到一个难点：mongodb原生的_id是一个object，而author_id仅仅是string,导致匹配出错，如何能够让_id在获取进行匹配时转为字符串呢？ */

}).catch(err => {
    console.log(err)
})