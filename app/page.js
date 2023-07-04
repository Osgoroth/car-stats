"use client";

import BasicInfo from "@/components/BasicInfo";
import PartList from "@/components/PartList";
import Socials from "@/components/Socials";
import {
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";

import car from "public/nissanSilvia.json";
const basicInfo = car.basicInfo;
const carInfo = Object.entries(basicInfo);

const buildList = car.buildList;
// const partList = Object.entries(buildList);
const carName = `${basicInfo.Make}  ${basicInfo.Model}`;
const carImage = basicInfo.Image;
const carLogo = basicInfo.Logo;

const socialMedia = car.socialMedia;
const socials = Object.entries(socialMedia);

export default function Home() {
  return (
    <>
      <main>
        <Container maxW={"2560px"} px={{ base: 0, md: "1.5%" }}>
          <Grid
            py={{ base: 0, sm: "1.5%" }}
            maxW="100%"
            h="100vh"
            templateColumns="repeat(12,1fr)"
            templateRows={{ base: "0", lg: "repeat(12,1fr)" }}
            gap="2"
          >
            {/* car picture + name */}
            <GridItem
              position={"relative"}
              w="100%"
              bg="blackAlpha.500"
              colSpan={{ base: 12, lg: 9 }}
              rowSpan={{ base: 4, lg: 6 }}
            >
              <HStack
                position={"absolute"}
                top={"0"}
                left={"0"}
                bg={"blackAlpha.700"}
                w={"100%"}
              >
                <Image
                  alt={`${basicInfo.Brand} logo`}
                  src={carLogo}
                  boxSize={"30px"}
                  ml={4}
                />
                <Heading as={"h1"}>{carName}</Heading>
              </HStack>
              <Image
                alt={`a picture of a ${carName}`}
                src={carImage}
                objectFit="cover"
                boxSize={"100%"}
              />
            </GridItem>
            {/* Build list */}
            <GridItem
              w="100%"
              padding={"1.5%"}
              colSpan={{ base: 12, lg: 3 }}
              rowSpan={{ base: 3, lg: 12 }}
            >
              <PartList buildList={buildList} />
            </GridItem>
            {/* basicInfo */}
            <GridItem
              w="100%"
              padding={"1.5%"}
              colSpan={{ lg: 6, base: 12 }}
              rowSpan={{ lg: 2, base: 2 }}
              rowStart={{ base: 5 }}
            >
              <BasicInfo basicInfo={carInfo} />
            </GridItem>
            {/* Socials */}
            <GridItem
              w="100%"
              colSpan={{ base: 12, lg: 3 }}
              rowSpan={2}
              rowStart={{ base: 7 }}
              colStart={{ lg: 7 }}
            >
              <Socials socials={socials} />
            </GridItem>
            {/* Graph */}
            <GridItem
              w="100%"
              bg="orange.500"
              colSpan={{ lg: 6, base: 12 }}
              rowSpan={{ lg: 4, base: 3 }}
              colStart={{ lg: 1 }}
              rowStart={{ base: 9 }}
            ></GridItem>
          </Grid>
        </Container>
      </main>
    </>
  );
}
