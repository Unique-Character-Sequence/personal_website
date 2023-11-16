export const throttle = (fn: Function, wait: number = 300) => {
    let inThrottle: boolean = false;
    let lastTime: number = 0;

    return function (this: any) {
        const context = this;
        const args = arguments;
        const currentTime = Date.now();

        if (!inThrottle) {
            // Execute the function on the leading edge
            fn.apply(context, args);
            lastTime = currentTime;
            inThrottle = true;
        } else {
            clearTimeout((window as any).throttleTimeout); // Use a unique identifier for clearTimeout
            (window as any).throttleTimeout = setTimeout(() => {
                if (currentTime - lastTime >= wait) {
                    // Execute the function on the trailing edge
                    fn.apply(context, args);
                    lastTime = currentTime;
                    inThrottle = true;
                } else {
                    inThrottle = false;
                }
            }, wait - (currentTime - lastTime));
        }
    };
};
