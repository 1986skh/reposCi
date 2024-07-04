describe('teste de formulaire d sing-up', () => {
  it('remplaire le formulaire d\'inscreption', () => {
  cy.visit('https://preprod.backmarket.fr/fr-fr/register')
cy.get('span._2GvJDBxS').contains('Tout accepter').click()
cy.get("#firstName").type('khelifa')
cy.get('#lastName').type('Smail')
cy.get('#signup-email').type('khelifa.smail08@gmail.com')
cy.get('#signup-password').type('Wild2024')
cy.get('label[for="newsletter"]').click();
cy.get('button[data-qa="signup-submit-button"]').click()
  });
})
describe('teste de formulaire d sing-up failled', () => {
  it('inscréption échoué ', () => {
  cy.visit('https://preprod.backmarket.fr/fr-fr/register')
cy.get('span._2GvJDBxS').contains('Tout accepter').click()
cy.get("#firstName").type('khelifa')
cy.get('#lastName').type('Smail')
cy.get('#signup-email').type('khelifa.smail08@gmail.com')
cy.get('#signup-password').type('Wild2024')
cy.get('label[for="newsletter"]').click();
cy.get('button[data-qa="signup-submit-button"]').click()
  });
})
describe('teste de formulaire login', () => {
  it('passes', () => {
  cy.visit('https://preprod.backmarket.fr/fr-fr/register')
  cy.get('span._2GvJDBxS').contains('Tout accepter').click()
cy.get('#signin-email').type('khelifa.smail08@gmail.com')
cy.get('#signin-password').type('Wild2024')
cy.get('label[for="newsletter"]').click();
cy.get('span._2GvJDBxS').contains('Welcome Back!').click()




  });
})
