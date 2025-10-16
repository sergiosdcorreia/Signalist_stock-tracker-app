"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignOut = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "UK",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalised</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Inputs */}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investment Journey"}
        </Button>
      </form>
    </>
  );
};

export default SignOut;
