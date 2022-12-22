import { useAuth } from "context";
import { FC } from "react";
import BaseButton from "./BaseButton";

const SocialSignInButtons: FC = () => {
  const { signinWithGoogle } = useAuth();
  const onSignInGoogle = () => signinWithGoogle();

  const onSignInApple = () => console.warn("Sign in Apple");

  return (
    <>
      <BaseButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />

      <BaseButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636" />
    </>
  )
}

export default SocialSignInButtons;