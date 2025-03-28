import React, { Suspense } from "react";
import TrendingMusic from "../Components/Home/TrendingMusic";
import SimilarSongs from "../Components/Home/SimilarSongs";
import TrendingArtists from "../Components/Home/TrendingArtists";

const Home: React.FC = () => {
    return (
        <div className="h-full p-4 space-y-8">
            <Suspense fallback={<p className="text-gray-500">Laddar...</p>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                    <div className="md:col-span-2 space-y-6">
                        <TrendingMusic />
                        <TrendingArtists />
                        <SimilarSongs />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Home;
