// ***********************************************
Cypress.Commands.add('createUser', (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user', {
			id: id,
			username: username,
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			phone: phone,
			userStatus: userStatus,
		}).should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body.message).to.eq(id);
		});
});