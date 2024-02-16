function findValueByKey(companyName, obj) {
  if (obj.name === companyName) {
    return {
      name: obj.name,
      type: obj.type,
      uses: obj.uses,
      sells: obj.sells
    };
  }
  
  if (obj.clients) {
    for (let client of obj.clients) {
      let result = findValueByKey(companyName, client);
      if (result) return result;
    }
  }

  if (obj.partners) {
    for (let partner of obj.partners) {
      let result = findValueByKey(companyName, partner);
      if (result) return result;
    }
  }

  return null;
}
let companyName = 'Клієнт 1'
let result = findValueByKey(companyName, company);


  console.log(result);

