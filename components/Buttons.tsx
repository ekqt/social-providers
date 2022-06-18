import { Button, ButtonProps } from "@mantine/core";

import {
    AiOutlineGoogle,
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

const SignOut = (props: ButtonProps<"button">) => {
    return <Button size='md' {...props} variant='default' />;
};

export { GoogleButton, GithubButton, SignOut };
