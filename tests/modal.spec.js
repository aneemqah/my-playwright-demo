const { test, expect } = require("@playwright/test");
const path = require("path");

test("button opens modal", async ({ page }) => {
  // Navigate to the local HTML file
  const filePath = path.join(__dirname, "..", "index.html");
  await page.goto(`file://${filePath}`);

  // Click the "Click me" button
  await page.click('button:has-text("Click me")');

  // Verify that the modal is visible
  await expect(page.locator("#myModal")).toBeVisible();

  // Keep the browser open for 5 seconds to see the modal
  await page.waitForTimeout(5000);
});
