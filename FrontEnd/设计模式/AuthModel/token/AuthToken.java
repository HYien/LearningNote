public class AuthToken {
  private static final long DEFAULT_EXPIRED_TIME_INTERVAL = 1 * 60 * 1000;
  private String token;
  private long creatTime;
  private long expiredTimeInterval = DEFAULT_EXPIRED_TIME_INTERVAL;

  public AuthToken(String token, long createTime) {
    this.token = token;
    this.createTime = createTime;
  };

  public AuthToken(String token, long createTime, long expiredTimeInterval) {
    this.token = token;
    this.createTime = createTime;
    this.expiredTimeInterval = expiredTimeInterval;
  };

  public static AuthToken generate(String baseUrl,long createTime,String appId, String password) {
    RequestApi requestApi = new RequestApi(baseUrl,password,appId,timestamp);
    String token = requestApi.getToken();
    return new AuthToken(token,createTime);
  };

  public String getToken() {
    return this.token;
  };

  public boolean isExpired() {
    if (this.createTime > new Date().getTime() + this.expiredTimeInterval) {
      return true;
    }
    return false;
  };

  public boolean match(AuthToken authToken) {
    if (this.token.equals(authToken.token)) {
      return true;
    }
    return false;
  };
}