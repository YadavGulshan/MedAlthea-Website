import Link from 'next/link';
import Main from '../layout/Main';

function ErrorPage() {
  return (
    <Main>
      <section className="h-[88vh] bg-white">
        <div className="my-2 mx-auto flex h-full w-2/3 max-w-6xl flex-col items-center justify-center px-4">
          <h1 className="text-8xl font-bold text-zinc-700">Error 404</h1>
          <p className="text-lg font-semibold text-neutral-400">
            Woops. Looks like this page doesn&apos;t exist
          </p>
          <div
            underline="none"
            className="m-10 rounded-lg bg-blue-500 py-2 px-4 text-xl font-semibold !text-white shadow-lg shadow-blue-500"
          >
            <Link href="/">Go to home</Link>
          </div>
        </div>
      </section>
    </Main>
  );
}
export default ErrorPage;
