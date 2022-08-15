const tableDatas = document.getElementsByClassName('pop')
console.log(tableDatas)
var tot = 0
for (let i = 0;i<tableDatas.length;i++){
    tableDatas[i].innerHTML.replace(' ', '')
    num = parseInt(tableDatas[i].innerHTML)
    tot += num
}
window.document.getElementById("tot").innerHTML = (tot);