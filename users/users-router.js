import { router } from 'express'

// list out a user's post
router.get('/users/:id/post', (req, res) => {
	users.findById(req.params.id)
	.then(user => {
		if (!user) {
			return res.status(404).json({
				message: "user not found"
			})
		}
		return users.findUserPosts(req.params.id)
	})
	.then(posts => {
		res.json(posts)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json({
			message: "Error getting the user"
		})
	})
})

// get a single post of a user by its ID
router.get("/users/:id/posts/:postID", (req, res) => {
	users.findUserPostById(req.params.id, req.params.postID)
	.then(post => {
		if (!post) {
			res.json(post)
		} else {
			res.status(404).json({
				message: "Post was not found"
			})
		}
	})
	.catch(err => {
		console.log(error)
		res.status(500).json({
			message: "Error getting the user's post"
		})
	})
})



module.exports = router