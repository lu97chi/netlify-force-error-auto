import { Selector } from 'testcafe';

fixture`testing`.page('https://compassionate-shaw-7d2e6f.netlify.app/')

test('Works', async t => {
    const Element = Selector('p').withText('Maste element 2sss');
    await t.expect(Element.visible).ok();
})