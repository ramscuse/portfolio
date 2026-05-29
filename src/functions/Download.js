export function download(fileOrUrl) {
  const isAbsolute = /^https?:\/\//.test(fileOrUrl);
  const a = document.createElement('a');
  a.href = isAbsolute ? fileOrUrl : `/${fileOrUrl}`;
  // The `download` attribute is honored for same-origin files; cross-origin
  // (e.g. Vercel Blob) relies on the `?download=1` query param on the URL.
  if (!isAbsolute) a.download = fileOrUrl;
  a.rel = 'noopener';
  a.click();
}
