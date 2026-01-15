// Theme configuration - Pure JS (no JSX)
export const getThemeColors = (theme) => {
    if (theme === 'light') {
        return {
            // Light Theme
            background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #F3F4F6 100%)',
            backgroundGradient: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
            text: '#111827',
            textSecondary: '#4B5563',
            cardBg: 'rgba(255, 255, 255, 0.8)',
            cardBorder: 'rgba(0, 0, 0, 0.1)',
            glassBg: 'rgba(255, 255, 255, 0.9)',
            glassBorder: 'rgba(0, 0, 0, 0.15)',
            navBg: 'rgba(255, 255, 255, 0.9)',
            badge: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
            buttonText: '#FFFFFF',
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
        navBg: 'rgba(15, 10, 30, 0.8)',
        badge: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
        buttonText: '#FFFFFF',
    };
};
