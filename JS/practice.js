function saveEmpDetails()
{

const name=document.getElementById("ename").value;
const empId=document.getElementById("eid").value;
const jDate=document.getElementById("jdid").value;
const hWorked=Number(document.getElementById("hwid").value);
const desig=document.getElementById("desig").value;

const employee={name:"name",employeeId:"empId",joiningDate:"jDate",hoursWorked:"hWorked",designation:"desig"};
 
var salary=0;

        if(desig=="manager")
        {
            salary = (hWorked*90);
        }
        else if(desig=="consultant")
        {
            salary = (hWorked*70);
        }
        else if(desig=="trainee")
        {
            salary = (hWorked*45);
        }
 var outputMess = name+"  is a "+" "+desig+" "+" and gets Salary "+"$"+salary;
        localStorage.setItem('salaryByDesig',outputMess);
        
}

