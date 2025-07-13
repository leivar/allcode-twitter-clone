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
    <div className="grid grid-cols-4">
      <div>
        <Navigation />
      </div>
      <div className="col-span-2 border-x-2 border-gray-300 min-h-screen">
        {children}
      </div>
      <div>
        <Search />
      </div>
    </div>
  )

};