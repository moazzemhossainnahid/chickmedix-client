import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import QualityAndCards from '../qualityAndCards/QualityAndCards';
import OurTeam from '../ourTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <QualityAndCards></QualityAndCards>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;