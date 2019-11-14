const util = require('util');
const exec = util.promisify(require('child_process').exec);

const getIds = () => exec('echo "342\n343\n344"');

module.exports = async (on, config) => {
  const { stdout, stderr } = await getIds();

  if (stderr) { console.error(stderr); }

  let idsArray = stdout.split('\n');
  idsArray = idsArray.map((s) => s.trim()).filter((s) => s !== '');

  config.env.ids = idsArray;

  return config;
};