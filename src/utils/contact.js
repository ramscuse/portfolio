export const CONTACT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || 'jameson.w7281@gmail.com';

export function buildMailto({ subject = '', body = '' } = {}) {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${CONTACT_EMAIL}${qs ? `?${qs}` : ''}`;
}
