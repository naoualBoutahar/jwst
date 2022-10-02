import React from 'react'

import { Container } from '@mui/material'

function Layout({ children }) {
    return (
        <>
            <main >
                <Container maxWidth="inherit" sx={{ my: 4 }}>
                    {children}
                </Container>
            </main>

        </>
    )
}

export default Layout