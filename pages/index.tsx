import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

import { useState, useEffect } from "react";
import supabase from "../lib/getSupabase";

import Profile from "../components/Profile";
import {
    GoogleButton,
    TwitterButton,
    GithubButton,
    SignOut,
} from "../components/Buttons";

import { Group, LoadingOverlay } from "@mantine/core";

type Provider = "github" | "google" | "twitter";

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<any>();

    const auth = async (provider: Provider) => {
        setIsLoading(true);
        await supabase.auth.signIn({
            provider: `${provider}`,
        });
    };

    const signOut = async () => {
        setIsLoading(true);
        await supabase.auth.signOut();
        setUser(null);
        setIsLoading(false);
    };

    const getUser = () => {
        const supabaseUser = supabase.auth.user();
        setUser(supabaseUser);
        setIsLoading(false);
    };

    useEffect(() => {
        window.addEventListener("hashchange", function () {
            getUser();
        });
        getUser();
    }, [user]);

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
                    style={{ padding: 15, position: "relative" }}
                >
                    <LoadingOverlay visible={isLoading} />
                    {!user ? (
                        <>
                            <GoogleButton onClick={() => auth("google")}>
                                Continue with Google
                            </GoogleButton>
                            <TwitterButton onClick={() => auth("twitter")}>
                                Login with Twitter
                            </TwitterButton>
                            <GithubButton onClick={() => auth("github")}>
                                Authenticate with GitHub
                            </GithubButton>
                        </>
                    ) : (
                        <>
                            <Profile
                                avatar={user.user_metadata.avatar_url}
                                name={user.user_metadata.full_name}
                                provider={user.app_metadata.provider}
                                email={user.user_metadata.email}
                            />
                            <SignOut onClick={signOut}>Sign Out</SignOut>
                        </>
                    )}
                </Group>
            </section>
        </>
    );
};

export default Home;
