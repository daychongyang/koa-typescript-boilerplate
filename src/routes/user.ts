import Router from 'koa-router'
import User from '../controllers/user'

const router = new Router()

router.get('/', User.query)

router.get('/:id', User.query)

router.post('/', User.create)

router.patch('/:id', User.query).delete('/:id', User.query)

export default router
