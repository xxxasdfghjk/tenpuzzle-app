import { styled } from "@mui/material";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

type Props = { results: string[] };

const replaceMathSymbol = (str: string) => {
    return str
        .replaceAll("/", " \\div ")
        .replaceAll("*", " \\times ")
        .replace("(", "")
        .replace(/(.*)\)$/, "$1");
};

const ResultDisplay = (props: Props) => {
    return props.results.length > 0 ? (
        <SWrapper>
            <STitle>Solutions</STitle>

            {props.results.map((e) => (
                <SResult key={e}>
                    <InlineMath>{replaceMathSymbol(e)}</InlineMath>
                </SResult>
            ))}
        </SWrapper>
    ) : (
        <></>
    );
};

const SWrapper = styled("div")({
    maxWidth: "800px",
    margin: "0 auto",
});
const SResult = styled("p")({ fontSize: "1.3rem" });
const STitle = styled("h2")({ fontSize: "2.1rem" });
export default ResultDisplay;
