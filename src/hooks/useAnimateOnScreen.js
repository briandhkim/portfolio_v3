import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from './useOnScreen';

const useAnimateOnScreen = (onScreenThreshold = 0.65) => {
	const [showElement, setShowElement] = useState(false);
	const elRef = useRef(null);
	const elementIsOnScreen = useOnScreen(elRef, onScreenThreshold);

	useEffect(() => {
		if (elementIsOnScreen && !showElement) {
			setShowElement(true);
		}
	}, [elementIsOnScreen]);

	return [showElement, elRef];
};

export default useAnimateOnScreen;
