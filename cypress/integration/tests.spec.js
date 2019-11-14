describe('TestSuite', () => {
  Cypress.env('ids').forEach((id) => {
    it(`should test ID: ${id}`, () => {
      expect(id).contain(id);
    });
  });
});