export const SignUpButton = ({ id, icon, iconType, label }) => {
  const handleSignup = () => {
    console.log(label);
    if (label == "Sign Up With Gmail") {
      console.log("A");
    } else if (label == "Sign In With Gmail") {
      console.log("B");
    }
  };

  return (
    <button
      key={id}
      onClick={handleSignup}
      className="w-72 flex items-center justify-around py-4 px-5 border rounded-3xl"
    >
      <span>
        <img src={icon} className="w-6" alt={iconType} />
      </span>
      <span className="text-left">{label}</span>
    </button>
  );
};
