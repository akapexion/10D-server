const salaryLogic = (request, response, next) => {
    const salary = request.query.salary;

    if(!salary){
        response.send("Salary not provided");
    }
    else if(salary < 30000){
        response.send("Salary is below 30K");
    }
    else {
        next();
    }
}

export default salaryLogic;