import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import UserTable from './UserTable';

describe('<UserTable/>', () => {
    let container;
    let users = [{ "id": "1", "name": 'currentname', "username": 'currentusername' }];
    afterEach(cleanup);

    describe('clicking the edit button in user row', () => {
        let editRow, deleteUser;
        beforeEach(() => {
            editRow = jest.fn();
            deleteUser = jest.fn();

            ({ container } = render(<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />));  

             fireEvent.click(container.querySelector(`[data-test-edit="${'currentname'}"]`));
        })

        it("should check the edit button is pressed", () => {
            expect(editRow).toHaveBeenCalledWith(users[0]);
        });
    });

    describe('clicking the delete button in user row', () => {
        let editRow, deleteUser;
        beforeEach(() => {
            editRow = jest.fn();
            deleteUser = jest.fn();

            ({ container } = render(<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />));  

             fireEvent.click(container.querySelector(`[data-test-delete="${'currentname'}"]`));
        })

        it("should check the delete button is pressed", () => {
            expect(deleteUser).toHaveBeenCalledWith(users[0].id);
        });

    });
});

describe('<UserTable/> no users', () => {
    let getByTestId;
    let users = [];
    afterEach(cleanup);

    describe('clicking the edit button in user row', () => {
       
        beforeEach(() => {
            ({ getByTestId } = render(<UserTable users={users} />));  
        })

        it("should check the edit button is pressed", () => {
            expect(getByTestId('emptyUserList')).toBeTruthy();
        });
    });

    
});