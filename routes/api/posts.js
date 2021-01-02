const Router = require('koa-router');

const router = new Router();

router.get('/posts', (req, res) => {
	req.body = 'success';
});

module.exports = router;
