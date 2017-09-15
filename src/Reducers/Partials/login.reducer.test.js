import {USER_LOGOUT, USER_LOGIN_SUCCESS, USER_LOGIN_INPROGRESS} from '../../Actions/action.type'
import {authenticate} from './login.reducer'

describe('login action reducer', () => {
    it('init state', () => {
        const initialState = authenticate(undefined, {});

        expect(initialState).toBeDefined();
        
        let isAuthenticated, isBeingAuthenticated, user;
        ({isAuthenticated, isBeingAuthenticated, user} = initialState);

        expect(isAuthenticated).toBe(false);
        expect(isBeingAuthenticated).toBe(false);
        expect(user).toBeDefined();
        expect(Array.from(user).length).toBe(0);
    });

    describe('user logout', () => {
        
        const action = {
            type: USER_LOGOUT
        }
        
        const assertState = state => {
            let isAuthenticated, isBeingAuthenticated, user;
            ({isAuthenticated, isBeingAuthenticated, user} = state);
    
            expect(isAuthenticated).toBe(false);
            expect(isBeingAuthenticated).toBe(false);
            expect(user).toBeDefined();
            expect(user.name).toBeUndefined();
        };

        it('is logged out if logged in', () => {
            const initialState = { 
                isAuthenticated : true, 
                isBeingAuthenticated: false,
                user: { name: 'test' } 
            };

            const state = authenticate(initialState, action);
            
            assertState(state);
        });

        it('is logged out if user is being logged in', () => {
            const initialState = { 
                isAuthenticated : false, 
                isBeingAuthenticated: true,
                user: { name: 'test' } 
            };

            const state = authenticate(initialState, action);
            
            assertState(state);
        });

        it('is logged out if not logged in', () => {
            const initialState = { 
                isAuthenticated : false, 
                isBeingAuthenticated: false,
                user: { } 
            };

            const state = authenticate(initialState, action);
            
            assertState(state);
        });
    });

    describe('user login in progress', () => {
        const name = 'test';

        const action = {
            type: USER_LOGIN_INPROGRESS,
            user: {
                name
            }
        };

        const assertState = state => {
            let isAuthenticated, isBeingAuthenticated, user;
            ({isAuthenticated, isBeingAuthenticated, user} = state);
    
            expect(isAuthenticated).toBe(false);
            expect(isBeingAuthenticated).toBe(true);
            expect(user).toBeDefined();
            expect(user.name).toBe(name);
        };

        it('changes to in progress state if user was logged out', () => {
            const initialState = { 
                isAuthenticated : false, 
                isBeingAuthenticated: false,
                user: {} 
            };

            const state = authenticate(initialState, action);
            assertState(state);
        });

        it('changes to in progress state and user is modified if user was logged in', () => {
            const initialState = { 
                isAuthenticated : true, 
                isBeingAuthenticated: false,
                user: { name : 'Some Other name'} 
            };

            const state = authenticate(initialState, action);
            assertState(state);
        });

        it('changes to in progress state and user is modified if user is being logged in', () => {
            const initialState = { 
                isAuthenticated : false,
                isBeingAuthenticated: true,
                user: { name : 'Some Other name'} 
            };

            const state = authenticate(initialState, action);
            assertState(state);
        });
    });

    describe('user login succes', () => {
        const name = 'test';
        const action = {
            type: USER_LOGIN_SUCCESS,
        };

        it('finishes authentication if it was in progress', () => {
            const initialState = { 
                isAuthenticated : false, 
                isBeingAuthenticated: true,
                user: { name } 
            };

            const state = authenticate(initialState, action);
            let isAuthenticated, isBeingAuthenticated, user;
            ({isAuthenticated, isBeingAuthenticated, user} = state);
    
            expect(isAuthenticated).toBe(true);
            expect(isBeingAuthenticated).toBe(false);
            expect(user).toBeDefined();
            expect(user.name).toBe(name);
        });

        it('throws exception if authentication is already finished', () => {
            const initialState = { 
                isAuthenticated : true, 
                isBeingAuthenticated: false,
                user: { name } 
            };

            expect(() => authenticate(initialState, action)).toThrow();
        });

        it('throws exception if authentication is not started', () => {
            const initialState = { 
                isAuthenticated : false, 
                isBeingAuthenticated: false,
                user: { } 
            };

            expect(() => authenticate(initialState, action)).toThrow();
        });
    });
});