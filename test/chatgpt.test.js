'use strict';

const { classifyCheckoutError } = require('../chatgpt');

describe('checkout error classification', () => {
    it('classifies upstream unusual activity as a risk rejection', () => {
        expect(classifyCheckoutError('Our systems have detected unusual activity. Please try again later.'))
            .toBe('RISK_REJECTED');
    });

    it('keeps ordinary checkout failures separate from risk rejections', () => {
        expect(classifyCheckoutError('Offer not found')).toBe('CHECKOUT_REJECTED');
    });
});
