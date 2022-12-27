import { useState } from "react";
import { postForm } from "../../service";
import modalState from "../../store/modalState";

export const useFormHandl = () => {
  const [isSent, setSent] = useState(false);
  const handleForm = (e, name, email, text) => {
    e.preventDefault();

    postForm(name.value, email.value, text.value);

    name.setValue("");
    name.setDirty(false);
    email.setValue("");
    email.setDirty(false);

    text.setValue("");
    text.setDirty(false);

    modalState.closeModal();

    setSent(true);
  };
  return { isSent, handleForm };
};
