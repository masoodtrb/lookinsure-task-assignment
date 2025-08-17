'use client';

import { Box, Paper, Skeleton } from '@mui/material';

export default function UserDashboardSkeleton() {
    return (
        <Box>
            {/* Search and Filter Section Skeleton */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                    {/* Search input skeleton */}
                    <Skeleton variant="rectangular" width="100%" height={56} />
                    {/* Filter dropdown skeleton */}
                    <Skeleton variant="rectangular" width={200} height={56} />
                </Box>
            </Paper>

            {/* Main Content Skeleton */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 3,
                minWidth: 0
            }}>
                {/* Statistics Widget Skeleton */}
                <Box sx={{
                    width: { xs: '100%', lg: '30%' },
                    minWidth: 0
                }}>
                    <Paper sx={{ p: 3, height: 'fit-content' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {/* Title skeleton */}
                            <Skeleton variant="text" width="60%" height={32} />
                            {/* Stats items skeleton */}
                            {[1, 2, 3].map((item) => (
                                <Box key={item} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Skeleton variant="text" width="40%" height={24} />
                                    <Skeleton variant="text" width="20%" height={24} />
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Box>

                {/* User Cards Skeleton */}
                <Box sx={{
                    width: { xs: '100%', lg: '70%' },
                    minWidth: 0
                }}>
                    <Paper sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {/* Title skeleton */}
                            <Skeleton variant="text" width="40%" height={32} />

                            {/* User cards skeleton */}
                            {[1, 2, 3, 4].map((card) => (
                                <Box key={card} sx={{
                                    display: 'flex',
                                    gap: 2,
                                    p: 2,
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 1
                                }}>
                                    {/* Avatar skeleton */}
                                    <Skeleton variant="circular" width={60} height={60} />

                                    {/* User info skeleton */}
                                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Skeleton variant="text" width="70%" height={24} />
                                        <Skeleton variant="text" width="50%" height={20} />
                                        <Skeleton variant="text" width="60%" height={20} />
                                    </Box>

                                    {/* Action buttons skeleton */}
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Skeleton variant="rectangular" width={80} height={36} />
                                        <Skeleton variant="rectangular" width={80} height={36} />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}
