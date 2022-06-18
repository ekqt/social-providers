import Link from "next/link";
import { Code } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

const googleMetaData = `{
    avatar_url:
    "https://lh3.googleusercontent.com/a-/{...}",
    email: "hello@hectorsosa.me",
    email_verified: true,
    full_name: "Héctor Sosa",
    iss: "https://www.googleapis.com/userinfo/v2/me",
    name: "Héctor Sosa",
    picture:
    "https://lh3.googleusercontent.com/a-/{...}",
    provider_id: "{...}",
    sub: "{...}",
}`;

const githubMetaData = `{
    avatar_url: "https://avatars.githubusercontent.com/u/{..}",
    email: "hello@hectorsosa.me",
    email_verified: true,
    full_name: "Hector Sosa",
    iss: "https://api.github.com",
    name: "Hector Sosa",
    preferred_username: "ekqt",
    provider_id: "{...}",
    sub: "{...}",
    user_name: "ekqt",
}`;

const added = { color: "orange" };

export default function Information() {
    return (
        <>
            <h3>So what are they using?</h3>
            <p>
                It depends on the Authentication service and provider. This demo
                is using Supabase to handle its authentication.{" "}
                <Link href='https://supabase.com/' passHref>
                    <a target='_blank'>Supabase</a>
                </Link>{" "}
                is an open source Firebase alternative.
            </p>
            <p>
                Here is an example of what a <Code>user_metadata</Code> object
                would look like:
            </p>
            <Prism.Tabs style={{ marginBlock: "1rem" }}>
                <Prism.Tab
                    label='google-provider.json'
                    language='json'
                    icon={<AiOutlineGoogle />}
                    noCopy
                >
                    {googleMetaData}
                </Prism.Tab>

                <Prism.Tab
                    label='github-provider.json'
                    language='json'
                    icon={<AiOutlineGithub />}
                    noCopy
                >
                    {githubMetaData}
                </Prism.Tab>
            </Prism.Tabs>
            <p>
                If you are interested in building Authentication for your
                application using Supabase click on the Octocat icon to check
                out the repo.
            </p>
        </>
    );
}
