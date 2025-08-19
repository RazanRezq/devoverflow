import { auth } from "@/auth";
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
    </>
  );
};
export default Home;
