import database from "../src/models";

class BookService {
  static async getAllBooks() {
    try {
      return database.Book.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addBook(newBook) {
    try {
      return await database.Book.create(newBook);
    } catch (error) {
      throw error;
    }
  }

  static async updateBook(id, updateBook) {
    try {
      const bookToUpdate = await database.Book.findOne({
        where: { id: Number(id) }
      });
      if (bookToUpdate) {
        await database.Book.update(updateBook, { where: { id: Number(id) } });
        return updateBook;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getABook(id) {
    try {
      return await database.Book.findOne({
        where: { id: Number(id) }
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteBook(id) {
    try {
      const bookToDelete = await database.Book.findOne({
        where: { id: Number(id) }
      });
      if (bookToDelete) {
        return await database.Book.destroy({
          where: { id: Number(id) }
        });
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;
