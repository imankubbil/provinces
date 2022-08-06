import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkThemeButton() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton 
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound='true'
            size='md'
            alignSelf='flex-end'
            onClick={toggleColorMode}
        />
    )
}

export default DarkThemeButton;