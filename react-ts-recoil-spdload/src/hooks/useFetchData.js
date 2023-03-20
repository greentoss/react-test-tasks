import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ROCKETS_QUERY } from "../queries/queries";
import { rocketsArrayState } from "../recoil-state/atoms/rocketsArrayState";

const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
});

const useFetchRockets = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setRockets = useSetRecoilState(rocketsArrayState);

    useEffect(() => {
        setLoading(true);
        client
            .query({ query: GET_ROCKETS_QUERY })
            .then(({ data }) => {
                setRockets(data?.rockets);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [setRockets]);

    return { loading, error };
};

export default useFetchRockets;
