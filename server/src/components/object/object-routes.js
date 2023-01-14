import Router from "@koa/router"
import * as objectController from "./object-controller.js"

const objects = new Router()

objects.get('/', objectController.getAll)
objects.get('/:id', objectController.getId)
objects.post('/', objectController.create)
objects.put('/:id', objectController.update)
objects.del('/:id', objectController.del)

objects.get('/pr/:priority', objectController.getPriority)
objects.get('/vi/:visited', objectController.getVisited)

export default objects