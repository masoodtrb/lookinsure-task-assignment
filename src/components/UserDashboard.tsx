'use client';

import { Box, Paper, CircularProgress, Alert } from '@mui/material';
import SearchAndFilter from './SearchAndFilter';
import StatisticsWidget from './StatisticsWidget';
import UserCardList from './UserCardList';
import { useUserStoreShallow } from '@/store/StoreProvider';

export default function UserDashboard() {
    const { loading, error, filteredUsers } = useUserStoreShallow((state) => ({
        loading: state.loading,
        error: state.error,
        filteredUsers: state.filteredUsers,
    }));

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                <CircularProgress size={60} />
            </Box>
        );
    }

    if (error) {
        return (
            <Alert severity="error" sx={{ mb: 2 }}>
                {error}
            </Alert>
        );
    }

    return (
        <Box>
            {/* Search and Filter Section */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <SearchAndFilter />
            </Paper>

            {/* Main Content */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 3,
                minWidth: 0
            }}>
                {/* Statistics Widget */}
                <Box sx={{
                    width: { xs: '100%', lg: '30%' },
                    minWidth: 0
                }}>
                    <Paper sx={{ p: 3, height: 'fit-content' }}>
                        <StatisticsWidget />
                    </Paper>
                </Box>

                {/* User Cards */}
                <Box sx={{
                    width: { xs: '100%', lg: '70%' },
                    minWidth: 0
                }}>
                    <Paper sx={{ p: 3 }}>
                        <UserCardList users={filteredUsers} />
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}
