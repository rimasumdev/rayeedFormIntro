import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState([]);
  const [notification, setNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = formData.some(
      (data) =>
        data.email === e.target.email.value || data.name === e.target.name.value
    );
    if (isDuplicate) {
      setNotification(true);
    } else {
      setFormData([
        ...formData,
        { name: e.target.name.value, email: e.target.email.value },
      ]);
      setNotification(false);
    }
  };
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="w-1/2 mx-auto flex justify-center items-center">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full"
              name="name"
            />
            <input
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
              Submit
            </button>
            {notification && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>Name or Email is already exists!</span>
                </div>
              </div>
            )}
            {/* <p>{email}</p> */}
          </form>
        </div>

        <div className="container mx-auto mt-20 px-10">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
