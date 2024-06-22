import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCreateAccount } from "./api/use-create-account";
import { Button } from "@nextui-org/button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccountMutation = useCreateAccount();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const requestData = { name, email, password };
    createAccountMutation.mutate(requestData);
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
        <div className="grid gap-4">
          <div className="space-y-2">
            <h1>Name</h1>
            <Input
              id="name"
              placeholder="John Doe"
              required
              title="Please enter a valid name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
        </div>
        <div className="space-y-2">
          <h1>Password</h1>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className={`flex bg-neutral-950 text-neutral-100 px-10 py-3 rounded-md mt-7 mx-auto justify-center ${
            createAccountMutation.isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={createAccountMutation.isPending}
        >
            {createAccountMutation.isPending ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
