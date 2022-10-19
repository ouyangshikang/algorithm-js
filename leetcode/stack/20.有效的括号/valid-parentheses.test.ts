import { isValid } from './valid-parentheses';

describe('有效的括号', () => {
    it('匹配成功情况', () => {
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('{a(b[c]d)e}f')).toBe(true);
    });

    it('匹配失败', () => {
        expect(isValid('([)]')).toBe(false);
        expect(isValid(']')).toBe(false);
    });

    it('传入的是空字符串', () => {
        expect(isValid('')).toBe(true);
    });
});
