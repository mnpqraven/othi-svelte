import API from '$lib/api';

export const load = async () => {
  return { characterList: getCharacters() };
};
async function getCharacters() {
  const { list } = await API.characterByIds.get();
  return list.sort(
    (a, b) =>
      b.rarity - a.rarity ||
      a.avatar_name.localeCompare(b.avatar_name) ||
      a.avatar_votag.localeCompare(b.avatar_votag)
  );
}
