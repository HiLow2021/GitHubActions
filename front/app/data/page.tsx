'use client';

import { useEffect, useState } from 'react';

type Data = {
    id: number;
    name: string;
};

export default function Data() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:5000/');
                const data = await response.json();

                setData(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className="flex flex-col max-w-5xl w-full justify-center items-center gap-10">
            <p className="text-3xl">Data List</p>
            <div className="px-8 pt-4 pb-8 border border-neutral-400">
                <table className="table-auto">
                    <thead className="border-b border-neutral-400">
                        <tr>
                            <th className="px-8 py-4">ID</th>
                            <th className="px-8 py-4">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((x) => (
                            <tr key={x.id} className="border-b border-neutral-400">
                                <td className="px-8 py-2">{x.id}</td>
                                <td className="px-8 py-2">{x.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
