import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LayoutSelection from './components/LayoutSelection';
import CameraPage from './components/CameraPage';
import EditDownloadPage from './components/EditDownloadPage';

// Route constants
const ROUTES = {
  LANDING: 'landing',
  LAYOUT_SELECTION: 'layout-selection',
  CAMERA: 'camera',
  EDIT_DOWNLOAD: 'edit-download',
};

const App = () => {
  // State Management
  const [currentRoute, setCurrentRoute] = useState(ROUTES.LANDING);
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  // Theme Toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Navigation Functions
  const navigateToLayoutSelection = () => {
    setCurrentRoute(ROUTES.LAYOUT_SELECTION);
  };

  const navigateToCamera = (layoutId) => {
    setSelectedLayout(layoutId);
    setCurrentRoute(ROUTES.CAMERA);
  };

  const navigateToEditDownload = (photos) => {
    setCapturedPhotos(photos);
    setCurrentRoute(ROUTES.EDIT_DOWNLOAD);
  };

  const navigateBackToCamera = () => {
    setCapturedPhotos([]);
    setCurrentRoute(ROUTES.CAMERA);
  };

  const navigateBackToLayoutSelection = () => {
    setCapturedPhotos([]);
    setSelectedLayout(null);
    setCurrentRoute(ROUTES.LAYOUT_SELECTION);
  };

  const resetToLanding = () => {
    setCurrentRoute(ROUTES.LANDING);
    setSelectedLayout(null);
    setCapturedPhotos([]);
  };

  // Render Current Route
  const renderCurrentRoute = () => {
    switch (currentRoute) {
      case ROUTES.LANDING:
        return <LandingPage onGetStarted={navigateToLayoutSelection} theme={theme} toggleTheme={toggleTheme} />;

      case ROUTES.LAYOUT_SELECTION:
        return <LayoutSelection onSelectLayout={navigateToCamera} theme={theme} toggleTheme={toggleTheme} />;

      case ROUTES.CAMERA:
        return (
          <CameraPage
            selectedLayout={selectedLayout}
            onComplete={navigateToEditDownload}
            onBack={navigateBackToLayoutSelection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        );

      case ROUTES.EDIT_DOWNLOAD:
        return (
          <EditDownloadPage
            selectedLayout={selectedLayout}
            capturedPhotos={capturedPhotos}
            onBack={navigateBackToCamera}
            onChangeLayout={navigateBackToLayoutSelection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        );

      default:
        return <LandingPage onGetStarted={navigateToLayoutSelection} theme={theme} toggleTheme={toggleTheme} />;
    }
  };

  return (
    <div className="app">
      {renderCurrentRoute()}
    </div>
  );
};

export default App;