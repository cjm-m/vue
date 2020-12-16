const mongoose = require('mongoose')
const feld={
  name: String,
  age: Number,
  //人物标签
  labels:Number
}
//自动添加更新时间创建时间:
let personSchema = new mongoose.Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('User',personSchema)
const router = require('koa-router')()
const User = require('../db/models/user')
router.prefix('/users')

router.get('/add', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
