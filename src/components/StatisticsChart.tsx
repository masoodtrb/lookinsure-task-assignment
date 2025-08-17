'use client';

import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { memo, useMemo } from 'react';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function StatisticsChart({ users }: { users: User[] }) {

    // Count users by country
    const countryStats = useMemo(() => {
        return users.reduce((acc, user) => {
            const country = user.location.country;
            acc[country] = (acc[country] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }, [users]);

    // Prepare chart data
    const pieChartData = useMemo(() => {
        const sortedCountries = Object.entries(countryStats)
            .sort(([, a], [, b]) => b - a);

        return {
            labels: sortedCountries.map(([country]) => country),
            datasets: [
                {
                    data: sortedCountries.map(([, count]) => count),
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#C9CBCF',
                        '#8BC34A',
                        '#E91E63',
                        '#00BCD4',
                        '#CDDC39',
                        '#FF5722',
                        '#607D8B'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff',
                },
            ],
        };
    }, [countryStats]);

    const barChartData = useMemo(() => {
        const sortedCountries = Object.entries(countryStats)
            .sort(([, a], [, b]) => b - a);

        return {
            labels: sortedCountries.map(([country]) => country),
            datasets: [
                {
                    label: 'Users',
                    data: sortedCountries.map(([, count]) => count),
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        };
    }, [countryStats]);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    boxWidth: 12,
                    padding: 10,
                },
            },
        },
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Users by Country',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    return (
        <>
            {/* Pie Chart */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Top Countries Distribution
                </Typography>
                <Box sx={{ height: 200, position: 'relative' }}>
                    <Pie data={pieChartData} options={chartOptions} />
                </Box>
            </Box>

            {/* Bar Chart */}
            <Box sx={{ mb: 3 }}>
                <Box sx={{ height: 250, position: 'relative' }}>
                    <Bar data={barChartData} options={barChartOptions} />
                </Box>
            </Box>
        </>
    );
}
export default memo(StatisticsChart);