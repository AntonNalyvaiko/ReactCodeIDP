import { UserManager } from 'oidc-client';

const config = {
  client_id: 'js',
  redirect_uri: `http://localhost:5002/callback`,
  response_type: "code",
  scope: 'openid profile api1',
  authority: `http://localhost:5000/`,
  post_logout_redirect_uri: `http://localhost:5002/`,
  silent_redirect_uri: `http://localhost:5002/silent_renew.html`,
  automaticSilentRenew: true, 
  loadUserInfo: true,
  filterProtocolClaims: true,
  accessTokenExpiringNotificationTime: 4
};

const userManager = createUserManager(config);

export default userManager;

function createUserManager(config) { 
  return new UserManager(config);

}