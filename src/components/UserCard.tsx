'use client';

import { useState } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Avatar,
    Box,
    Modal,
    Chip,
} from '@mui/material';

interface UserCardProps {
    user: User;
}

export default function UserCard({ user }: UserCardProps) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0, // Prevent overflow in flex containers
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                    }
                }}
            >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Avatar
                        src={user.picture.medium}
                        alt={`${user.name.first} ${user.name.last}`}
                        sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="h6" component="h3" gutterBottom>
                        {user.name.first} {user.name.last}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {user.email}
                    </Typography>
                    <Chip
                        label={user.location.country}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mt: 1 }}
                    />
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleOpenModal}
                    >
                        Show More Details
                    </Button>
                </CardActions>
            </Card>

            {/* Modal for additional details */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="user-details-modal"
                aria-describedby="user-details-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    overflow: 'auto'
                }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {user.name.first} {user.name.last}
                    </Typography>

                    <Box sx={{ mb: 3, textAlign: 'center' }}>
                        <Avatar
                            src={user.picture.medium}
                            alt={`${user.name.first} ${user.name.last}`}
                            sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Contact Information
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Email:</strong> {user.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Phone:</strong> {user.phone}
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Address
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {user.location.street.number} {user.location.street.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {user.location.city}, {user.location.country}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {user.location.postcode}
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Button
                            variant="outlined"
                            onClick={handleCloseModal}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
