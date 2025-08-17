'use client';

import { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserDashboard from '@/components/UserDashboard';
import { StoreProvider, useUserStoreShallow } from '@/store/StoreProvider';

function HomeContent() {
    const { fetchUsers } = useUserStoreShallow((state) => ({
        fetchUsers: state.fetchUsers,
    }));

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <Container maxWidth="lg" sx={{ py: 4, overflow: 'hidden' }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    User Dashboard
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Random User Data from API
                </Typography>
            </Box>
            <UserDashboard />
        </Container>
    );
}

export default function Home() {
    return (
        <StoreProvider>
            <HomeContent />
        </StoreProvider>
    );
}
