import { test, expect } from "@playwright/test";

export const shouldHavePageTitle = (options: { pageTitle: string }) => {
  return test("should have page title", async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle(options.pageTitle);
  });
}

export const shouldClickOnButtonOnContactPage = () => {
    return test("should click on the button on the contact page", async({ page }) => {
        await page.goto("/contact");
        await page.locator("button").click();
    });
};
