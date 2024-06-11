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

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("create project data", data);
  };
  return (
    <div className="space-y-5">
      <div>Registrar</div>
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
                    className="border w-full border-gray-700 py-5 px-5"
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
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Senha"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-5">
            Registrar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
