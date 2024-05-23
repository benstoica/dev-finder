import { getRoom } from "@/data-access/rooms";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;

  const room = await getRoom(roomId);
  if (!room) {
    return <div>No room with matching ID</div>;
  }

  const tags = room.tags.split(",").map((tag) => tag.trim());

  return (
    <div className="grid grid-cols-4 min-h-screen ">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          VIDEO PLAYER
        </div>
      </div>

      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
          {room.githubRepo ? (
            <Link
              href={room.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline text-sm"
            >
              <GithubIcon />
              Github Repository
            </Link>
          ) : null}
          <p className="text-base text-gray-600">{room?.description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((language) => (
              <Badge className="w-fit" key={language}>
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
