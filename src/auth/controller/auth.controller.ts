import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Res,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../guard/authGuard.guard';
import { SignInDTO } from '../dto/signIn.dto';
import { SignInResponseDTO } from '../dto/signInResponse.dto';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signIdDTO: SignInDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { email, password } = { ...signIdDTO };

    const { token, refreshToken } = await this.authService.signIn(
      email,
      password,
    );

    response.cookie('token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return new SignInResponseDTO('Bearer', token, refreshToken);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Res() req) {
    return req.user;
  }
}
