import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    pickup: {
      type: String,
      required: true,
      trim: true
    },
    drop: {
      type: String,
      trim: true,
      default: ''
    },
    date: {
      type: Date,
      required: true
    },
    serviceType: {
      type: String,
      required: true,
      trim: true
    },
    goodsType: {
      type: String,
      trim: true,
      default: ''
    },
    message: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted', 'closed'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Lead', leadSchema);

