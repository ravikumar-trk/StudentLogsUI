const featureFlag = require("./featureFlag.json");

const permissions = () => {
  return featureFlag.IsAdmin;
};

export default permissions;
