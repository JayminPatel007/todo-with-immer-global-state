import { useRef, useEffect } from 'react';

const useFlusher = () => {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.classList.add('flush');
        setTimeout(() => {
            ref.current.classList.remove('flush');
        }, 300);
    });
    return ref;
};

export { useFlusher };
