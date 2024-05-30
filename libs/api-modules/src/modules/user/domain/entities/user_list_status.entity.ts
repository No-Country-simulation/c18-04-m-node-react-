export const userStatusTypes = {
  0: 'PENDING',
  1: 'ACTIVE',
  2: 'BLOCKED',
  3: 'DELETED',
  4: 'INACTIVE',
};

export class UserListStatusEntity {
  public readonly id: string;
  public readonly status: number;
  public readonly userId: string;
  constructor(userState: { id: string; status: number; userId: string }) {
    this.id = userState.id;
    this.status = userState.status;
    this.userId = userState.userId;
  }
}
