"use client";
import { useForm } from "react-hook-form";
import { useModal } from "./useModal";

// ----------------------------------------------------------------------
export default function useModalForm() {
  const { visible, show, close } = useModal({
    defaultVisible: false,
  });

  const { register, handleSubmit } = useForm();

  return {
    visible,
    show,
    close,
    register,
    handleSubmit,
  };
}
