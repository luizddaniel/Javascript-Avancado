/**
 * Created with JetBrains PhpStorm.
 * User: Luiz
 * Date: 06/09/16
 * Time: 17:09
 * To change this template use File | Settings | File Templates.
 */

var list = [
    {"desc":"rice", "amount":"1", "value" : "5.40"},
    {"desc":"beer", "amount":"12", "value" : "1.99"},
    {"desc":"meat", "amount":"2", "value" : "15.00"}
];

function getTotal(list){
    var total = 0;

    for (var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;

}

function setList(list){
    var table = ' <thead><tr><td>Descripition</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead>';

    for(var key in list){
        table += ' <tr><td>' + list[key].desc + '</td><td>'+ list[key].amount  +'</td><td>' + list[key].value  +'</td><td>Edit | Delete</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

setList(list);
console.log(getTotal(list));