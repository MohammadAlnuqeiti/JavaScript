async function gitData(){
    const response = await fetch(`https://www.breakingbadapi.com/api/characters`)// بكون بلغة جيسون
    const data = await response.json() // هيك بكون حولته للغة الجافا لحتى اقدر اتعامل معه
console.log(response);
console.log(data);


let table1 = '<table border=2>';
        table1 += '<tr>';
        table1 += '<th>Name</th>';
        table1 += '<th>nickname</th>';
        table1 += '<th>img</th>';
        table1 += '</tr>';
        data.map( (ele) => {
            var Name = ele.name;
            var Nname = ele.nickname;
            var img = ele.img;
          
         
            table1 = table1 + '<tr>',
            table1 = table1 + '<td>'+ `${Name}` + '</td>',
            table1 = table1 + '<td>' + `${Nname}` + '</td>',
            table1 = table1 + '<td>' +  `<img src=${img} style="width:100px;">`+ '</td>'
         });  
         document.getElementById(`list`).innerHTML=table1
}
function hideData(){
    document.getElementById(`list`).innerHTML=""

}