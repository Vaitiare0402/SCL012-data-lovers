export let filtroHAuse = (filtro, house) => {
  return filtro.filter (filtrohouse => filtrohouse.house.includes(house));
};
console.log(filtroHAuse);
