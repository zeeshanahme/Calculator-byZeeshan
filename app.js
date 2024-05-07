function btnClick(a){
    document.getElementById('inp').value += a
}
function eq(){
    var getValue = document.getElementById('inp');
    getValue.value = eval(getValue.value)
}
function clearAll(){
    document.getElementById('inp').value = '';
}