import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useFriends } from '../hooks/UseFriends';
import { AddressTooltip } from './AddressTooltip';

const FriendsTable: React.FC = () => {
    const { friends } = useFriends();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Addresses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {friends.map((friend) => (
                        <TableRow key={friend.id}>
                            <TableCell>{friend.name}</TableCell>
                            <TableCell>{friend.email}</TableCell>
                            <TableCell>
                                <AddressTooltip addresses={friend.addresses} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FriendsTable;
