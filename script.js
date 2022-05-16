
var   arr=[];
var Arr;
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
  try{  var sal=document.getElementById("Sal").value;
       if(sal<10000||sal>50000)
          throw e;
          sal=sal*1.10;
          let E1= new Employee(id,name,sal);
            Arr=JSON.stringify(E1);
            arr.push(Arr);
        

   


}catch(e){
    alert("Enter salary only between 10,000 to 50,000");

}
 //Show();
 Show = () => {
    let text="<table><th>Id </th><th>Name</th><th>Salary</th>";
      for(j=0;j<arr.length;j++){
  let t=JSON.parse(arr[j]);
     
     text+= "<tr><td>"+t.Name+"</td><td>"+((t.Sal*15)/100)+"</td><td><button>Delete</button></tr>";
  }
  return text;

 }
 document.getElementById("res").innerHTML=Show();


}
    
  



