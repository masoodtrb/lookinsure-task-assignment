import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from '@jest/globals';
import UserCard from '../UserCard';

const mockUser = {
    id: 'test-id',
    name: {
        first: 'John',
        last: 'Doe'
    },
    email: 'john.doe@example.com',
    phone: '+1-555-123-4567',
    location: {
        country: 'United States',
        city: 'New York',
        street: {
            name: 'Main St',
            number: 123
        },
        postcode: '10001'
    },
    picture: {
        medium: 'https://example.com/avatar.jpg'
    }
};

describe('UserCard', () => {
    it('renders user information correctly', () => {
        render(<UserCard user={mockUser} />);

        expect(screen.getByText('John Doe')).toBeDefined();
        expect(screen.getByText('john.doe@example.com')).toBeDefined();
        expect(screen.getByText('United States')).toBeDefined();
        expect(screen.getByText('Show More Details')).toBeDefined();
    });

    it('opens modal when "Show More Details" button is clicked', () => {
        render(<UserCard user={mockUser} />);

        const button = screen.getByText('Show More Details');
        fireEvent.click(button);

        // Check for modal-specific content that only appears in the modal
        expect(screen.getByText('+1-555-123-4567')).toBeDefined();
        expect(screen.getByText('123 Main St')).toBeDefined();
        expect(screen.getByText('New York, United States')).toBeDefined();
        expect(screen.getByText('10001')).toBeDefined();
        expect(screen.getByText('Contact Information')).toBeDefined();
        expect(screen.getByText('Address')).toBeDefined();
    });

    it('closes modal when close button is clicked', () => {
        render(<UserCard user={mockUser} />);

        // Open modal
        const showButton = screen.getByText('Show More Details');
        fireEvent.click(showButton);

        // Close modal
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);

        // Modal should be closed
        expect(screen.queryByText('+1-555-123-4567')).toBeNull();
    });
});
