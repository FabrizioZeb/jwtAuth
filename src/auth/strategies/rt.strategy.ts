import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from 'express';
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret',
      passReqToCallback: true,
    })
  }

  validate(req: Request, payload: any) {
    Logger.log(req)
    const refreshToken = req?.get('Authorization')?.replace('Bearer', '').trim();
    return {
      ...payload,
      refreshToken,
    }
  }
}