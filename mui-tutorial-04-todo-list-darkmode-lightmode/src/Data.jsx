import { Button, Card, CardHeader, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import DataGridToolbar from './DataGridToolbar';
import axios from 'axios';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 60,
        renderCell: (params) => {
            return (
                <Link style={{ color: "black" }} to={`/${params.value}`}>
                    <Typography>{params.value}</Typography>
                </Link>
            )
        }
    },
    {
        field: 'userId',
        headerName: 'User ID',
        width: 70,
    },
    {
        field: 'todo',
        headerName: 'Todo',
        width: 400,
    },
    {
        field: 'completed',
        headerName: 'Completed',
        width: 400,
        renderCell: (params) => {
            return params.value ? (
                <AssignmentTurnedInRoundedIcon sx={{ color: "green" }} />)
                : (
                    <AssignmentLateRoundedIcon sx={{ color: "orangered" }} />);
        }
    }
]

const Data = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchTodos() {
            setLoading(true);
            try {
                const response = await axios.get("https://dummyjson.com/todos?limit=150");
                setTodos(response.data.todos);
            } catch (errors) {
                console.log(errors);
            } finally {
                setLoading(false);
            }
        }
        fetchTodos();
    }, []);
    console.log(todos);
    return (
        <Card sx={{ padding: 5 }}>
            <CardHeader title="Todo List ⭐📎"></CardHeader>
            <DataGrid
                checkboxSelection
                components={{ Toolbar: DataGridToolbar, BaseButton: Button }}
                loading={loading}
                sx={{ height: 500 }}
                columns={columns}
                rows={todos}
                componentsProps={{
                    baseButton: {
                        variant: "outlined"
                    }
                }} />
        </Card>
    );
}

export default Data