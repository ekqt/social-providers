import { Button, ButtonProps } from "@mantine/core";

import {
    AiOutlineGoogle,
    AiOutlineTwitter,
    AiOutlineGithub,
} from "react-icons/ai";

const GoogleButton = (props: ButtonProps<"button">) => {
    return (
        <Button
            size='md'
            leftIcon={<AiOutlineGoogle />}
            {...props}
            variant='gradient'
            gradient={{ from: "orange", to: "red" }}
        />
    );
};

const TwitterButton = (props: ButtonProps<"button">) => {
    return (
        <Button
            size='md'
            leftIcon={<AiOutlineTwitter />}
            {...props}
            styles={() => ({
                root: {
                    backgroundColor: "#00acee",
                    "&:hover": {
                        backgroundColor: "#00a5e6",
                    },
                },
            })}
        />
    );
};

const GithubButton = (props: ButtonProps<"button">) => {
    return (
        <Button
            size='md'
            leftIcon={<AiOutlineGithub />}
            {...props}
            styles={() => ({
                root: {
                    color: "#fff",
                    backgroundColor: "#000",
                    "&:hover": {
                        backgroundColor: "#262626",
                    },
                },
            })}
        />
    );
};

export { GoogleButton, TwitterButton, GithubButton };
