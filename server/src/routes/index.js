import Router from "@koa/router"
import objectRoutes from '#components/object/object-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })

API_V1_ROUTER.use('/objects', objectRoutes.routes(), objectRoutes.allowedMethods())

export { API_V1_ROUTER }