// Theme configuration - Pure JS (no JSX)
export const getThemeColors = (theme) => {
    if (theme === 'light') {
        return {
            // Light Theme
            background: '#FFFFFF',
            backgroundGradient: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
            text: '#1F2937',
            textSecondary: '#6B7280',
            cardBg: 'rgba(0, 0, 0, 0.03)',
            cardBorder: 'rgba(0, 0, 0, 0.1)',
            glassBg: 'rgba(255, 255, 255, 0.95)',
            glassBorder: 'rgba(0, 0, 0, 0.1)',
        };
    }

    // Dark Theme (default)
    return {
        background: '#0F0A1E',
        backgroundGradient: 'radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        text: '#FFFFFF',
        textSecondary: 'rgba(255, 255, 255, 0.7)',
        cardBg: 'rgba(255, 255, 255, 0.05)',
        cardBorder: 'rgba(255, 255, 255, 0.1)',
        glassBg: 'rgba(255, 255, 255, 0.05)',
        glassBorder: 'rgba(255, 255, 255, 0.1)',
    };
};
