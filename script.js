
document.getElementById('button').onclick=myfunction;
function myfunction(text){
var text =document.getElementById('input').value;
var url='http://www.dictionary.com/browse/' + text;
window.open(url,'_blank');
}