import NumberInput from "../atom/NumberInput";
import ResultDisplay from "../atom/ResultDisplay";
import { FormEventHandler, useState } from "react";
import SubmitButton from "../atom/SubmitButton";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { solve } from "my-ten-puzzle";
const fieldNum = 4;
const answerNum = 10;
const isAllInt = (inputNumbers: InputNumbers) => {
    return inputNumbers.every((e) => e.length === 1 && e.match(/^[0-9]$/));
};
const uniq = (array: string[]) => {
    return Array.from(new Map(array.map((e) => [e, e])).values()).sort();
};

export type InputNumbers = Array<string>;
const TenPuzzleSolverPage = () => {
    const [numbers, setNumbers] = useState<InputNumbers>(new Array(fieldNum).fill(""));
    const [result, setResult] = useState<string[]>([]);
    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (isAllInt(numbers)) {
            const res = uniq(
                solve(
                    numbers.map((e) => parseInt(e)),
                    answerNum,
                    true
                )
            );
            setResult(res);
            if (res.length > 0) {
                toast.success(`Found ${res.length} way solution.`);
            } else {
                toast.warn(`No solution found.`);
            }
        } else {
            toast.error("Please fill inputs by number!!");
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <NumberInput
                    onChange={(index, newNumber) =>
                        setNumbers((prev) => {
                            let newArray = prev;
                            newArray[index] = newNumber;
                            return [...newArray];
                        })
                    }
                    numbers={numbers}
                    fieldNum={fieldNum}
                ></NumberInput>
                <SubmitButton></SubmitButton>
            </form>
            <ResultDisplay results={result}></ResultDisplay>
            <ToastContainer />
        </>
    );
};

export default TenPuzzleSolverPage;
