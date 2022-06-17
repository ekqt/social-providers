import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

import {
    GoogleButton,
    TwitterButton,
    GithubButton,
} from "../components/Buttons";

import { Group } from "@mantine/core";

import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const Home: NextPage = () => {
    const authGitHub = async () => {
        const magic = new Magic(`${process.env.MAGIC_API_KEY}`, {
            extensions: [new OAuthExtension()],
            testMode: true,
        });
        await magic.oauth.loginWithRedirect({
            provider: "github",
            redirectURI: "https://your-app.com/your/oauth/callback",
            scope: ["user:email"],
        });
        const result = await magic.oauth.getRedirectResult();
        console.log(result);
    };

    return (
        <>
            <section className={styles.section}>
                <h1>Social Providers</h1>
                <p>What do they use? Let&apos;s find out!</p>
            </section>
            <section className={styles["group-button"]}>
                <Group
                    grow
                    position='center'
                    direction='column'
                    sx={{ padding: 15 }}
                >
                    {/* <GoogleButton>Continue with Google</GoogleButton>
                    <TwitterButton>Login with Twitter</TwitterButton> */}
                    <GithubButton onClick={authGitHub}>
                        Authenticate with GitHub
                    </GithubButton>
                </Group>
            </section>
        </>
    );
};

export default Home;
