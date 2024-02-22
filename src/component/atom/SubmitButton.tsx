import { Button, styled } from "@mui/material";

type Props = {};
const SubmitButton = (props: Props) => {
    return (
        <SWrapper>
            <SButton variant={"outlined"} type={"submit"}>
                submit
            </SButton>
        </SWrapper>
    );
};

const SButton = styled(Button)({
    width: "100%",
    margin: "0 auto",
    height: "4em",
    fontSize: "2.6em",
});
const SWrapper = styled("div")({
    maxWidth: "800px",
    margin: "0 auto",
});

export default SubmitButton;
