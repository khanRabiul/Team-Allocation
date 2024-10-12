import { useState } from "react";
import female from "../images/female.jpeg";
import male from "../images/male.jpeg";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);
  return (
    <main>
      <div className="container mx-auto grid grid-cols-4 gap-6">
        {employees.map((employee) => (
          <div key={employee.id} className="shadow-md rounded-md ">
           <div>
              <img src={employee.gender === "male" ?  male : female}
            className="w-full" />
           </div>


           {/* or  */}
            {/* <div>
              {employee.gender === "male" ? (
                <img src={male} 
                className="w-full"/>
              ) : (
                <img src={female} 
                className="w-full"/>
              )}
            </div> */}

            
            <div className="p-2">
              <h5 className="text-xl">
                <strong className="mr-2">Full Name:</strong>
                {employee.fullName}
              </h5>
              <p className="text-xl">
                <strong className="mr-2"> Dessignation:</strong>
                {employee.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Employees;
