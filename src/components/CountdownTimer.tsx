import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 text-center">
      <div className="bg-white rounded-lg p-4 shadow-[var(--shadow-card)] min-w-[70px]">
        <div className="text-2xl font-bold text-dch-navy">{timeLeft.days}</div>
        <div className="text-sm text-muted-foreground">Days</div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-[var(--shadow-card)] min-w-[70px]">
        <div className="text-2xl font-bold text-dch-navy">{timeLeft.hours}</div>
        <div className="text-sm text-muted-foreground">Hours</div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-[var(--shadow-card)] min-w-[70px]">
        <div className="text-2xl font-bold text-dch-navy">{timeLeft.minutes}</div>
        <div className="text-sm text-muted-foreground">Minutes</div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-[var(--shadow-card)] min-w-[70px]">
        <div className="text-2xl font-bold text-dch-navy">{timeLeft.seconds}</div>
        <div className="text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  );
};