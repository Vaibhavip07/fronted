import React, { useEffect, useState } from 'react';
import './invoiceui.css';
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const InvoiceUi = () => {
    const [data, setData] = useState([]);
    const [users,setUsers]=useState([]);
    const api="http://localhost:8080/invoice";
    const {invoiceId}=useParams();
    const navigate=useNavigate();
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        

        fetchData();
        loadUsers();
        return () => {
            
            setData([]);
        };
    }, []);

    const loadUsers = async ()=>{
        const result = await axios.get(api);
        setUsers(result.data);
    }

    function handleAddButton() {
        navigate('/addInvoice');
    }

    const handleClearButton=async (invoiceId)=> {
      const result=await axios.delete(`http://localhost:8080/invoice/${invoiceId}`)   
      loadUsers(); 
      navigate('/home'); 
  
    };
    const handleUpdateButton=async (invoiceId)=> {
        navigate(`/updateInvoice/${invoiceId}`);
    
      };

    return (
        <div className="main-container">
            <div className='tcontainer'>
                <table>
                    <thead>
                        <tr>
                            
                            <th>Vendor</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>{user.vendor}</td>
                                        <td>{user.product}</td>
                                        <td>{user.amount}</td>
                                        <td>{user.date}</td>
                                        <td>Pending</td>
                                        <td><button className='addbtn' onClick={() => handleClearButton(user.id)}>Clear</button>
                                        <button className='updatebtn' onClick={() => handleUpdateButton(user.id)}>Update</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className='addcl'>
                    <addbtn>
                    <button  onClick={()=>handleAddButton()}>ADD+</button>
                    </addbtn>
                </div>
            </div>
        </div>
    );
};

export default InvoiceUi;
