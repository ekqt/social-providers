import { Avatar, Text, Group } from "@mantine/core";

interface UserInfoIconsProps {
    provider: string;
    avatar: string;
    name: string;
    email: string;
}

export default function UserInfoIcons({
    avatar,
    name,
    provider,
    email,
}: UserInfoIconsProps) {
    return (
        <div>
            <Group noWrap>
                <Avatar src={avatar} size={94} radius='md' />
                <div>
                    <Text
                        size='xs'
                        style={{ textTransform: "uppercase" }}
                        weight={700}
                        color='dimmed'
                    >
                        Provider: {provider}
                    </Text>

                    <Text size='lg' weight={500}>
                        {name}
                    </Text>

                    <Group noWrap spacing={10}>
                        <Text size='xs' color='dimmed'>
                            {email}
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    );
}
