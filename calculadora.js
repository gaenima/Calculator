const n = document.getElementsByName("numero");
const o = document.getElementsByName("ope");
const l = document.getElementsByName("limpiar");
const t = document.getElementsByName("total");
var d = document.getElementById('result');
opeAc = '';
n.forEach(function(nume){
    nume.addEventListener('click', function(){
        agNum(nume.innerText);
        })
});
function agNum(nro){
    opeAc = opeAc.toString() + nro.toString();
    actDisp();

}
function actDisp(){
    d.value = opeAc;
}