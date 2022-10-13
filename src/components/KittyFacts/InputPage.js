const InputPage = ({ page, pageCount, onChangePage }) => {
  return (
    <input
      type="number"
      min="1"
      max={pageCount}
      value={page}
      onChange={onChangePage}
    />
  );
};

export default InputPage;
