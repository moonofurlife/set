import Character from '../Character';

import Team from '../app';

const member1 = new Character('Tolik');

const member2 = new Character('Valera');

const member3 = new Character('Feya');

const member4 = new Character('Zombie');

const team1 = new Team();

test('add member', () => {
  team1.add(member1);
  const received = team1.toArray();
  const expected = [{ name: 'Tolik' }];
  expect(received).toEqual(expected);
});

test('re-adding a member', () => {
  expect(() => team1.add(member1)).toThrow();
});

test('add members list', () => {
  team1.addAll(member1, member2, member3, member4);
  const received = team1.toArray();
  const expected = [
    { name: 'Tolik' },
    { name: 'Valera' },
    { name: 'Feya' },
    { name: 'Zombie' },
  ];
  expect(received).toEqual(expected);
});
