import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";

import './DetailScreen.css';
import { axios } from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import DataTable from  'react-data-table-component';
import style from 'style-components'
import Table from '../../component/TableComponent';
import './DetailScreen.css';
const URL = 'https://jsonplaceholder.typicode.com/users'

const DetailScreen =()=>{
    const [players, setPlayers]= useState([]);
    const [employees, setEmployees] = useState([])
    useEffect(()=>{

        getData();
           
    //   setPlayers(JSON.parse(localStorage.getItem("allplayers")))  
    },[])
    const createRowSpanTwo =(cell, row,rowIndex, colIndex)=>{
        console.log("Function invoked")
        return{rowSpan: '3'}
    }

    const getData = async () => {

        
       

        fetch(URL).then(res => res.json())
            .then(
                (result) => {
                    console.log("datadatadata", result);
                    setEmployees(result);
                },

                
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("errorerrorerror", error);
                }
              )
    }
    
    
    const columns =[{
        
        Header:'Name',
       accessor: 'name',
       classselector:"column-style"
    },{
        
        Header:'Age',
        accessor: 'age',
        classselector:"column-style"  
    },{
        
        Header:'Gender',
        accessor: 'gender',
        classselector:"column-style" 
    },{
        
        Header:'Country',
        accessor: 'country',
        classselector:"column-style"

    },{
       
        Header:'Category',
        accessor: 'category',
        classselector:"column-style"   

    },
    {
        
        Header:'Vaccination Status',
        accessor: 'vaccinationstatus',
        classselector:"column-style"   

    },{
        accessor: 'previousMedalHistory',
        columns:[
        {Header:'Gold', accessor:"Previous Medal History.gold"},
        {Header:'Silver', accessor:"Previous Medal History.silver"},
        {Header:'Bronze', accessor:"Previous Medal History.bronze"},
         
         ], 
        }
    
    ];

    const renderBody = () => {
        return employees && employees.map(({ id, name, email, phone }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td className='opration'>
                        <button onClick={() =>{}}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Name', 'Age', 'Gender', 'Country','Category','is vaccinated','Previous Medal History']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    
    return(
        <div style={{marginTop:40}}>
                       <Container>
                       <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
                
            </Container>

        </div>
    )
}
export default DetailScreen;