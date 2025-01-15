function Skeleton() {
    const skeletons = Array(6).fill(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skeletons.map((_, index) => (
                <div key={index} className="max-w-sm w-80 md:w-96 rounded-3xl overflow-hidden shadow-xl my-2 animate-pulse">
                    <div className="min-h-96 flex justify-center items-center p-5 bg-gray-200"></div>
                    <div className="px-6 py-4">
                        <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
                        <div className="h-4 bg-gray-300 rounded-md mb-3 w-5/6"></div>
                        <div className="h-6 bg-gray-300 rounded-md mb-3 w-1/3"></div>
                        <div className="h-7 bg-gray-300 rounded-full w-full"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skeleton