public class RequestApi {
  private String baseUrl;
  private String token;
  private String appId;
  private long timestamp;

  public RequestApi(String baseUrl, String password, String appId, long timestamp) {
    this.baseUrl = baseUrl;
    this.password = password;
    this.appId = appId;
    this.timestamp = timestamp;
    this.token = buildToken();
  };

  public static RequestApi createFromFullUrl(String url) {
    Map<String,String> params = parse(url)
    String baseUrl = getUrl(url)
    RequestApi req = new RequestApi(baseUrl,params[password],params[appId],params[timestamp])
    return req
  };

  private static Map<String,String> parse(String url) {
    Map<String,String> params = new TreeMap<>();
    //TODO：通过url解析baseUrl appId timestamp password
    return params
  }

  private static String getUrl(String url) {
    //TODO:URL做截断处理
    String baseUrl = url
    return baseUrl
  }

  private static String buildToken() {
    // 通过密码
    String token = enCode()
    return token
  }

  private static String enCode(key,value) {
    // 加密算法
    return token
  }

  private static String deCode(String url) {

  }

  public String getBaseUrl() {
    return this.baseUrl;
  };

  public String getToken() {
    return this.token;
  };

  public String getAppId() {
    return this.appId;
  };

  public long getTimestamp() {
    return this.timestamp;
  }
}