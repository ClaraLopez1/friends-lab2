import { useState, useEffect } from 'react';
import { Friend } from '../types/Friend';
import axios from 'axios';
import { baseUrl } from '../utils/BaseUrl';

export const useFriends = () => {
    const [friends, setFriends] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchFriendsAndAddresses = async () => {
            try {
                const response = await axios.get(`${baseUrl}/friends`);
                const friendsData: Friend[] = response.data;

                const friendsWithAddresses = await Promise.all(
                    friendsData.map(async (friend) => {
                        const addressResponse = await axios.get(`${baseUrl}/friends/${friend.id}/addresses`);
                        const addresses = addressResponse.data;
                        return { ...friend, addresses };
                    })
                );

                setFriends(friendsWithAddresses);
            } catch (err) {
                console.error('Error fetching friends and addresses:', err);
            }
        };

        fetchFriendsAndAddresses();
    }, []);

    return { friends };
};
