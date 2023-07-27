import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(username);
    if (user?.password === password) {
      return {
        token: await this.generateToken(user),
        refreshToken: await this.generateRefreshToken(user),
      };
    }
    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async generateToken(payload: User) {
    return this.jwtService.sign({
      email: payload.email,
      companyId: payload.companyId,
    });
  }

  async generateRefreshToken(payload: User) {
    return this.jwtService.sign(
      {
        email: payload.email,
        companyId: payload.companyId,
      },
      { expiresIn: '30d' },
    );
  }
}
