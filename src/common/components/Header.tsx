import { useMemo } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import BackIcon from '@mui/icons-material/ArrowBack';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FavoriteIcon from '@mui/icons-material/Star';
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '@app/common/hooks/useTheme';

type IProps = {
  title: string
};
export const Header = ({ title }: IProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isDarkMode, handleSwitchTheme } = useTheme();
  
  const hasBackButton = useMemo(() => {
    return pathname !== "/";
  }, [pathname]);

  const handleFavorited = () => {
    if (pathname === '/favorited') return;

    navigate('/favorited');
  };

  const handleBack = () => {
    navigate(-1);
  };


  return (
    <AppBar position="static">
      <Toolbar>
        {hasBackButton && (
          <IconButton onClick={handleBack}>
            <BackIcon />
          </IconButton>
        )}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <IconButton onClick={handleSwitchTheme}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton onClick={handleFavorited} edge="end">
          <FavoriteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
