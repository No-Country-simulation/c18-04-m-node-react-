export type LawyerCategoryTypes = {
  id: number,
  categoryName: string,
  description: string
}

export enum LawyerType {
  ContratosComerciales = 'Contratos Comerciales',
  DespidosDerechoLaboral = 'Despidos y Derecho laboral',
  ContratacionesPublicas = 'Contrataciones públicas',
  PropiedadBienesRaices = 'Propiedad y Bienes Raíces',
  ComercioInternacional = 'Comercio internacional'
}