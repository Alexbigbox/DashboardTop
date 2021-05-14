import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps ) {
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Alex Kruger</Text>
                    <Text color="gray.300" fontSize="small">
                        alex.bigbox@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Alex Kruger" src="https://github.com/Alexbigbox.png" />
        </Flex>
    );
}