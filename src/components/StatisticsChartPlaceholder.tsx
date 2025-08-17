'use client';

import { Box, Skeleton, Typography } from '@mui/material';

export default function StatisticsChartPlaceholder() {
    return (
        <>
            {/* Pie Chart Placeholder */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Top Countries Distribution
                </Typography>
                <Box sx={{ height: 200, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Skeleton
                        variant="circular"
                        width={150}
                        height={150}
                        animation="wave"
                    />
                </Box>
            </Box>

            {/* Bar Chart Placeholder */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Users by Country
                </Typography>
                <Box sx={{ height: 250, position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-around', height: '100%', px: 2 }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <Skeleton
                                key={index}
                                variant="rectangular"
                                width={30}
                                height={`${Math.random() * 60 + 40}%`}
                                animation="wave"
                                sx={{ minHeight: 40 }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
