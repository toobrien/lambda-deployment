
exports.handler = (event,context,callback) => {
  console.log("at last!");
  callback(null,"hello, cruel world!");
};
