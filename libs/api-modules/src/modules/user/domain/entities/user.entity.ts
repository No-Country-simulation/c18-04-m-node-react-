import { Address } from 'cluster';
import { ContactInfo } from './contac_info.entity';
import { UserRole } from './user.roles';
import { LawyerCategoryTypes } from './lawyer_category.types';

export class UserEntity {
  constructor(
    public readonly id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public userName: string,
    public birth: Date,
    public address: Address,
    public userRole: UserRole,
    public password: string,
    public readonly registrationId: string,
    public contactInfo?: ContactInfo,
    public lawyerTypes?: LawyerCategoryTypes[]
  ) {}
}
