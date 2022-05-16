
const arr =[];
var  Arr;
class Employee{
    constructor(ID,Name,Sal){
        this.ID=ID;
        this.Name=Name;
        this.Sal=Sal;
    }
}



function check(){
    var id=document.getElementById("ID").value;
    var name=document.getElementById("Name").value;
    var sal=document.getElementById("Sal").value;


    let E1= new Employee(id,name,sal);
   Arr=JSON.stringify(E1);


   

    Show();

    
}

function Show(){
    const arr=JSON.parse(Arr);
    let text="<table><th>Id  </th><th>Name</th><th>Basic Salary</th><th>Action<th>";
    for(j=0;j<arr.length;j++){
        text+= "<tr><td>"+arr[j].ID+"</td><td>"+arr[j].Name+"</td><td>"+arr[j].Sal+"</td><td><button>Delete</button></tr>"
    }
    
    
    
    
    
       text+= "</table>";
    
    
    document.getElementById("res").innerHTML=text;
}

