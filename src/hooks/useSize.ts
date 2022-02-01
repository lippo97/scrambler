import { useState, useEffect } from "react";

export const useSize = () => {
    const [size, setSize] = useState({
		columns: process.stdout.columns,
		rows: process.stdout.rows,
	});

    useEffect(() => {
		function onResize() {
			setSize({
				columns: process.stdout.columns,
				rows: process.stdout.rows,
			});
		}
        onResize();
		process.stdout.on("resize", onResize);
		return () => {
			process.stdout.off("resize", onResize);
        }
	}, []);

    return size;

}