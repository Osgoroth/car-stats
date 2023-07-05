import {
  ListItem,
  List,
  ListIcon,
  Center,
  Box,
  HStack,
  UnorderedList,
} from "@chakra-ui/react";

import { TbPointFilled } from "react-icons/tb";

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

  return (
    <UnorderedList spacing={1} paddingLeft={5}>
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

              <UnorderedList>
                {value.map(([title, value]) => {
                  return (
                    <ListItem
                      key={value}

                      // _before={{
                      //   content: '"●"',
                      //   position: "absolute",
                      //   top: "-0.5em",
                      //   left: "-0.45em",
                      //   fontSize: "1.8em",
                      // }}
                    >
                      {title}: {value}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </>
          );
        } else if (typeof title === "string") {
          return (
            <ListItem
              key={title}
              // _before={{
              //   content: '"●"',
              //   position: "absolute",
              //   top: "-0.5em",
              //   left: "-0.45em",
              //   fontSize: "1.8em",
              // }}
            >
              {title}: {value}
            </ListItem>
          );
        }
      })}
    </UnorderedList>
  );
}
