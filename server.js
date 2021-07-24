
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const nameVar = process.env.NAME_VAR;
    console.log(`${nameVar} rock!`);
    await sleep(5000);
  }
}

main();
