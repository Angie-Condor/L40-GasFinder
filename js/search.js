const Search = () =>{
  const parent = $('<div class="white-card"></div>');
  const lupa = $('<div class="fa fa-search"></div>');
  const input = $('<input id="input-item" type="text" placeholder="Ingresa tu distrito a buscar">');
  const hr = $('<hr>');
  const list = $('<div class="list"></div>');

  parent.append(input);
  parent.append(lupa);
  parent.append(hr);
  parent.append(list);

  /*input.on('keypress',(e) => {
    if(e.which === 13){
      if(input.val() != ""){
        state.todos({
          text: input.val(),
          completed: false
        });
        input.val('');
        reRender(list);
      }
    }
  });*/

  return parent;
}


const Item = (data,update) => {
  const infoStation = $('<div class="info-station">');
  const checkbox = $('<input type="checkbox">');
  const name = $('<h5>'+data.name+'</h5>');
  const address = $('<span>'+data.adress+'</span>');
  const district = $('<span>'+data.district+'</span>');
  const map = $('<div class="fa fa-map"></div>')

  infoStation.append(checkbox);
  infoStation.append(name);
  infoStation.append(address);
  infoStation.append(district);
  infoStation.append(map);

  return infoStation;
};

const reRender = (list) => {
  list.empty();
  console.log(state.stations);
  // update();
};


// forEach(infoStation =>{
//   list.append(Item(infoStation,_ => { reRender(list);}));
//


/*checkbox.on('change', (e) => {
  data.completed = !data.completed;
  update();
});

remove.on('click', (e) => {
  const idx = state.todos.map( x => x.text ).indexOf(data.text);
  state.todos.splice(idx,1);
  update();
});
*/
