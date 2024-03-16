import client from "./client.js";

async function init() {
  //   await client.set("user:3", "Sanchit");
  //   await client.expire("user:3", 10);

  const result = await client.get("user:3");
  console.log("Result -> ", result);
}

init();
