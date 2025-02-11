import { CalendarEvent } from "@/model";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import DateButton from "./DateButton";
import { useState } from "react";
import dayjs from "dayjs";
import NepaliDate from "nepali-date-converter";
import EventCard from "../event/EventCard";
import { Separator } from "../ui/separator";
import { X } from "lucide-react";
import { Button } from "../ui/button";

export type DateContainer = {
  month: number;
  year: number;
  day: number;

  events?: CalendarEvent[];
};

const DateContainer = ({ day, month, year, events }: DateContainer) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const englishDate = new NepaliDate(year, month, day).getAD();

  const existingEvent = events?.filter(
    (event) =>
      dayjs(event.date).startOf("day").valueOf() ===
      dayjs(new Date(englishDate.year, englishDate.month, englishDate.date))
        .startOf("day")
        .valueOf()
  );
  return (
    <Dialog open={isDialogOpen} onOpenChange={handleToggleDialog}>
      <DateButton
        day={day}
        month={month}
        year={year}
        events={existingEvent || []}
        onClick={handleToggleDialog}
        englishDate={englishDate}
      />
      <DialogContent className="overflow-auto h-full p-0  max-h-[calc(100dvh)] flex flex-col justify-between !max-w-full w-screen min-w-screen">
        <DialogHeader className="sticky top-0 z-10 bg-white p-4 flex flex-row justify-between items-center border-b border-gray-200">
          <DialogTitle>Events</DialogTitle>
          <DialogClose>
            <X className="w-4 h-4" />
          </DialogClose>
        </DialogHeader>
        <DialogDescription className="px-4">
          {existingEvent && existingEvent?.length > 0 ? (
            existingEvent?.map((event, idx) => (
              <div className="flex flex-col">
                <EventCard event={event} />
                {idx !== existingEvent.length - 1 && (
                  <Separator className="w-full my-4" />
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-8 text-gray-500">
              <div className="text-lg font-medium">No events found</div>
              <div className="text-sm mt-2">Try selecting a different date</div>
            </div>
          )}
        </DialogDescription>
        <DialogFooter className="p-4 sticky bottom-0 z-10 bg-white border-t border-gray-200">
          <Button onClick={handleToggleDialog}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DateContainer;
