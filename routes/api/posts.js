const Router = require('koa-router');
const router = new Router();

// @route GET localhost:3200/posts
// @desc posts route
// @access Private
router.get('/posts', (req, res) => {
	req.body = {
		message: 'success',
	};
});

module.exports = router;
