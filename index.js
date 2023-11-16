// console.log("Hello World!");
// console.log("first");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    default:
      return console.log("Uncknown action!");
  }
};

// invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
