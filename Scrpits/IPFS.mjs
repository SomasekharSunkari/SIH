// import { create } from "ipfs-core";
// import { AbortController } from "abort-controller";
//
// async function initIPFSNode() {
//   const ipfs = await create();
//
//   return ipfs;
// }
// const ipfs = await initIPFSNode();
// const fileContent = "Hello, IPFS !";
// const file = new TextEncoder().encode(fileContent);
// let Result_var = null;
// ipfs
//   .add(file)
//   .then((result) => {
//     console.log("Added the File with CID  : " + result.path);
//     Result_var = result.path;
//   })
//   .catch((error) => {
//     console.log("Error Addding FIle" + error);
//   });
//
// const cid = Result_var;
//
// async function getFileFromIPFS(cid) {
//   try {
//     const files = await ipfs.get(cid);
//     console.log(files);
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// getFileFromIPFS(cid);
