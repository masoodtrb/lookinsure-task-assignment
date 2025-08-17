'use client';

import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useUserStoreShallow } from '@/store/StoreProvider';
import useDebounce from '@/lib/hooks/useDebounce';
import { useEffect, useState } from 'react';

export default function SearchAndFilter() {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const { selectedCountry, countries, setSelectedCountry, setSearchTerm } = useUserStoreShallow((state) => ({
        selectedCountry: state.selectedCountry,
        countries: state.countries,
        setSelectedCountry: state.setSelectedCountry,
        setSearchTerm: state.setSearchTerm,
    }));

    const debouncedSearchTerm = useDebounce(localSearchTerm, 500);

    useEffect(() => {
        setSearchTerm(debouncedSearchTerm);
    }, [debouncedSearchTerm, setSearchTerm]);

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Search & Filter
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                    label="Search by name or email"
                    variant="outlined"
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                    sx={{ minWidth: 300, flexGrow: 1 }}
                />
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Filter by Country</InputLabel>
                    <Select
                        value={selectedCountry}
                        label="Filter by Country"
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>All Countries</em>
                        </MenuItem>
                        {countries.map((country) => (
                            <MenuItem key={country} value={country}>
                                {country}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}
