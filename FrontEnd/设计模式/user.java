public class User {
  private String name;
  private int age;
  private String gender;

  public User(String name, int age, String gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public static User parseFrom(String userInfoText) {
    // 将text(“小王&28&男”)解析成类User
  }

  public String formatTotext() {
    // 将类User格式化成文本（"小王\t28\t男"）
  }
}

public class UserFileFormatter {
  public void format(String userFile,String formattedFile) {
    List users = new ArrayList<>();
    while (1) { // read until file is empty
    // read from file into userText...
      User user = User.parseFrom(userText);
      users.add(user)
    }

    for(int i = 0; i < users.size(); ++i) {
      String formfattedUserText = user.formatTotext();
    }
  }
}

public class MainApplication {
  public static void main(String[] args) {
    UserFileFormatter userFileFormatter = new UserFileFormatter();
    userFileFormatter.format("/home/zheng/users.txt", "/home/zheng/formatted_users.txt"); }}
  }
}