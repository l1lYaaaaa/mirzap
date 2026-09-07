import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "public/sites/sv-svai-ru-5bde0d5b/mir-61746d61/images";

const ASSETS = [
  {
    url: "https://optim.tildacdn.com/tild3965-3035-4864-a435-306137653061/-/format/webp/image.png.webp",
    name: "brake-kit-hero.webp",
  },
  {
    url: "https://static.tildacdn.com/tild3965-3035-4864-a435-306137653061/image.png",
    name: "brake-kit-case.png",
  },
  {
    url: "https://static.tildacdn.com/tild6362-6363-4236-b762-616130633630/image.png",
    name: "brake-caliper-closeup.png",
  },
];

async function downloadAll() {
  await mkdir(OUT_DIR, { recursive: true });
  const results = await Promise.all(
    ASSETS.map(async (asset) => {
      const res = await fetch(asset.url);
      if (!res.ok) throw new Error(`Failed ${asset.url}: ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(path.join(OUT_DIR, asset.name), buf);
      return asset.name;
    })
  );
  console.log("Downloaded:", results.join(", "));
}

downloadAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
