export class AddUserStatusToListDTO {
  private constructor(
    public readonly userId: string,
    public readonly status: number
  ) {}

  static add(
    userId: string,
    statusNumber: number
  ): [string?, AddUserStatusToListDTO?] {
    if (!userId) return ['userId is required', undefined];
    if (!statusNumber) return ['status is required', undefined];

    return [undefined, new AddUserStatusToListDTO(userId, statusNumber)];
  }
}
