'use client';

import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useUserStoreShallow } from '@/store/StoreProvider';

export default function SearchAndFilter() {
    const { searchTerm, selectedCountry, countries, setSearchTerm, setSelectedCountry } = useUserStoreShallow((state) => ({
        searchTerm: state.searchTerm,
        selectedCountry: state.selectedCountry,
        countries: state.countries,
        setSearchTerm: state.setSearchTerm,
        setSelectedCountry: state.setSelectedCountry,
    }));

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Search & Filter
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                    label="Search by name or email"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
