import { CalendarEvent } from "@/model";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Clock, Link, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import dayjs from "dayjs";

const EventCard = ({ event }: { event: CalendarEvent }) => {
  return (
    <Card className="w-full  mx-auto overflow-hidden">
      {event.images && event.images.length > 0 && (
        <div className="w-full h-96 overflow-hidden border-b border-border">
          <img
            src={event.images[0] || "/placeholder.svg?height=192&width=384"}
            alt="Event image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {dayjs(event.date).format("MMMM D, YYYY")}
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {event.isAllDay ? (
          <Badge variant="secondary">All Day</Badge>
        ) : (
          event.startTime &&
          event.endTime && (
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {event.startTime} - {event.endTime}
              </span>
            </div>
          )
        )}
        {event.location && (
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{event.location}</span>
          </div>
        )}
        {event.description && (
          <p className="text-sm text-muted-foreground">{event.description}</p>
        )}
      </CardContent>
      {event.blogUrl && (
        <CardFooter>
          <a
            href={event.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-blue-500 hover:underline"
          >
            <Link className="w-4 h-4" />
            <span>Read more</span>
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default EventCard;
