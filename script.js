

import E1 from './new.js';





let text="<table><th>Id </th><th>Name</th><th>Basic Salary</th><th>Action<th>";

       
      text+= "<tr><td>"+E1.ID+"</td><td>"+E1.Name+"</td><td>"+E1.Sal+"</td><td><button>Delete</button></tr>"

  
  
  
  

    text+= "</table>";
  
  
  document.getElementById("res").innerHTML=text;

   

    



