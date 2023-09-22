// Define an interface that maps theme names to SVG imports
interface ThemeIcons {
  [name: string]: string;
}

// Import SVGs as React components or direct paths depending on your setup
import TrainingIcon from '../../assets/training-icon.svg';
import GameIcon from '../../assets/game-icon.svg';
import AnalyticsIcon from '../../assets/analytics-icon.svg';

// Map theme names to the corresponding SVGs
const themeIcons: ThemeIcons = {
  Training: TrainingIcon,
  Game: GameIcon,
  'Results Analytics': AnalyticsIcon,
};

export default themeIcons;
