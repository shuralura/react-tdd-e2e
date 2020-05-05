describe('Creating a user', () => {
    it('Displays a user in a list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="addNameText"]')
        .type('MoshekotName');

        cy.get('[data-testid="addUsernameText"]')
        .type('MoshekotUser');

        cy.get('[data-testid="addNewUserButton"]')
        .click();

        cy.get('[data-testid="addUsernameText"]')
        .should('have.value', '');

        cy.contains('MoshekotName');

        // todo assert user has edit and delete buttons
    });
});

describe('Editing a user', () => {
    it('Edit a username in a list', () => {
        cy.visit('http://localhost:3000');

        // click its edit button
        cy.get('[data-test-edit="Moshekot"]')
        .click();
        // assert user text changed to edit in progress user and chage its text
        cy.get('[data-testid="editUsernameText"]').clear()
            .type('MoshekotUserEdited');

        // assert edit button is present and click save
        cy.get('[data-testid="editUserButton"]')
        .click();
        // user text is empty, and now returned to add form
        cy.get('[data-testid="addUsernameText"]')
        .should('have.value', '');

        cy.contains('MoshekotUserEdited');
    });

    it('Edit a name in a list', () => {
        cy.visit('http://localhost:3000');

        // click its edit button
        cy.get('[data-test-edit="Moshekot"]')
        .click();
        // assert user text changed to edit in progress user and chage its text
        cy.get('[data-testid="editNameText"]').clear()
            .type('MoshekotNameEdited');

        // click save
        cy.get('[data-testid="editUserButton"]')
        .click();
        // user text is empty
        cy.get('[data-testid="addNameText"]')
        .should('have.value', '');

        cy.contains('MoshekotNameEdited');
    });
});

describe('Delete a user', () => {
    it('Edit a user in a list', () => {
        cy.visit('http://localhost:3000');

        // click its delete button
        cy.get('[data-test-delete="Moshekot"]')
        .click();
        // user text is empty
        cy.get('[data-testid="addNameText"]')
            .should('have.value', '');
        
        // user text is empty
        cy.get('[data-testid="addUsernameText"]')
        .should('have.value', '');

        // assert user is not in list
        cy.contains('Moshekot').should('not.exist');
    });
});