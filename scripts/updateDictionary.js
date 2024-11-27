#!/usr/bin/env node
import fs from "fs";

const DICTIONARY_URL = "https://github.com/bluesky-social/jetstream/raw/refs/heads/main/pkg/models/zstd_dictionary";
const dictionaryPath = "./src/zstd-dictionary.ts";

const dictionary = await fetch(DICTIONARY_URL).then(res => res.ok ? res.arrayBuffer() : null);

if (!dictionary) {
  throw new Error("Failed to download dictionary");
}

const dictionaryString = Buffer.from(dictionary).toString("utf-8").replaceAll("`", "\\\`");
fs.writeFileSync(dictionaryPath, `export const zstdDictionary = \`${dictionaryString}\`;`);
