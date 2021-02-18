export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => b.cases - a.cases);
  console.log("sorted data>>", sortedData);
  return sortedData;
};
