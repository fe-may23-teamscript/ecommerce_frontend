export const getToken = () => {
  const authKey =
    Object.keys(window.localStorage).find((key) => key.includes('openid')) ||
    '';

  const json = localStorage.getItem(authKey) || '';
  if (!json) {
    return;
  }

  const payload = JSON.parse(json);

  return payload?.body?.access_token || '';
};
