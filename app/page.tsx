import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";

export default async function page() {
  const session = await getAuthSession();
  return (
    <Card>
      <CardHeader>
        <h1>{session?.user.name}</h1>
      </CardHeader>
      <CardContent>
        <h2>{session?.user.email}</h2>
      </CardContent>
    </Card>
  );
}
