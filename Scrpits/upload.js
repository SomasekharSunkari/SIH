const Moralis = require("moralis").default;
const fs = require("fs");
async function uploadToIpfs() {
  await Moralis.start({
    apiKey: "QpR4EBjFJhIDiZw86ueWPd0rz4BCgbxRI9p8sYaiYZfoif6Jsm9aGrvboU7agNrX",
  });
  //2
  const uploadArray = [
    {
      path: "C:\Users\sunkari somasekhar\Desktop\SIH_Frontend",
      content: fs.readFileSync("./Red_Shoe.png", { encoding: "base64" }),
    },
  ];
  //3̀
  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });
  console.log(response.result);
}
uploadToIpfs();
