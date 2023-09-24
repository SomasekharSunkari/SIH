// import { create } from "ipfs-http-client";
import { require } from "ipfs-http-client";
const { create } = require("ipfs-http-client");

async function ipfsClient() {
  const ipfs = await create(
    {
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
    },
    {
      headers: {
        Authorization: "Basic " + btoa("Sunkari Somasekhar:Sekharamma@176"),
      },
    }
  );
  return ipfs;
}

async function saveText() {
  let ipfs = await ipfsClient();
  let result = await ipfs.add("hello");
  console.log(result);
}
saveText();
