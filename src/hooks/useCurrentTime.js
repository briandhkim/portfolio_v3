import { useEffect, useState } from 'react';

const useCurrentTime = (timeZone = 'America/Los_Angeles') => {
	const locale = 'en';
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDateTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	});

	const time = dateTime.toLocaleTimeString(locale, {
		timeZone,
		timeZoneName: 'short',
	});

	return { time };
};

export default useCurrentTime;
