import { Address } from './Address';

export interface Friend {
    id: string;
    name: string;
    email: string;
    addresses?: Address[];
}