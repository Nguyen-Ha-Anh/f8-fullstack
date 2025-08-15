import Cookies from 'js-cookie';

export const cookieKeys = {
  email: 'remember_email',
  accessToken: 'access_token',
  refreshToken: 'refresh_token',
}

export const setEmailCookie = (email: string) => {
  Cookies.set(cookieKeys.email, email, { expires: 30 });
}

export const getEmailCookie = (): string | undefined => {
  return Cookies.get(cookieKeys.email);
}

export const setTokens = (accessToken: string, refreshToken: string) => {
  Cookies.set(cookieKeys.accessToken, accessToken)
  Cookies.set(cookieKeys.refreshToken, refreshToken, { expires: 7 })
}

export const removeEmailCookie = () => {
  Cookies.remove(cookieKeys.email)
}

export const clearTokens = () => {
  Cookies.remove(cookieKeys.accessToken);
  Cookies.remove(cookieKeys.refreshToken);
}
