

async function fetchData(navigateString, methodType = "GET", dataContent = null) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: methodType,
  };

  if (dataContent !== null) {
    options.body = JSON.stringify(dataContent);
  }

  const response = await fetch(`http://localhost:3000/${navigateString}`, options);
  console.log(`http://localhost:3000/${navigateString}`);
  const data = await response.json();
  console.log(data);
  return data;
}
export default fetchData;