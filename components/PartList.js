import {
  ListItem,
  List,
  ListIcon,
  Center,
  Box,
  HStack,
  UnorderedList,
} from "@chakra-ui/react";

export default function PartList({ buildList }) {
  let partList = (function () {
    let parts = [];
    for (const section in buildList) {
      const part = buildList[section];
      if (typeof part === "object") {
        parts.push([section, Object.entries(part)]);
      } else {
        parts.push([section, buildList[section]]);
      }
    }
    return parts;
  })();
  console.log(partList);
  return (
    <List spacing={1} paddingLeft={5}>
      {partList.map(([title, value]) => {
        if (typeof value === "object") {
          return (
            <>
              {/* <ListItem
                key={title}
                _before={{
                  content: '"●"',
                  position: "absolute",
                  top: "-0.5em",
                  left: "-0.45em",
                  fontSize: "1.8em",
                }}
              >
                {title}:
              </ListItem> */}
              <ListItem key={value} ml={5}>
                <List>
                  {value.map(([title, value]) => {
                    return (
                      <ListItem
                        key={value}
                        fontSize="1.2rem"
                        _before={{
                          content: '"●"',
                          position: "absolute",
                          top: "-0.5em",
                          left: "-0.45em",
                          fontSize: "1.8em",
                        }}
                      >
                        {title}: {value}
                      </ListItem>
                    );
                  })}
                </List>
              </ListItem>
            </>
          );
        } else if (typeof title === "string") {
          return (
            <ListItem
              key={title}
              _before={{
                content: '"●"',
                position: "absolute",
                top: "-0.5em",
                left: "-0.45em",
                fontSize: "1.8em",
              }}
            >
              <span>
                {title}: {value}
              </span>
            </ListItem>
          );
        }
      })}
    </List>
  );
}
