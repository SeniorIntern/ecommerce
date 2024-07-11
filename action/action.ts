'use server';

import { JWT_EXPIRATION_TIME, SESSION_EXPIRATION_TIME } from '@/constants';
import { Session } from '@/types';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.NEXT_PUBLIC_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRATION_TIME)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256']
  });
  return payload;
}

export async function login() {}

export async function signup() {}

export async function logout() {
  // Destroy the accessToken
  cookies().set('accessToken', '', { expires: new Date(0) });
}

export async function getSession(): Promise<Session | null> {
  const accessToken = cookies().get('accessToken')?.value;
  if (!accessToken) return null;
  return await decrypt(accessToken);
}

export async function updateSession(request: NextRequest) {
  // TODO - valdiate if the cookie is legit
  const accessToken = request.cookies.get('accessToken')?.value;
  if (!accessToken) return;

  // Refresh the accessToken so it doesn't expire
  // hit refreshToken api
  const parsed = await decrypt(accessToken);
  parsed.expires = new Date(Date.now() + SESSION_EXPIRATION_TIME);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'accessToken',
    value: await encrypt(parsed),
    expires: parsed.expires
  });
  return res;
}
