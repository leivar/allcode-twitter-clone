import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import { getAuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AppLayout ({
  children,
}: {
  children: React.ReactNode
}) {

  const authOptions = await getAuthOptions();
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/');
  };

  return (
    <section className="grid grid-cols-3 md:grid-cols-4 relative">
      <section className="fixed top-0 left-0">
        <Navigation />
      </section>
      <section className=""></section>
      <div className="col-span-2 border-x-2 border-gray-300 min-h-screen">
        {children}
      </div>
      <section className="hidden md:block">
        <Search />
      </section>
    </section>
  )

};