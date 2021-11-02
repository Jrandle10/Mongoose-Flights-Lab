import { Flight } from '../models/flight.js'

function newFlight (req, res) {
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.render('flights/new')
    console.log(flight)
    // redirect to all flights
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function(error, flights) {
    res.render("flights/index", {
      flights,
      error,

    })
  })
}




export {
  newFlight as new,
  create,
  index
}