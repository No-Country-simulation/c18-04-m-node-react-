import { Address } from "cluster";
import { ContactInfo } from "./contac_info.entity";
import { UserRole } from "./user.roles";
import { LawyerCategoryTypes } from "./lawyer_category.types";

export class UserEntity{
    constructor(
        public readonly id: string,
        public readonly registrationId : string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public contactInfo: ContactInfo,
        public address: Address,
        public userName: string,
        public password: string,
        public userRole: UserRole,
        public birth: Date,
        public lawyerTypes?: LawyerCategoryTypes[]
    ) {}    
}


