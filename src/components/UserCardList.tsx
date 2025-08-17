'use client';

import { Typography, Box } from '@mui/material';
import UserCard from './UserCard';

interface UserCardListProps {
    users: User[];
}

export default function UserCardList({ users }: UserCardListProps) {
    if (users.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" color="text.secondary">
                    No users found matching your criteria
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', minWidth: 0 }}>
            <Typography variant="h6" gutterBottom>
                Users ({users.length})
            </Typography>
            <Box sx={{
                width: '100%',
                minWidth: 0,
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                    xl: 'repeat(3, 1fr)'
                },
                gap: { xs: 2, sm: 3 },
                overflow: 'hidden'
            }}>
                {users.map((user) => (
                    <Box key={user.id} sx={{ minWidth: 0 }}>
                        <UserCard user={user} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
