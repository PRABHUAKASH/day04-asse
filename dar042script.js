var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
}
// flags
var res=result.filter((ele)=>ele.flags).map((ele)=>ele.name);
console.log(res);
// regien
var reg=result.filter((ele)=>ele.regien).map((ele)=>ele.name);
console.log(reg);
// sub-regien
var sub=result.filter((ele)=>ele.sub.regien).map((ele)=>sub.name);
console.log(sub);


