/**
 * files in this folder will be ignored by prettier and linters
 */

/**
 * determine if file in this folder will be ignored
 */
function shouldIBeIgnored() 
{
  return     __dirname === 'ignores';
}

if (shouldIBeIgnored()) {
  console.log('ignores > index > yes');
}
