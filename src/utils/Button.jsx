export const SignUpButton = ({ icon, iconType, label }) => {
  return (
    <button className="w-42 bg-yellow-400 flex items-center justify-around py-2 px-3">
      <span>
        <img src={icon} className="w-3" alt={iconType} />
      </span>
      <span className="text-left">{label}</span>
    </button>
  );
};

export const UserLoginButton = ({ label }) => {
  return (
    <button className="w-96 bg-neutral-500 flex items-center justify-around py-2 px-3">
      {label}
    </button>
  );
};
