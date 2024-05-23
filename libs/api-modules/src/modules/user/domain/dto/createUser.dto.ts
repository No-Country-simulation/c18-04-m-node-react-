import { ContactInfo, Address, UserRole, LawyerType } from '../user.entity';

export class CreateUserDTO {
    private constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly email: string,
        public readonly contactInfo: ContactInfo,
        public readonly address: Address,
        public readonly userName: string,
        public readonly password: string,
        public readonly userRole: UserRole,
        public readonly birth: Date,
        public readonly lawyerTypes?: LawyerType[]
    ) {}

    static create(object: { [key: string]: any }): [string?, CreateUserDTO?] {
        const {
            firstName,
            lastName,
            email,
            contactInfo,
            address,
            userName,
            password,
            userRole,
            birth,
            lawyerTypes
        } = object;

        if (!firstName) return ['firstName is required', undefined];
        if (!lastName) return ['lastName is required', undefined];
        if (!email) return ['email is required', undefined];
        if (!contactInfo || !contactInfo.phoneNumber) return ['contactInfo.phoneNumber is required', undefined];
        if (!address || !address.street || !address.city) return ['address is required', undefined];
        if (!userName) return ['userName is required', undefined];
        if (!password) return ['password is required', undefined];
        if (!userRole) return ['userRole is required', undefined];
        if (!birth) return ['birth is required', undefined];

        return [undefined, new CreateUserDTO(firstName, lastName, email, contactInfo, address, userName, password, userRole, birth, lawyerTypes)];
    };
};