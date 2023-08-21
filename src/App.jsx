// According to given design, there is no design for mobile view.
// If I create it, I worry to answer wrong to the question.
// So, I develop only for desktop view.
// If there is the design for mobile view, I am willingly to create it.

import { useEffect, useState } from "react";

import "./App.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Problems from "./components/Problems";
import Footer from "./components/Footer";




const initialChallengeTotal = 5;

const App = () => {
    // data that fetch from API
    const [challenges, setChallenges] = useState([]);
    // To edit and limit data total
    const [limitedChallenges, setLimitedChallenges] = useState([]);


    const [challengeTotal, setChallengeTotal] = useState(initialChallengeTotal);

    const [isLoading, setIsLoading] = useState(true);

    const initialChallenges = challenges.filter(
        (challenge) => challenge.id <= initialChallengeTotal
    );

    const increaseChallengeTotal = () => {
        const newChallengeTotal = challengeTotal + 5;
        setChallengeTotal(newChallengeTotal);
    };

    const getMoreChallenges = (total) => {
        const newLimitedChallenges = challenges.filter(
            (challenge) => challenge.id <= total
        );

        setLimitedChallenges(newLimitedChallenges);

        return newLimitedChallenges;
    };

    const fetchAndSetChanllenges = async () => {
        try {
            const resources = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const newChallenges = await resources.json();

            setChallenges(newChallenges);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    // There is 2 useEffect() bcz
    // first useEffect() only want to fetch once from API
    // second one detect challengeTotal and run 
    // getMoreChallenges() everytime when challengeTotal 
    // value is changed
    useEffect(() => {
        fetchAndSetChanllenges();
    }, []);

    useEffect(() => {
        getMoreChallenges(challengeTotal);
    }, [challengeTotal]);

    return (
        <div>
            <Header />

            <Hero />

            <About />

            <Challenges
                challenges={
                    (limitedChallenges.length > 0 && limitedChallenges) ||
                    initialChallenges
                }
                onMoreButtonClick={increaseChallengeTotal}
                isLoading={isLoading}
            />

            <Problems />

            <Footer />
        </div>
    );
};

export default App;
