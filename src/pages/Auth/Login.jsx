import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Auth/Action";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="space-y-5">
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border  w-full py-5 px-5 dark:border-gray-700"
                    placeholder="E-mail"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className="border w-full py-5 px-5 pr-10 dark:border-gray-700"
                      placeholder="Senha"
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-500 text-primary" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500 text-primary" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-5">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
