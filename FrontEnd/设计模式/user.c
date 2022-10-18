struct User {
  char name[64];
  int age;
  char gender[16];
};

struct User parse_to_user(char* text) {
  // 将text(“小王&28&男”)解析成结构体struct User
}

char* format_to_text(struct User user) { 
  // 将结构体struct User格式化成文本（"小王\t28\t男"）
}

void sort_users_by_age(struct User user[]) {
  // 按照年龄从小到大排序users
}

void format_user_file(char* origin_file_path,char* new_file_path) {
  struct User users[1024]
  int count = 0;
  while(1) {
    struct User user = parse_to_user(line);
    users[count++] = user;
  }

  sort_users_by_age(users);
  for (int i = 0; i < count; ++i) {
    char* formatted_user_text = format_to_text(users[i]);
  }
}

int main(char** args, int argv) {
  format_user_file("/home/zheng/user.txt", "/home/zheng/formatted_users.txt");}
}