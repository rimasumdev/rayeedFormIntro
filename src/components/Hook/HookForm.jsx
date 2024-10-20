import useInputState from "../../hooks/useInputState";
import PropTypes from "prop-types";

const HookForm = ({ title, subtitle, buttonText, onSubmit }) => {
  const name = useInputState("");
  const email = useInputState("");
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    onSubmit(name.value, email.value);
  };
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="w-1/2 mx-auto flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">{subtitle}</p>
          <form className="space-y-4" onSubmit={handleLocalSubmit}>
            <input
              {...name}
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full"
              name="name"
            />
            <input
              {...email}
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full "
              name="email"
            />
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary w-full"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HookForm;

HookForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
