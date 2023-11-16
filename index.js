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
console.log(options);

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

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "You dont know ES6!",
//   email: "example@gmail.com",
//   phone: "000000000",
// });
// invokeAction({
//   action: "updateById",
//   id: "1Tfk9JUNzDfuRKE9FmEO1",
//   name: "You dont know ES6!",
//   email: "example@gmail.com",
//   phone: "0978882546",
// });
// invokeAction({ action: "removeById", id: "N0OurJ5_g5RsMAe8Pj5Hv" });
