import mongoose from 'mongoose';
import { UserListStatusEntity } from '@c18-04-m-node-react/api-modules';

const UserListStatusSchema = new mongoose.Schema<UserListStatusEntity>(
  {
    status: {
      type: Number,
      required: true,
      default: 0,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserListStatusModel = mongoose.model<UserListStatusEntity>(
  'userStatusList',
  UserListStatusSchema
);
