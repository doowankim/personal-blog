const koa = require('koa');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = new koa();
const port = process.env.PORT || 4000;

const postRoutes = require('./routes/api/posts');

app.use(postRoutes.routes());
app.use(postRoutes.allowedMethods());

// Connected Mongo Database
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

app.listen(port, console.log(`Server running on port: ${port}`));
