import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function BasicInfo({ basicInfo }) {
  return (
    <SimpleGrid columns={[2, 4]}>
      {basicInfo.slice(2).map(([key, value]) => {
        return (
          <Box key={key}>
            <Text as="b">{key}:</Text> {value}
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
