function Button({ text, color, widthPercentage, onClick }) {
  return (
    <button
      className={`btn btn-${color || 'primary'} w-${widthPercentage || '100'} p-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
