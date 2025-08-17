'use client';

import { AppBar, Toolbar, Button, Box } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const currentPath = usePathname();

    return (
        <>
            <AppBar position="static" sx={{ mb: 3 }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button
                            color="inherit"
                            component={Link}
                            href="/"
                            sx={{
                                mr: 2,
                                backgroundColor: currentPath === '/' ? 'rgba(255,255,255,0.1)' : 'transparent'
                            }}
                        >
                            Client-Side
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            href="/ssr"
                            sx={{
                                backgroundColor: currentPath === '/ssr' ? 'rgba(255,255,255,0.1)' : 'transparent'
                            }}
                        >
                            Server-Side (SSR)
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
        </>
    )
}

export default MainLayout