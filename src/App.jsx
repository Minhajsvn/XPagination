import { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import Pagination from './Pagination';

function App() {

  const [empData, setEmpData] = useState([]);
  const [currentPage, setCurrentPage ] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  let dataLimit = 10;

  const fetchData = async () => {

   try {
    const data = await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`);
    setEmpData(data.data);
   } catch (error) {
    alert("failed to fetch data");
    console.log(error.message)
   }

  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    // console.log("start",startIndex)
    const endIndex = startIndex + dataLimit;
    // console.log("end",endIndex)
    setPaginatedData(empData.slice(startIndex, endIndex));
}

  useEffect(() => {
    getPaginatedData()
},[currentPage, empData])

  useEffect(() => {
    fetchData();      
  },[]);
  return (
    <>
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            <th className='id'>ID</th>
            <th className='name'>Name</th>
            <th className='email'>Email</th>
            <th className='role'>Role</th>
          </tr>
        </thead>
        <tbody>
        {paginatedData.map((employee, key) => {
           return (
            <tr className='tableRow' key={key}>
              <td className='id'>{employee.id}</td>
              <td className='name'>{employee.name}</td>
              <td className='email'>{employee.email}</td>
              <td className='role'>{employee.role}</td>
          </tr>
           )
          
        })}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={5}/>
    </>
  )
}

export default App
