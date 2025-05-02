import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import config from '../config';
import AppError from '../errors/AppError';
import prisma from '../utils/prisma';
import { Role } from '@prisma/client';

const auth = (roles: Role[] = []) => {
  return catchAsync(async (req: Request, _res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization;
 
    if (!bearerToken?.startsWith('Bearer ')) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid or missing authorization header');
    }

    const token = bearerToken.split(' ')[1];

    const decoded = jwt.verify(token, config.jwt_access_token_secret as string) as JwtPayload;

    const email = decoded?.email;

    if (!email) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Token is invalid');
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.is_deleted) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    if (roles.length && !roles.includes(user.role)) {
      throw new AppError(httpStatus.FORBIDDEN, 'Access denied');
    }

    req.user = user;

    next();
  });
};

export default auth;
