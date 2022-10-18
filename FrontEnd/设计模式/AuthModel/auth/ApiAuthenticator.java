public interface ApiAuthenticator {
  void auth(String url);
  void auth(RequestApi requestApi);
}