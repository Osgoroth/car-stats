import { Icon, IconButton, HStack, Center } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const socialMedia = {
  Instagram: FaInstagram,
  FaceBook: FaFacebook,
};
export default function Socials({ socials }) {
  return (
    <Center h={"100%"}>
      <HStack spacing={`calc(100%/${socials.length})`}>
        {socials.map(([social, link]) => {
          return (
            <IconButton
              key={social}
              colorScheme="gray"
              variant="none"
              as={socialMedia[social]}
              onClick={() => (location.href = link)}
            />
          );
        })}
      </HStack>
    </Center>
  );
}
