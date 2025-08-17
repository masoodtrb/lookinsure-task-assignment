'use client';

import { Container, Box, Skeleton } from '@mui/material';
import UserDashboardSkeleton from '@/components/UserDashboardSkeleton';

export default function HomeSkeleton() {
    return (
        <Container maxWidth="lg" sx={{ py: 4, overflow: 'hidden' }}>
            {/* Header Section Skeleton */}
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                {/* Main title skeleton */}
                <Skeleton
                    variant="text"
                    width="300px"
                    height={48}
                    sx={{ mx: 'auto', mb: 2 }}
                />
                {/* Subtitle skeleton */}
                <Skeleton
                    variant="text"
                    width="250px"
                    height={32}
                    sx={{ mx: 'auto' }}
                />
            </Box>

            {/* Dashboard Skeleton */}
            <UserDashboardSkeleton />
        </Container>
    );
}
