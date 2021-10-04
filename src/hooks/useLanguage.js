import { useEffect, useState } from "react";

const useLanguage = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch("./language.JSON")
            .then((res) => res.json())
            .then((data) => setLanguages(data));
    }, []);
    return [languages, setLanguages];
};

export default useLanguage;
