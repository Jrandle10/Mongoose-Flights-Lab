import mongoose from 'mongoose'

const Schema = mongoose.Schema

// ticketSchema this schema will be embedded into to flightSchema to show the seat and price of the ticket in the flights detail (show) page

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: Number
})




const flightSchema = new Schema({
  airline: {
    type: String,
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: Number,
  departs: {
    type: Date,
    min: 2021
  },
  tickets: [ticketSchema],
  destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}]
})


// Compile the schema into a model and export it

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}