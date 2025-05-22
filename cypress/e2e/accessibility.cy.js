function logViolations(violations) {
  const message = `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} detected`;

  // Log the count of violations
  cy.task('log', message);

  // Log the actual violations
  violations.forEach(({ id, impact, description, helpUrl, nodes }) => {
    const violationMessage = `🔴 [${impact.toUpperCase()}] ${id}: ${description}`;
    cy.task('log', violationMessage);
    cy.task('log', `🧩 Affected nodes: ${nodes.length}`);
    cy.task('log', `📘 More info: ${helpUrl}`);
  });
}

describe('Accessibility Test with logViolations()', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.injectAxe();
  });

  it('Logs accessibility issues clearly', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious', 'moderate']
    }, logViolations);
  });
});
