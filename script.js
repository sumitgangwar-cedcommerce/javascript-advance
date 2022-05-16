const arr =[];

function check(){
    var id=document.getElementById("ID").value;
    var name=document.getElementById("Name").value;
    var sal=document.getElementById("Sal").value;

 const obj={
    'obj_id':id,
    'obj_name':name,
    'obj_price':sal
};
arr.push(obj);

let text="<table><th>Id  </th><th>Name</th><th>Basic Salary</th><th>Action<th>";



for(j=0;j<arr.length;j++){
    text+= "<tr><td>"+arr[j].obj_id+"</td><td>"+arr[j].obj_name+"</td><td>"+arr[j].obj_price+"</td><td><button>Delete</button></tr>"
}





   text+= "</table>";


document.getElementById("res").innerHTML=text;

} 