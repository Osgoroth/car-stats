import { ListItem, List, ListIcon } from "@chakra-ui/react";
import { AiOutlineMinus } from "react-icons/ai";
export default function PartList({ partList }) {
  return (
    <List spacing={2} fontSize={"0.8rem"}>
      {partList.map(([key, value]) => {
        return (
          <ListItem key={key}>
            <ListIcon as={AiOutlineMinus} />
            {key}: {value}
          </ListItem>
        );
      })}
    </List>
  );
}
