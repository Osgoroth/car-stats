import { Box, SimpleGrid } from "@chakra-ui/react";

export default function BasicInfo({ basicInfo }) {
  return (
    <SimpleGrid columns={3} spacing={1} fontSize={"0.8rem"}>
      {basicInfo.slice(2).map(([key, value]) => {
        return (
          <Box key={key}>
            {key}: {value}
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
