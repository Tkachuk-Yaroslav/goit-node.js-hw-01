// console.log("Hello World!");
// console.log("first");

const contacts = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "updateById":
      const updatedBook = await contacts.updateContact(id, name, email, phone);
      return console.log(updatedBook);
    case "removeById":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
    default:
      return console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
