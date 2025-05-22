import 'cypress-axe';

Cypress.Commands.add('injectAxeAndCheck', () => {
  cy.injectAxe(); // Injects axe-core into the app
  cy.checkA11y(null, {
    includedImpacts: ['critical', 'serious'],
  });
});
