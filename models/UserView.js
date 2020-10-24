const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserViewSchema = new Schema(
  {
    UserId: {
      type: String,
      required: true
    },
    ViewDate: {
      type: Date,
      required: true,
      default: new Date()
    },
    ProductId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at', updatedAt: 'updated_at'
    }
  }
);

const UserViewModal = mongoose.model('UserView', UserViewSchema);
module.exports = UserViewModal;