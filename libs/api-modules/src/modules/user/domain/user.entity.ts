export class UserEntity{
    constructor(
        public readonly id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public contactInfo: ContactInfo,
        public address: Address,
        public userName: string,
        public password: string,
        public userRole: UserRole,
        public birth: Date,
        public lawyerTypes?: LawyerType[]
    ) {}    
}

export interface ContactInfo {
    phoneNumber: string;
}

export interface Address {
    street: string;
    city: string;
}

export enum UserRole {
    Admin = 'admin',
    BasicUser = 'basic user',
    Guest = 'guest'
}

export enum LawyerType {
    ContratosComerciales = 'Contratos Comerciales',
    DespidosDerechoLaboral = 'Despidos y Derecho laboral',
    ContratacionesPublicas = 'Contrataciones públicas',
    PropiedadBienesRaices = 'Propiedad y Bienes Raíces',
    ComercioInternacional = 'Comercio internacional'
}