import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const Home = async () => {
  const session = await auth();
  console.log("Session:", session);
  return (
    <>
      <h1>Welcome to Dev Overflow</h1>
      <p>
        A community-driven platform for asking and answering programming
        questions.
      </p>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Sign out </Button>
      </form>
    </>
  );
};
export default Home;
