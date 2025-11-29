import {expect, Locator, Page} from "@playwright/test";

export default class BaseAtom {
    protected readonly page: Page;
    protected readonly _container: Locator;

    protected constructor(page: Page, container: Locator) {
        this.page = page;
        this._container = container;
    }

    async checkVisible(visible = true): Promise<void> {
        await expect(this._container).toBeVisible({visible});
    }

    async checkInViewport(visible: boolean): Promise<void> {
        const check = visible
            ? expect(this._container)
            : expect(this._container).not;
        await check.toBeInViewport();
    }

    async checkEnabled(enabled = true): Promise<void> {
        await expect(this._container).toBeEnabled({enabled});
    }

    async click(force = false): Promise<void> {
        await this._container.click({force});
    }
}