export class SignInResponseDTO {
  constructor(
    private type: string,
    private token: string,
    private refreshToken: string,
  ) {}
}
