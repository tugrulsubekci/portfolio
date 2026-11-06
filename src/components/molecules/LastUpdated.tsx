interface LastUpdatedProps {
  date: Date;
  className?: string;
}

/** "Last updated 5 Nov 2026" line. */
export const LastUpdated = ({ date, className = '' }: LastUpdatedProps) => (
  <p className={`text-xs text-body ${className}`.trim()}>
    Last updated{' '}
    <time dateTime={date.toISOString().slice(0, 10)}>
      {date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Europe/London',
      })}
    </time>
  </p>
);
