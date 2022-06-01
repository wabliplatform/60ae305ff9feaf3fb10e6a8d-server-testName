
const { ArticleArticleImageSchema } =require('./ArticleArticleImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
Underscoreid:String , 


articleImage:  
ArticleArticleImageSchema
 , 


articledate:Date , 


articletitle:String , 


articletext:String 



})

module.exports = {
  Article : mongoose.model('article', articleSchema),
}

