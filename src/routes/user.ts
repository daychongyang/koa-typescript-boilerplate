import Router from 'koa-router'
import User from '../controllers/user'

const router = new Router({ prefix: 'users' })

router.get('/', User.query)

router.get('/:id', User.query)

router.post('/', User.query)

router.patch('/:id', User.query)

router.delete('/:id', User.query)

export default router
