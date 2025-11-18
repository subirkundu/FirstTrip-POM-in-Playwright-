import { expect } from '@playwright/test';

export class SignInPage {
  constructor(page) {
    this.page = page;
    this.modalHeading = page.getByRole('heading', { name: 'Sign In' });
  }

  async isVisible() {
    return await this.modalHeading.isVisible(); 
  }
}
