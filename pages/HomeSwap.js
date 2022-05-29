import React from 'react';
import { Box, Flex, Text, Input, Select, Button} from '@chakra-ui/react';

function HomeSwap() {
    return ( 
        <>
        <Box width={"100%"} textAlign={"center"} height={"fit-content"} bgColor={"#2c2c2c"}  >
            <Text fontSize={"4xl"} padding={"20px"} color={"white"} >OFF/SWAP</Text>
        </Box>
        <Flex bgColor={"#050100"} height={"fit-content"} flexDirection={"row"} >
            
            <Box margin={"40px"} width={'50%'}  >
                <Box padding={"20px"} width={"80%"} height={"fit-content"} bgColor={"#242124"} borderRadius={"30px"}>
                    <Text color={"white"} >From Token</Text>
                    <Select placeholder='Select From token' color={"white"}  >
                    <option value='option1'>ETH</option>
                    <option value='option2'>DAI</option>
                    <option value='option3'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Text mt={"50px"} color={"white"} >To Token</Text>
                    <Select color={"white"} placeholder='Select to Token'>
                    <option value='option1'>ETH</option>
                    <option value='option2'>DAI</option>
                    <option value='option3'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Button variant={"solid"} colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"} ml={"10vw"} >Sign Offline Transaction</Button>

                </Box>
                <Box padding={"20px"} mt={"100px"} width={"80%"} height={"fit-content"} bgColor={"#242124"} borderRadius={"30px"}>
                    <Text color={"white"} >From Token</Text>
                    <Select placeholder='Select From token' color={"white"}  >
                    <option value='option1'>ETH</option>
                    <option value='option2'>DAI</option>
                    <option value='option3'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Text mt={"50px"} color={"white"} >To Token</Text>
                    <Select color={"white"} placeholder='Select to Token'>
                    <option value='option1'>ETH</option>
                    <option value='option2'>DAI</option>
                    <option value='option3'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Button variant={"solid"} colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"} ml={"10vw"} >Sign Offline Transaction</Button>

                </Box>
            </Box>
            <Box>
                <Box flexDirection={"column"}  width={"500px"} height={"fit-content"} >
                    
                </Box>
            </Box>
        </Flex></>
     );
}

export default HomeSwap;