import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { friendHooks } from '../hooks/FriendsHooks';
import { Friend } from '../types/Friend';
import { AddressTooltip } from './AddressTooltip';

const FriendsTable: React.FC = () => {
    const [friends, setFriends] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchFriendsAndAddresses = async () => {
            try {
                const response = await friendHooks.getFriends();
                const friendsData: Friend[] = response.data;

                const friendsWithAddresses = await Promise.all(
                    friendsData.map(async (friend) => {
                        const addressResponse = await friendHooks.getAddressesByFriendId(friend.id);
                        return { ...friend, addresses: addressResponse.data };
                    })
                );

                setFriends(friendsWithAddresses);
            } catch (error) {
                console.error("Error fetching the friends or addresses", error);
            }
        };

        fetchFriendsAndAddresses();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Addresses</TableCell>
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
