const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://nooldey:nooldey@localhost:27017/test'

MongoClient.connect(url).then(db => {
    /* 新建另一张表，并与members形成关系型 */
    /* db.collection('members').find({}).toArray().then(res => {
        const newObjs = []
        // console.log(JSON.stringify(res))
        res.forEach(m => {
            let o = {
                author_id: m._id,
                title: m.name+m.cost
            }
            newObjs.push(o)
        })
        return newObjs
    }).then(res => {
        // console.log('deal data:',JSON.stringify(res))
        db.collection('posts').insertMany(res).then(result => {
            console.log(`Success inserted ${result.insertedCount} documents`)
            console.log(result)
            db.close()
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    }) */

    /* $lookup 通过关联的信息，获取另一张表中的相关数据，存放到当前表单中 */
    db.collection('posts').aggregate([
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
    })

}).catch(err => {
    console.log(err)
})