import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { DialogClose } from "../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useDispatch } from "react-redux";
import { inviteToProject } from "../../Redux/Project/Action";
import { useParams } from "react-router-dom";

function InvitedUserForm() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(inviteToProject({email: data.email, projectId: id}))
  };

  return (
    <div>
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
                    placeholder="E-mail do usuário..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose>
            <Button type="submit" className="w-full mt-5">
              Convidar
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
}

export default InvitedUserForm;
