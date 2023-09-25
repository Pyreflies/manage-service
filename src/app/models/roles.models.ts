export interface Roles {
    id: string;
    roles: string;
    code: string;
    status: string;
}

export const _roles: Roles[] = [
    { id: '1', roles: 'Admin', code: 'ADMIN', status: 'Active' },
    { id: '2', roles: 'Manager', code: 'MANAGER', status: 'Active' },
    { id: '3', roles: 'Asistant Manager', code: 'AMANAGER', status: 'Active' },
    { id: '4', roles: 'Salesman', code: 'SALE', status: 'Active' },
];