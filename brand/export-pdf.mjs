#!/usr/bin/env node
/**
 * Export brand/first-artifact-brand-identity.html → PDF
 */
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "brand", "first-artifact-brand-identity.html");
const pdfPath = path.join(root, "brand", "first-artifact-brand-identity.pdf");

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
});
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1000));
await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();
console.log(`Wrote ${pdfPath}`);
