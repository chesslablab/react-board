import styles from './styles';

const ResizeSlider = ({ setSliderValue }) => {
  return (
    <input
      type="range"
      min="30"
      max="100"
      defaultValue="100"
      style={styles.slider}
      onChange={(e) => setSliderValue(e.target.value)}
    />
  );
};

export default ResizeSlider;
