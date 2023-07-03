import {
  ListItem,
  List,
  ListIcon,
  Center,
  Box,
  HStack,
  UnorderedList,
} from "@chakra-ui/react";

export default function PartList({ partList }) {
  return (
    <List spacing={1} paddingLeft={5}>
      {partList.map(([key, value]) => {
        return (
          <ListItem
            key={key}
            _before={{
              content: '"●"',
              position: "absolute",
              top: "-0.5em",
              left: "-0.45em",
              fontSize: "1.8em",
            }}
          >
            <span>
              {key}: {value}
            </span>
          </ListItem>
        );
      })}
    </List>
  );
}
