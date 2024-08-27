export const expiresIn = 60 * 60 * 24 * 5;

export const sessionCookieOptions = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  };