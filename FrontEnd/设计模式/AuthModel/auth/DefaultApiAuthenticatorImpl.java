public class DefaultApiAuthenticatorImpl implements ApiAuthenticator {
  private CredentialStorage credentialStorage;

  public DefaultApiAuthenticatorImpl() {

  };
  public DefaultApiAuthenticatorImpl(CredentialStorage credentialStorage) {
    this.credentialStorage = credentialStorage;
  };
  public void auth(String url) {
    RequestApi requestApi = RequestApi.createFromFullUrl(url);
    auth(requestApi);
  };
  public void auth(RequestApi requestApi) {
    String appId = requestApi.getAppId()
    String token = requestApi.getToken()
    long timestamp = requestApi.getTimestamp();
    String originalUrl = requestApi.getBaseUrl();

    AuthToken clientAuthToken = new AuthToken(token, timestamp);
    if (clientAuthToken.isExpired) {
      throw new RuntimeException('Token is expired.')
    }

    String password = credentialStorage.getPasswordByAppId(appId);
    AuthToken serverAuthToken = AuthToken.generate(originalUrl,timestamp,appId,password);
    if(!serverAuthToken.match(clientAuthToken)) {
      throw new RuntimeException('Token verification failed.')
    }
  };
}