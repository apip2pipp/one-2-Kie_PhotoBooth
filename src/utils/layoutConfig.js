// Layout Configuration for One 2 Kie Photo Booth
export const LAYOUTS = {
    A: {
        id: 'A',
        name: 'Layout A',
        poses: 4,
        gridType: 'vertical-strip',
        description: '4 Pose dalam strip vertikal',
        aspectRatio: '1:4'
    },
    B: {
        id: 'B',
        name: 'Layout B',
        poses: 3,
        gridType: 'vertical-strip',
        description: '3 Pose dalam strip vertikal',
        aspectRatio: '1:3'
    },
    C: {
        id: 'C',
        name: 'Layout C',
        poses: 2,
        gridType: 'vertical-strip',
        description: '2 Pose dalam strip vertikal',
        aspectRatio: '1:2'
    },
    D: {
        id: 'D',
        name: 'Layout D',
        poses: 6,
        gridType: 'grid-2x3',
        description: '6 Pose dalam grid 2x3',
        aspectRatio: '2:3'
    }
};

// Default frame colors
export const DEFAULT_FRAME_COLORS = [
    '#FF6B9D', // Pink
    '#6C5CE7', // Purple
    '#00D2D3', // Cyan
    '#FFD93D', // Yellow
    '#6BCF7F', // Green
    '#FF8787', // Coral
    '#A29BFE', // Light Purple
    '#74B9FF'  // Light Blue
];
