export interface IUser {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgetPasswordToken: string;
  forgetPasswordTokenExpiry: Date;
  verifyToken: string;
  verifyTokenExpiry: Date;
}
