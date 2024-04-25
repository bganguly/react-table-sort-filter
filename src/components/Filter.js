const Filter = ({ onChange }) => {
  return (
    <input
      placeholder="enter first few characters of month , eg 'ber' without quotes"
      onChange={onChange}
    />
  );
};

export default Filter;
