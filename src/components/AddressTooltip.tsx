import React from 'react';
import { Tooltip } from '@mui/material';
import { Address } from '../types/Address';

interface AddressTooltipProps {
    addresses?: Address[];
}

export const AddressTooltip: React.FC<AddressTooltipProps> = ({ addresses }) => {
    return addresses && addresses.length > 0 ? (
        <Tooltip
            title={
                <div>
                    {addresses.map((address, index) => (
                        <div key={index}>
                            {address.street}, {address.city}, {address.state}, {address.country}, {address.zip}
                        </div>
                    ))}
                </div>
            }
        >
            <span style={{ cursor: 'pointer', color: '#001E8D', textDecoration: 'underline', fontFamily: 'sans-serif' }}>View Addresses</span>
        </Tooltip>
    ) : (
        <span>No Addresses</span>
    );
};
