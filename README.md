## 删除数据表

当删除mongodb的数据表时，若当前被删数据表为当前数据库中的唯一一张表，则删除了数据表之后，所在的数据库也会被删除。

## 形成两张数据表的关联

Mongodb建议以_id作为主键进行查询、修改、删除、关联操作，因为这个主键极少情况会被影响或修改。
假定我要实现一篇文章和文章对应的评论，而又要保证数据表的独立性（这是NoSQL的优势啊），那么，我至少要建立两张表，一张用来存放纯粹的文章主要内容，一张用来存放评论内容信息。
文章表：posts
评论表：comments

posts的数据格式为：
    {
        _id: ObjectId,
        title: string,
        content: string,
        createOn: date,
        tags: array
    }

comments的格式则应该看起来像这样：
{
    _id: ObjectId,
    post_id: ObjectId, <!-- 对应以上posts的`_id` -->
    comment_author: ObjectId, <!-- 对应另一张表authors的`_id`，这里不再展开 -->
    parent_comment: ObjectId, <!-- 对应另一条数据的`_id`，作为上级评论的指针 -->
    comment_content: string
}

于是，在建立comments表单的文档（document）时，一定要注意引入对应的_id，以保证关联信息的准确，这里的`_id`的类型是Object而不是String，一定要注意。
具体可以参看`join.js`第5行开始的代码块的关联信息设置。