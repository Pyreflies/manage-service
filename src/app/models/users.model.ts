export interface Users {
    id: string;
    name: string;
    email: string;
    roleCode: string;
    status: string;
}

export const _user: Users[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', roleCode: 'ADMIN', status: 'A' },
    { id: '2', name: 'Jame Smith', email: 'jame@example.com', roleCode: 'ADMIN', status: 'I' },
    { id: '3', name: 'Helen Coloe', email: 'helen@example.com', roleCode: 'MANAGER', status: 'I' },
    { id: '4', name: 'Sky Lorent', email: 'sky@example.com', roleCode: 'AMANAGER', status: 'A' },
    { id: '5', name: 'Sarah Smith', email: 'sarah@example.com', roleCode: 'SALE', status: 'A' },
    { id: '6', name: 'Michael Johnson', email: 'michael@example.com', roleCode: 'SALE', status: 'I' },
    { id: '7', name: 'Emily Brown', email: 'emily@example.com', roleCode: 'SALE', status: 'I' },
    { id: '8', name: 'David Wilson', email: 'david@example.com', roleCode: 'SALE', status: 'A' },
];