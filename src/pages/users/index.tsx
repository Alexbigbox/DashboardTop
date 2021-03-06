import { Checkbox, useBreakpointValue } from "@chakra-ui/react";
import { Box, Flex, Spinner, Heading, Button, Icon, Table, Thead, Tr, Text, Th, Tbody, Td } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";


import Link from "next/link";
import React from "react";
import { useUsers } from "../../services/hooks/useUsers";


export default function UserList() {
    const { data, isFetching, isLoading, error } = useUsers()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuário

                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
                        </Heading>                        
                        
                        <Link href="/users/create" passHref>
                            <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" /> }
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter os usuários</Text> 
                        </Flex>
                    ) : (
                        <>
                        <Table colorScheme="whitAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="pink" />
                                    </Th>
                                    <Th>usuário</Th>
                                    { isWideVersion && <Th>Data de Cadastro</Th>}
                                    <Th width="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map(user => {
                                    return (
                                        <Tr key={user.id}>
                                        <Td px={["4", "4", "6"]}>
                                            <Checkbox colorScheme="pink" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">{user.name}</Text>
                                                <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                            </Box>
                                        </Td>
                                        { isWideVersion && <Td>{user.createdAt}</Td>}
                                        <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                colorScheme="purple"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" /> }
                                            >
                                            { isWideVersion ? 'Editar' : '' } 
                                            </Button>
                                        </Td>
                                    </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>

                        <Pagination
                          totalCountOfRegisters={200}
                          currentPage={2} 
                          onPageChange={() => {}}
                        />

                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}