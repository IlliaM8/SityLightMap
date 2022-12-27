import { useInput } from "../../hooks/useInput";
import Form from "./Form";
import Gratitude from "./Gratitude";
import { useFormHandl } from "./useFormHandl";

const FeedBackForm = () => {
  const name = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true, isEmail: true });
  const text = useInput("", { isEmpty: true });
  const { isSent, handleForm } = useFormHandl();

  return isSent ? (
    <Gratitude />
  ) : (
    <Form name={name} email={email} text={text} handleForm={handleForm} />
  );
};

export default FeedBackForm;
