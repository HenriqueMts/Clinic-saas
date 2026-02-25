"use client";

import { addMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { parseAsIsoDate, useQueryState } from "nuqs";
import * as React from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const defaultFrom = new Date();
const defaultTo = addMonths(defaultFrom, 1);

export function DatePicker({
  className,
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const [fromQuery, setFromQuery] = useQueryState(
    "from",
    parseAsIsoDate.withDefault(defaultFrom),
  );
  const [toQuery, setToQuery] = useQueryState(
    "to",
    parseAsIsoDate.withDefault(defaultTo),
  );

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: fromQuery,
    to: toQuery,
  });

  React.useEffect(() => {
    setDate({ from: fromQuery, to: toQuery });
  }, [fromQuery, toQuery]);

  const handleSelect = (range: DateRange | undefined) => {
    setDate(range);
    if (range?.from) setFromQuery(range.from, { shallow: false });
    if (range?.to) setToQuery(range.to, { shallow: false });
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-range"
            className="justify-start px-2.5 font-normal"
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: ptBR })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: ptBR })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: ptBR })
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
