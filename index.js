
module.exports = {
  task: () => { return undefined },
  registry: () => { return { tasks: () => { return { 'dummy': () => {} } } } },
  series: () => { return undefined }
}
