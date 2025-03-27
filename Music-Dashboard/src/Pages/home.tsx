import React, { Suspense } from "react";
import TrendingMusic from "../Components/Home/TrendingMusic";
import SimilarSongs from "../Components/Home/SimilarSongs";

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <Suspense fallback={<p className="text-gray-500">Laddar...</p>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <TrendingMusic />
                        <SimilarSongs />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Home;
