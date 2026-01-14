import React from 'react';

// Theme Toggle Button Component
const ThemeToggleButton = ({ theme, toggleTheme }) => {
    const styles = {
        position: 'fixed',
        top: '1.5rem',
        right: '2rem',
        zIndex: 9999,
        background: theme === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: theme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '50px',
        padding: '0.75rem 1.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        color: theme === 'dark' ? '#FFFFFF' : '#1F2937',
        transition: 'all 0.3s ease',
    };

    return (
        <button onClick={toggleTheme} style={styles}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
};

export default ThemeToggleButton;
