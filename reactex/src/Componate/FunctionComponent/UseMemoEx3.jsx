import { useState, useMemo } from "react";

const UseMemoEx3 = () => {
    const [selectedNum, setSelectedNum] = useState(100);
    const allPrimes = useMemo(() => {
        const result = [];

        for (let counter = 2; counter < selectedNum; counter++) {
            if (isPrime(counter)) {
                result.push(counter);
            }
        }
        return result;
    }, [selectedNum])
    return (<>
        <form >
            <label htmlFor="num">Your number:</label>
            <input type="number" value={selectedNum} onChange={(event) => {
                // To prevent computers from exploding,
                // we'll max out at 100k
                let num = Math.min(100, Number(event.target.value));

                setSelectedNum(num);
            }} />
        </form>
        <p>There are {allPrimes.length}prime(s) between 1 and  {selectedNum}:{''}<span className="prime-list">{allPrimes.join(',')}</span>
        </p>
    </>);
}
function isPrime(n) {
    const max = Math.ceil(Math.sqrt(n))
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (let counter = 2; counter <= max; counter++) {
        if (n % counter === 0) {
            return false;
        }
    }
    return true;

}

export default UseMemoEx3;