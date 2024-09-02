export class UserService {
  constructor(
    User
  ) {
    this.User = User
  }

  async findAll() {
    try {
      return await this.User.findAll()
    }
    catch (err) {
      throw new Error(err.message)
    }
  }

  async findById(id) {
    try {
      return await this.User.findOne({
        where: {
          id
        }
      })
    }
    catch (err) {
      throw new Error(err.message)
    }
  }

  async create(user) {
    try {
      await this.User.create(user)
    }
    catch (err) {
      throw new Error(err.message)
    }
  }

  async alter(user) {
    try {
      await this.User.update(
        user,
        {
          where: {
            id: user.id,
          },
        },
      );
    }
    catch (err) {
      throw new Error(err.message)
    }
  }

  async remove(id) {
    try {
      await this.User.destroy({
        where: {
          id,
        },
      });
    }
    catch (err) {
      throw new Error(err.message)
    }
  }
}