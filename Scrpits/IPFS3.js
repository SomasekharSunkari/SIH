import { createHelia } from "helia";
import { unixfs } from "@helia/unixfs";
const helia = await createHelia();
const fs = unixfs(helia);

const encoder = new TextEncoder();
const bytes = encoder.encode("Hello World 101");

const cid = await fs.addBytes(bytes);

console.log("Added File : ", cid.toString());
