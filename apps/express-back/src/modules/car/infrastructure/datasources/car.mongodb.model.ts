
import mongoose from 'mongoose'
import { CarEntity } from '@c18-04-m-node-react/api-modules'

const carSchema = new mongoose.Schema<CarEntity>({
  year: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  }
})

export const CarModel = mongoose.model<CarEntity>('car', carSchema)
