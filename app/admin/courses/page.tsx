/* eslint-disable @next/next/no-img-element */
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Typography } from "@/components/ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRequiredAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CoursesPage() {
  const session = await getRequiredAuthSession();
  const courses = await prisma.course.findMany({
    where: {
      creatorId: session.user.id,
    },
  });
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
              </TableHeader>
              <TableBody>
                {courses &&
                  courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <Avatar className="rounded" size="default">
                          <AvatarFallback>{course.name[0]}</AvatarFallback>
                          {course.image && (
                            <AvatarImage>
                              <img src={course.image} alt="" />
                            </AvatarImage>
                          )}
                        </Avatar>
                      </TableCell>
                      <TableCell>
                        <Typography
                          as={Link}
                          variant="large"
                          href={`/admin/courses/${course.id}`}
                        >
                          {course.name}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}