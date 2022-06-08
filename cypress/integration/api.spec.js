const firstUser = require('../fixtures/firstUser.json')
const initUser = require('../fixtures/initUser.json')
const editedUser = require('../fixtures/editedUser.json')

describe('Petstore api test', () => {
	it('Should create user', () => {
		cy.createUser(
            firstUser.id,
            firstUser.userName,
            firstUser.firstName,
            firstUser.lastName,
            firstUser.email,
            firstUser.password,
            firstUser.phone,
            firstUser.userStatus
            );
		});

	it('Should edit user', () => {
        cy.createUser(
            initUser.id,
            initUser.userName,
            initUser.firstName,
            initUser.lastName,
            initUser.email,
            initUser.password,
            initUser.phone,
            initUser.userStatus
            );
		cy.request('PUT', `/${initUser.userName}`, {
			id: editedUser.id,
			username: editedUser.userName,
			firstName: editedUser.firstName,
			lastName: editedUser.lastName,
			email: editedUser.email,
			password: editedUser.password,
			phone: editedUser.phone,
			userStatus: editedUser.userStatus,
		}).should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body.message).to.eq(editedUser.id);
		});
	});

	it('Should delete user', () => {
		cy.request('DELETE', `/${initUser.userName}`).should(
			(response) => {
				expect(response.status).to.eq(200);
				expect(response.body.message).to.eq(initUser.userName);
			}
		);
	});
});