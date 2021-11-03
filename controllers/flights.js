import { Flight } from '../models/flight.js'

function newFlight (req, res) {
  res.render('flights/new', {
    title: 'Add FLIGHT',
  })
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
      error: error,
      flights: flights,
      title: 'All FLIGHTS'

    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (error, flight) {
    res.render('flights/show', {
      title: 'Flight Detail',
      flight: flight,
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(error, flight) {
    res.redirect('/flights')
  })
}


function edit(req, res) {
  
  Flight.findById(req.params.id, function(error, flight) {
    res.render('flights/edit', {
      flight,
      error,
      title: 'Edit Flight'
    })
  })
}

function update(req,res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, function(error, flight) {
    res.redirect(`/flights/${flight._id}`)
  })
}

function createTicket(req, res) {
  console.log(req.body, 'this is it')
  Flight.findById(req.params.id, function(error, flight) {
    flight.tickets.push(req.body)
    console.log(flight)
    flight.save(function(error) {
      res.redirect(`/flights/${flight._id}`)
      
    })
  })
}




export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket
}