import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
}, {
  timestamps: true
})

// Compile the schema into a model and export it

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}