import React, { Suspense } from "react";
import TrendingMusic from "../Components/Home/TrendingMusic";
import NewReleases from "../Components/Home/SimilarSongs";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Suspense fallback={<p className="text-gray-500">Laddar...</p>}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <TrendingMusic />
                    <NewReleases />
                </div>
            </Suspense>
        </div>
    )
}

export default Home;