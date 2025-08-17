import { Container, Typography, Box } from '@mui/material';
import UserDashboard from '@/components/UserDashboard';
import { StoreProvider } from '@/store/StoreProvider';
import axios from 'axios';

// Server-side function to fetch users
async function getUsers() {
    try {
        const response = await axios.get<RandomUserResponse>(
            "https://randomuser.me/api/?results=10"
        );

        const users = response.data.results.map(
            (user) =>
            ({
                id: user.login.uuid,
                name: user.name,
                email: user.email,
                phone: user.phone,
                location: user.location,
                picture: user.picture,
            } as User)
        );

        return users;
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}

export default async function SSRPage() {
    const initialUsers = await getUsers();

    // Create initial state for SSR
    const initialState = {
        users: initialUsers,
        filteredUsers: initialUsers,
        loading: false,
        error: null,
        searchTerm: "",
        selectedCountry: "",
        countries: Array.from(
            new Set(initialUsers.map((user) => user.location.country))
        ).sort() as string[],
    };

    return (
        <StoreProvider initialState={initialState}>
            <Container maxWidth="lg" sx={{ py: 4, overflow: 'hidden' }}>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        User Dashboard (SSR)
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Random User Data loaded on Server Side
                    </Typography>
                </Box>
                <UserDashboard isSSR />
            </Container>
        </StoreProvider>
    );
}
export const revalidate = 30;
