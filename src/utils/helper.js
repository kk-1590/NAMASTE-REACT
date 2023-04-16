export function filterData(allRestaurants,searchText) {
    const filteredData = allRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filteredData;
}

