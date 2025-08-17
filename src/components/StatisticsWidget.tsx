'use client';

import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useUserStoreShallow } from '@/store/StoreProvider';
import { useMemo, Suspense } from 'react';
import StatisticsChartPlaceholder from './StatisticsChartPlaceholder';
import dynamic from 'next/dynamic';

// Lazy load the StatisticsChart component
const StatisticsChart = dynamic(() => import('./StatisticsChart'), {
    ssr: false,
    loading: () => <StatisticsChartPlaceholder />,
});

export default function StatisticsWidget() {
    const { users, filteredUsers } = useUserStoreShallow((state) => ({
        users: state.users,
        filteredUsers: state.filteredUsers,
    }));

    // Calculate statistics
    const totalUsers = users.length;
    const filteredUsersCount = filteredUsers.length;

    // Count users by country
    const countryStats = useMemo(() => {
        return users.reduce((acc, user) => {
            const country = user.location.country;
            acc[country] = (acc[country] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }, [users]);

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Statistics
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Typography variant="body1" color="text.secondary">
                    Total Users: {totalUsers}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Showing: {filteredUsersCount}
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Lazy Loaded Charts */}
            <Suspense fallback={<StatisticsChartPlaceholder />}>
                <StatisticsChart users={users} />
            </Suspense>

            <Divider sx={{ my: 2 }} />

            {/* Country List */}
            <Typography variant="subtitle1" gutterBottom>
                All Countries
            </Typography>

            <List dense>
                {Object.entries(countryStats)
                    .sort(([, a], [, b]) => b - a)
                    .map(([country, count]) => (
                        <ListItem key={country} sx={{ px: 0 }}>
                            <ListItemText
                                primary={country}
                                secondary={`${count} user${count !== 1 ? 's' : ''}`}
                            />
                        </ListItem>
                    ))}
            </List>
        </Box>
    );
}
