/* eslint-disable react/prop-types */
function PanelTitle({ title, styles }) {
  const reformTitle = () => {
    return title
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
  };
  return (
    <h4 className={`font-semibold ${styles}select-none`}>{reformTitle()}</h4>
  );
}
export default PanelTitle;
