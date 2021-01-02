const Router = require('koa-router');
const router = new Router();
const gravatar = require('gravatar');
const postModel = require('../../model/posts');

// @route GET localhost:3200/posts
// @desc posts route
// @access Private
router.get('/posts', (response, request) => {
	response.body = {
		message: 'success',
	};
});

router.post('/posts', (response, request) => {
	// const avatar = gravatar.url(request.body, {
	// 	s: '200',
	// 	r: 'pg',
	// 	d: 'mm',
	// });
	// const newPost = new postModel({
	// 	title: request.body.title,
	// 	description: request.body.description,
	// 	backgroundImage: request.body.backgroundImage,
	// 	attachedFile: request.body.attachedFile,
	// });
	// newPost
	// 	.save()
	// 	.then(post => request.toJSON(post))
	// 	.catch(err => request.toJSON(err));
});

module.exports = router;
