// Ajustar entidad a MODELO DE USUARIO.
import mongoose from 'mongoose';
import {
  ContactInfo,
  LawyerCategoryTypes,
  AddressEntity,
  UserEntity,
} from '@c18-04-m-node-react/api-modules';

const AddresSchema = new mongoose.Schema<AddressEntity>({
  city: String,
  street: String,
  zipCode: Number,
});

const LawyerCategoryTypesSchema = new mongoose.Schema<LawyerCategoryTypes>({
  id: {
    type: Number,
    required: true,
  },
});

const ContactInfoSchema = new mongoose.Schema<ContactInfo>({
  movil: String,
  phone: String,
});

const UserSchema = new mongoose.Schema<UserEntity>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  registrationId: {
    type: String,
    required: true,
  },
  address: {
    type: AddresSchema,
    required: false,
  },
  userName: {
    type: String,
    required: true,
  },
  userRole: {
    type: Number,
    required: false,
    default: 2,
  },
  birth: {
    type: Date,
    required: true,
  },
  contactInfo: {
    type: ContactInfoSchema,
    required: false,
  },
  lawyerTypes: {
    type: [LawyerCategoryTypesSchema],
    required: false,
  },
});

export const UserModel = mongoose.model<UserEntity>('user', UserSchema);
