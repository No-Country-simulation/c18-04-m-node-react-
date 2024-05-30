export class UpdateUserStatusToListDto {
  private constructor(
    public readonly userId: string,
    public readonly status: number
  ) {}

  static update(
    userId: string,
    statusNumber: number
  ): [string?, UpdateUserStatusToListDto?] {
    if (!userId) return ['userId is required', undefined];
    if (!statusNumber) return ['status is required', undefined];
    
    return [undefined, new UpdateUserStatusToListDto(userId, statusNumber)];
  }
}
