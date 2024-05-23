import { Address } from 'cluster';
import { ContactInfo } from './contac_info.entity';
import { UserRole } from './user.roles';
import { LawyerCategoryTypes } from './lawyer_category.types';

export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly contactInfo: ContactInfo,
    public readonly userName: string,
    public readonly password: string,
    public readonly birth: string,
    public readonly address?: Address,
    public readonly userRole?: UserRole,
    public readonly lawyerTypes?: LawyerCategoryTypes[],
  ) {}
}
