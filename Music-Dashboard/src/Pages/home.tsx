import React, { Suspense } from "react";
import TrendingMusic from "../Components/Home/TrendingMusic";
import NewReleases from "../Components/Home/NewReleases";

const Home = () => {
    return (
        <div>
            <Suspense fallback={<p>Laddar...</p>}>
                <TrendingMusic />
                <NewReleases />
            </Suspense>
        </div>
    )
}

export default Home;