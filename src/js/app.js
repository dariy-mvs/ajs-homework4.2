// TODO: write your code here

export default function sortHeroes(arrHeroes) {
  const newArray = arrHeroes.sort((a, b) => b.health - a.health);
  return newArray;
}
