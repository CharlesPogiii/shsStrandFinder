class UserFactory {
  constructor(user) {
    this.user = user;
  }

  async make(email, password, isAdmin) {
    // INIT
    this.user.email = email;
    this.user.password = password;
    this.user.isAdmin = isAdmin;

    // SAVE
    await this.user.save();
  }
}

module.exports = UserFactory;
