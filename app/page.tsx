import Link from "next/link";

const HomePage = () => {
    return (
        <>
          <h1>Welcome to Yelp</h1>
          <Link
              href="/oauth2/authorization/devops"
              className="bg-red-800 text-white p-2 my-4 inline-block">Log in</Link>
        </>
    );
}

export default HomePage;