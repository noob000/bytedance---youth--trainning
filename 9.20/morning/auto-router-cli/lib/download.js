const {promisify} = require('util');
module.exports.clone = async function(repo,desc){
    const download = promisify(require('download-git-repo'))
  //  const ora = require('ora');
  //  const process = ora(`download ${repo}`);
   // process.start()
    await download(repo,disc);
   // process.succeed()
}