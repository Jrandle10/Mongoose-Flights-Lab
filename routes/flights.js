import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET localhost:3000/flights/:id grabs the flights in the database by the id
router.get('/:id', flightsCtrl.show)
// GET localhost:3000/flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit)
// POST localhost:3000/flights
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)
// DELETE localhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)
// PUT localhost:3000/flights/:index
router.put('/:id', flightsCtrl.update)

export {
  router
}
