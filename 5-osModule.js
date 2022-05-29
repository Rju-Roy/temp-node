const os = require("os");

// info about current user
const user = os.userInfo();

//system uptime in seconds
console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
