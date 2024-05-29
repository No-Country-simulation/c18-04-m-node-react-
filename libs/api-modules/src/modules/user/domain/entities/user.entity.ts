import { Address } from 'cluster';
import { ContactInfo } from './contac_info.entity';
import { UserRole } from './user.roles';
import { LawyerCategoryTypes } from './lawyer_category.types';

export class UserEntity {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public userName: string;
  public birth: Date;
  public address: Address;
  public userRole: UserRole;
  public password: string;
  public registrationId: string;
  public contactInfo?: ContactInfo;
  public lawyerTypes?: LawyerCategoryTypes[];
  
  constructor(user: {
    readonly id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    birth: Date;
    address: Address;
    userRole: UserRole;
    password: string;
    registrationId: string;
    contactInfo?: ContactInfo;
    lawyerTypes?: LawyerCategoryTypes[];
  }) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.userName = user.userName;
    this.birth = user.birth;
    this.address = user.address;
    this.userRole = user.userRole;
    this.password = user.password;
    this.registrationId = user.registrationId;
    this.contactInfo = user.contactInfo;
    this.lawyerTypes = user.lawyerTypes;
  }
}
