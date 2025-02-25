import express from 'express';
import * as dotenv from 'dotenv';
import  mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
const app=express();
app.use(express.json());
const port=process.env.PORT;


app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('MongoDB Connected'))
  .catch(err=>console.log(err));



app.listen(port,()=>console.log(`Server started on the port ${port}`));

