
const handleData = require('./handleData');

const handleCommand = ({ add, remove, list }) => {

  if (add) {
    if (typeof add !== "string") {
      return console.log("insert the name of your task(text only!)".red);
    } else if (add.length < 7) {
      return console.log("name of your task must have more than 6 characters".red);
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log("insert name of the task you are removing(text only!) and/or it needs to have more than 6 characters".red);
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log(`invalid command. use command --add='name of your task, --remove='name of your task' or --list`.red);
  }
}

module.exports = handleCommand;