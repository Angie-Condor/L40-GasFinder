'use strict';

const filterByDistrict = (stations,query) => {
  return stations.filter((elemento) =>{
    return (elemento.district.indexOf(query) !== -1);
  });
}
