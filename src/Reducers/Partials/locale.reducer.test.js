import {locale} from './locale.reducer'
import {LOCALE_CHANGE_LANGUAGE} from '../../Actions/action.type'

describe('locale reducer', () => {

    it('initates state', () => {
        const initialState = locale(undefined, {});
        
        expect(initialState).toBeDefined();
        
        let language, avaliableLanguages;
        ({language, avaliableLanguages} = initialState);
        
        expect(language).toBe('en');
        expect(avaliableLanguages).toBeDefined();
        expect(avaliableLanguages.length).toBe(2);
        expect(avaliableLanguages).toContain('en');
        expect(avaliableLanguages).toContain('de');
    });

    it('changes language if action has LOCALE_CHANGE_LANGUAGE type', () => {
        const action = {
            type: LOCALE_CHANGE_LANGUAGE,
            language: 'de'
        };

        const state = locale(undefined, action);
        
        let language, avaliableLanguages;
        ({language, avaliableLanguages} = state);

        expect(language).toBe('de');
        expect(avaliableLanguages).toBeDefined();
        expect(avaliableLanguages.length).toBe(2);
        expect(avaliableLanguages).toContain('en');
        expect(avaliableLanguages).toContain('de');
    })
});