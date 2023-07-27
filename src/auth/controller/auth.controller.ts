import {
  Body,
  Controller,
  Post,
  Request,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../guard/authGuard.guard';
import { SignInDTO } from '../dto/signIn.dto';
import { SignInResponseDTO } from '../dto/signinResponse.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signIdDTO: SignInDTO) {
    const { email, password } = { ...signIdDTO };
    const { token, refreshToken } = await this.authService.signIn(
      email,
      password,
    );

    return new SignInResponseDTO('Bearer', token, refreshToken);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
