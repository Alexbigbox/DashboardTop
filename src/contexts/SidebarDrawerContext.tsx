import { useDisclosure } from '@chakra-ui/hooks';
import { UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from "next/router";

interface SideDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData );

export function SidebarDrawerProvider({ children }: SideDrawerProviderProps ) {
    const disclosure = useDisclosure() 
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)