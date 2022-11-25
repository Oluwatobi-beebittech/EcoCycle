export type ResetPasswordDto = {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}