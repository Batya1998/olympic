import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import DataTable from  'react-data-table-component';
import style from 'style-components'
import Table from '../../component/TableComponent';
import './DetailScreen.css';

const DetailScreen =()=>{
    const [players, setPlayers]= useState([]);
    useEffect(()=>{
        fetch("https://612faBa65fc50700175f16d6.mockapi.io/api/olympic").then(res=>{
            return res.json()
        }).then(data=>{
            setPlayers(data);
        })
    //   setPlayers(JSON.parse(localStorage.getItem("allplayers")))  
    },[])
    const createRowSpanTwo =(cell, row,rowIndex, colIndex)=>{
        console.log("Function invoked")
        return{rowSpan: '3'}
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
    console.log("allplayers",players)
    return(
        <div style={{marginTop:40}}>
                       <Container>
                <Table 
                onHeaderRow={(record, index)=>{
                    console.log("headerRecors",record)
                  
                    return {props:{rowSpan:2}}
                }}
rowClassname="table-wrap" tableLayout="auto" data={players} columns={columns} />
                
            </Container>

        </div>
    )
}
export default DetailScreen;