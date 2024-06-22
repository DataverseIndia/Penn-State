import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useLoginAccount } from "./api/use-login-account";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createLoginMutation = useLoginAccount();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const requestData = { email, password };
    createLoginMutation.mutate(requestData);
  };

  return (
    <div className="mx-auto space-y-6 justify-center items-center">
      <div className="space-y-2 text-center pt-32">
        <h1 className="text-3xl font-bold">Welcome Admin</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your details to get started.
        </p>
      </div>
      <form className="space-y-4 w-[30rem]" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h1>Email</h1>
          <Input
            id="email"
            type="email"
            placeholder="something@gmail.com"
            required
            pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
            title="Please enter a valid email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <h1>Password</h1>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className={`flex bg-neutral-950 text-neutral-100 px-10 py-3 rounded-md mt-7 mx-auto justify-center ${
            createLoginMutation.isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={createLoginMutation.isPending}
        >
          {createLoginMutation.isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
