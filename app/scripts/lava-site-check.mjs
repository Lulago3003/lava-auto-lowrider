import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd, exit } from "node:process";

const root = cwd();
const docsIndexPath = join(root, "..", "docs/index.html");

const checks = [
  {
    name: "real car wash photos are published",
    pass: () =>
      [
        "public/images/lava-auto-local.png",
        "public/images/carro-enjabonado.png",
        "public/images/carro-enjabonado-2.png",
        "public/images/motor.png",
      ].every((file) => existsSync(join(root, file))),
  },
  {
    name: "hero uses the real local photo",
    pass: () => {
      const hero = readFileSync(join(root, "src/components/site/Hero.tsx"), "utf8");
      const content = readFileSync(join(root, "src/lib/site-content.ts"), "utf8");
      return (
        hero.includes("SITE_IMAGES.local") &&
        content.includes('local: "/images/lava-auto-local.png"')
      );
    },
  },
  {
    name: "brand palette includes confident blue and yellow",
    pass: () => {
      const css = readFileSync(join(root, "src/styles.css"), "utf8");
      return css.includes("--color-lowrider-blue") && css.includes("--color-lowrider-yellow");
    },
  },
  {
    name: "primary WhatsApp CTA stays wired",
    pass: () =>
      readFileSync(join(root, "src/components/site/Hero.tsx"), "utf8").includes("WHATSAPP_URL"),
  },
  {
    name: "public page does not show the removed Google score",
    pass: () => {
      const docsIndex = readFileSync(docsIndexPath, "utf8");
      const route = readFileSync(join(root, "src/routes/index.tsx"), "utf8");
      const hero = readFileSync(join(root, "src/components/site/Hero.tsx"), "utf8");
      return ![docsIndex, route, hero].some((content) => /4\.0|GOOGLE_RATING|ratingValue/.test(content));
    },
  },
  {
    name: "public page includes the stronger proof band",
    pass: () => readFileSync(docsIndexPath, "utf8").includes("Prueba real, no promesa"),
  },
];

const failures = checks.filter((check) => !check.pass());

if (failures.length > 0) {
  console.error("Lava site check failed:");
  for (const failure of failures) console.error(`- ${failure.name}`);
  exit(1);
}

console.log(`Lava site check passed: ${checks.length}/${checks.length}`);
