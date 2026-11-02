Cypress.Commands.add('createUser', (email, senha) => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: 'Luis',
      email: email,
      password: senha,
      title: 'Mr',
      birth_date: '10',
      birth_month: 'May',
      birth_year: '2000',
      firstname: 'Luis',
      lastname: 'Silva',
      company: 'Empresa',
      address1: 'Rua A, 100',
      address2: 'Casa',
      country: 'Canada',
      zipcode: '12345',
      state: 'Ontario',
      city: 'Toronto',
      mobile_number: '21999999999'
    }
  }).its('body').should('include', 'User created!')
})

Cypress.Commands.add('deleteUser', (email, senha) => {
  cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: { email: email, password: senha }
  })
})
