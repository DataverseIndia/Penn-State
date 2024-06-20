import { Input } from "@/components/ui/input"
import { Button } from "@nextui-org/button"
import { FormInput } from "./register/components/form-input"

const Register = () => {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12 min-h-screen">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome Admin</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your details to get started.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h1>Name</h1>
            <Input id="name" placeholder="John Doe" required pattern="^[a-zA-Zs]+$" title="Please enter a valid name" />
          </div>
          <div className="space-y-2">
            <h1>Email</h1>
            <FormInput id="email" type="email " placeholder={"something@gmail.com"} required={false} pattern="^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$" title={"Please enter a valid email address"}/>
          </div>
        </div>
        <div className="space-y-2">
          <h1>Password</h1>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          />
        </div>
        <Button type="submit" className="w-full rounded-md bg-neutral-950 text-neutral-100">
          Create Account
        </Button>
      </form>
    </div>
  )
}

export default Register
