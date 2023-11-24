export default async function uploadToIpfs(value) {
  const Moralis = require("moralis").default;
  console.log(value + "sekhar");
  const fs = require("fs");
  await Moralis.start({
    apiKey: "QpR4EBjFJhIDiZw86ueWPd0rz4BCgbxRI9p8sYaiYZfoif6Jsm9aGrvboU7agNrX",
    // http://ipfs.io/ipfs/QmPAUBJmKa1KTeSo7qn4q2N9DT3yhBxPWf1ELHku3nMbci
  });
  //2
  const uploadArray = [
    {
      path: "C:Userssunkari somasekharDesktopSIH_Frontend",
      content: fs.readFileSync(`./${value}`, { encoding: "base64" }),
    },
  ];
  //3̀
  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });
  console.log(response.result);
  console.log("Answer");
}
