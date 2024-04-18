export const SignUpButton = ({ icon, iconType, label, onBtnClicked }) => {
  const handleBtnClicked = () => {
    onBtnClicked();
  };

  return (
    <button
      className="w-96 bg-yellow-400 flex gap-2 items-center justify-center py-2 px-3"
      onClick={handleBtnClicked}
    >
      <span>
        <img src={icon} className="w-3" alt={iconType} />
      </span>
      <span className="text-left">{label}</span>
    </button>
  );
};

export const UserLoginButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-96 bg-neutral-500 flex items-center justify-around py-2 px-3"
    >
      {label}
    </button>
  );
};
