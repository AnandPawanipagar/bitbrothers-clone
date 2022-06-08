export const logger = {
  err: (error, fnName) => console.log(`ERROR @ ${fnName}: `, error),
  msg: (data, msg) => console.log(`MSG @ ${msg}: `, { data }),
};
