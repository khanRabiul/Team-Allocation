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

  const [selectedTeam, setSelectedTeam] = useState("TeamB");

  // Function to handle team selection change
  const handleSelectedTeam = (event) => {
    setSelectedTeam(event.target.value);
  };

  // Function to handle employee card click and toggle team assignment
  const handleEmployeeCardClick = (event) => {
    const employeeId = parseInt(event.currentTarget.id);

    const transformedEmployees = employees.map((employee) =>
      employee.id === employeeId
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" } // Remove from team
          : { ...employee, teamName: selectedTeam } // Assign to selected team
        : employee
    );

    setEmployees(transformedEmployees);
  };

  return (
    <main>
      <div className="container mx-auto ">
        {/* Dropdown for selecting teams */}
        <div className="mb-8">
          <select
            value={selectedTeam}
            onChange={handleSelectedTeam}
            className="border-2 border-pink-600 rounded-md p-2 w-1/2"
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>

        {/* Employee cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              id={employee.id} // Set the employee id to the div
              onClick={handleEmployeeCardClick}
              key={employee.id}
              className={`shadow-md rounded-md hover:shadow-lg ${
                employee.teamName === selectedTeam
                  ? "border-2 rounded border-gray-400"
                  : ""
              }`}
            >
              {/* Display employee image */}
              <div>
                <img
                  src={employee.gender === "male" ? male : female}
                  className="w-full"
                  alt={employee.fullName}
                />
              </div>

              {/* Display employee details */}
              <div className="p-2">
                <h5 className="text-xl">
                  <strong className="mr-2">Full Name:</strong>
                  {employee.fullName}
                </h5>
                <p className="text-xl">
                  <strong className="mr-2">Designation:</strong>
                  {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Employees;
