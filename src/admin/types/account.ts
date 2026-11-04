export interface AccountType {
  id: string;
  avatar: string;
  name: string;
  email: string;
  position: string;
  country: string;
  status: string;
  biography: string;
}

// Mẹo thêm: Với chức năng Create, bạn có thể tạo type mới bỏ thuộc tính `id` (vì id thường do server tạo)
export type CreateAccountInput = Omit<AccountType, 'id'>;