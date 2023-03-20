"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface FormProps {
  children: React.ReactNode;
  categoryId?: string;
}
const Form = ({ children, categoryId }: FormProps) => {
  const router = useRouter();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        router.push(
          `/dashboard?restaurant=${
            (event.currentTarget[0] as HTMLInputElement).value
          }&category=${categoryId || ""}`
        );
      }}
    >
      {children}
    </form>
  );
};

export default Form;
