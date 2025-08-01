import { useEffect, useState, type FC } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  min: string;
  sec: string;
}

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

export const Countdown: FC<CountdownProps> = ({
  targetDate,
  className = "",
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: "00", hours: "00", min: "00", sec: "00" };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n: number) => String(n).padStart(2, "0");
    return {
      days: pad(days),
      hours: pad(hours),
      min: pad(minutes),
      sec: pad(seconds),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => window.clearInterval(timer);
  });

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 sm:gap-8 ${className}`}
    >
      {(Object.keys(timeLeft) as (keyof TimeLeft)[]).map((label) => (
        <div key={label} className="flex flex-col items-center w-16 sm:w-auto">
          <span className="text-4xl sm:text-5xl md:text-7xl font-light text-[#E4E7EB]">
            {timeLeft[label]}
          </span>
          <span className="uppercase text-xs sm:text-sm text-[#A0A4B8]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
