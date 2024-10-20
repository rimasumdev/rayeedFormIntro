// import Form from "./components/Forms/Form";
import HookForm from "./components/Hook/HookForm";
function App() {
  const handleSignUp = (name, email) => {
    console.log(name, email);
  };
  const handleLogin = (name, email) => {
    console.log(name, email);
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-center">React Form Intro</h1>
      {/* <Form /> */}
      <HookForm
        title="Sign Up"
        subtitle="Please sign up to our website"
        buttonText="Sign Up"
        onSubmit={handleSignUp}
      />
      <HookForm
        title="Login"
        subtitle="Please login to our website"
        buttonText="Login"
        onSubmit={handleLogin}
      />
    </>
  );
}

export default App;
