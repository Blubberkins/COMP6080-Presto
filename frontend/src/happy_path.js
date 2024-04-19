context('Admin Happy Path', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Successfully logs in after entering the correct credentials', () => {
    // Log in with the correct credentials
    const email = 'soorria@email.com';
    const password = 'ThisIsAPassword';

});
