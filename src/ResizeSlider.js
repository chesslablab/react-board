import styles from './styles/slider';

const ResizeSlider = ({ setSliderValue }) => {
  return (
    <input
      type="range"
      min="30"
      max="100"
      defaultValue="100"
      style={styles}
      onChange={(e) => setSliderValue(e.target.value)}
    />
  );
};

export default ResizeSlider;
