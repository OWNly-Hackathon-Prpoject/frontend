import {
  Text,
  Input,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { contractABI } from "../../abi/TwitterNft";

const Header = ({ bringTweet }) => {
  const title_size = { base: "33px", md: "50px", lg: "55px" };
  const font_size = { base: "16px", md: "18px", lg: "20px" };

  return (
    <>
      <Box pt="20" px="4">
        <Text fontSize={title_size} className="title i">
          Deploy/Mint Tweet
        </Text>
      </Box>
      <Box className="i" my="12" align="center">
        <form onSubmit={bringTweet} autoComplete="off">
          <InputGroup maxW="90vw">
            <Input name="tweetURL" placeholder="Enter Tweet URL" />
            <InputRightElement>
              <button type="submit">
                <SearchIcon fontSize={font_size} color="blue.500" />
              </button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
    </>
  );
};

export default Header;
