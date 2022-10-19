import { getProviders, signIn } from "next-auth/react";
import { Button } from "ui";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => signIn(provider.id)}
          >
            {provider.name} 로그인
          </Button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
