import Router from 'koa-router'
import User from '../controllers/user'

const router = new Router()

router
  .get('/', User.query)
  .get('/:id', User.query)
  .post('/', User.query)
  .patch('/:id', User.query)
  .delete('/:id', User.query)

export default router
