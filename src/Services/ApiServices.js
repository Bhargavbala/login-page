
const EMP_DATA_URL = "http://localhost:3000/employees";

class ApiServices {
    
    addEmployeeDetail(employee){
        return fetch(EMP_DATA_URL , {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(employee)
        }).then(()=>{
            console.log('');
        })
    }

    fetchEmployeeDetailsById(id){
        return fetch(EMP_DATA_URL + "/" +id);
    }

    

}


export default new ApiServices();