import styled from "styled-components";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../container/Dashboard';
import { useSelector } from "react-redux";
import { setUsers } from "../redux/actions/usersActions";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRouter } from "next/router";
import { deleteUserById } from "../api";
import AddIcon from '@material-ui/icons/Add';

const UsersWrapper = styled.div`
Table{
    min-width: 650px;
}
`

const Users = () => {
    const router = useRouter();
    const users = useSelector(state => state.users.data);

    const deleteUser = id => {
        deleteUserById(id).then(res => {
            if (res) alert("success")
            else alert("error")
        })
    };




    useEffect(async () => {
        const res = await setUsers();
        console.log(res);
    }, [])

    return (
        <Dashboard>
            <UsersWrapper>
                <h1 className="text-center">Users</h1>
                <Button onClick={() => router.push(`${router.asPath}/add`)}> <AddIcon /></Button>
                <TableContainer className="bg-light" component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((v, i) => (
                                <TableRow key={i}  >
                                    <TableCell >{v.id}</TableCell>
                                    <TableCell >{v.name}</TableCell>
                                    <TableCell>{v.email}</TableCell>
                                    <TableCell>{v.phone}</TableCell>
                                    <TableCell >
                                        <Button onClick={() => router.push(`/users/${v.id}`)}><VisibilityIcon /></Button>
                                        <Button onClick={() => deleteUser(v.id)}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </UsersWrapper>
        </Dashboard>
    )
}

export default Users
