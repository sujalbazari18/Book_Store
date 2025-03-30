const mongoose=require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: { 
      type: String, 
      required: true 
    },
    category: {
      type: String, 
      required: true 
    },
    rating: { 
      type: Number, 
      min: 0, 
      max: 5 
    },
    description: {
       type: String 
    }
  });

module.exeports=mongoose.model('Book', bookSchema);
  