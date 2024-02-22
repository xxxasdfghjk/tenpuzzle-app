import { createRef, useRef } from "react";
import { InputNumbers } from "../pages/TenPuzzleSolverPage";
import { RefObject } from "react";
import { TextField, styled } from "@mui/material";

type Props = {
    numbers: InputNumbers;
    onChange: (index: number, newNumber: string) => void;
    fieldNum: number;
    onComplete: () => void;
};
const range = (num: number) => {
    return new Array(num).fill(0).map((_, i) => i);
};

const NumberInput = (props: Props) => {
    const inputRef = useRef<RefObject<HTMLDivElement>[]>([]);
    range(props.fieldNum).forEach((_: any, index: number) => {
        inputRef.current[index] = createRef<HTMLDivElement>();
    });

    return (
        <SWrapper>
            {range(props.fieldNum).map((_, index) => (
                <TextField
                    sx={{ input: { fontSize: "3rem", textAlign: "center" } }}
                    inputProps={{ maxLength: 2, pattern: "[0-9]+" }}
                    key={`index ${props.numbers[index]}` + index}
                    ref={inputRef.current[index]}
                    value={props.numbers[index]}
                    onChange={(e) => {
                        const num = e.target.value;
                        if (num.length === 0) {
                            props.onChange(index, "");
                            return;
                        }
                        if (!new RegExp("^[0-9]+$").test(num)) {
                            return;
                        }
                        props.onChange(index, num.length > 1 ? num.replace(props.numbers[index], "") : num);
                        if (inputRef.current[(index + 1) % props.fieldNum] !== undefined) {
                            inputRef.current[(index + 1) % props.fieldNum]?.current?.querySelector("input")?.focus();
                        }
                        if (index + 1 === props.fieldNum) {
                            props.onComplete();
                        }
                    }}
                />
            ))}
        </SWrapper>
    );
};
const SWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    fontSize: "4rem",
    "> input": { fontSize: "4rem" },
    maxWidth: "800px",
    margin: "0 auto",
    padding: "200px 200px 40px 200px",
    "> div": {
        padding: "5px",
    },
});

export default NumberInput;
