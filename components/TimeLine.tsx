import React, { useState } from "react";
import {
  Button,
  Collapse,
  Text,
  Timeline,
  TypographyStylesProvider,
} from "@mantine/core";
// @ts-expect-error - no types available
import BlockContent from "@sanity/block-content-to-react";

import { CV } from "../queries/cv";

const TimeLine: React.FC<{ items: CV[]; forHire: boolean }> = ({
  items,
  forHire,
}) => {
  return (
    <Timeline active={items.length} bulletSize={24} lineWidth={2}>
      <Timeline.Item title="git switch -c basti/buck">
        <Text color="dimmed" size="sm">
          Geburt
        </Text>
        <Text size="xs" style={{ marginTop: 4 }}>
          15.12.1989
        </Text>
      </Timeline.Item>

      {items.map((item, idx) => (
        <Timeline.Item
          key={item._id}
          title={`git rebase feature/${item.slug}`}
          lineVariant={forHire && items.length === idx + 1 ? "dashed" : "solid"}
        >
          <TimeLineItemContent item={item} />
        </Timeline.Item>
      ))}

      {forHire ? (
        <Timeline.Item title="git switch -c feature/future">
          <Text color="dimmed" size="sm">
            Softwareentwickler ???
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            ???
          </Text>
        </Timeline.Item>
      ) : null}
    </Timeline>
  );
};

const TimeLineItemContent: React.FC<{ item: CV }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const from = new Date(item.from).getFullYear();
  const to = item.to !== null ? new Date(item.to).getFullYear() : "heute";

  return (
    <>
      <Text
        color="dimmed"
        size="sm"
        dangerouslySetInnerHTML={{
          __html: item.description.replace(/\n/i, "<br/>"),
        }}
      />
      <Text size="xs" style={{ marginTop: 4 }}>
        {from} - {to}
      </Text>

      {item.details !== null ? (
        <>
          <Button
            variant="outline"
            radius="xs"
            size="xs"
            compact
            onClick={() => setOpen((open) => !open)}
          >
            {open ? "Weniger" : "Mehr..."}
          </Button>
          <Collapse
            in={open}
            sx={(theme) => ({ marginBlock: theme.spacing.sm })}
          >
            <TypographyStylesProvider>
              <BlockContent blocks={item.details} />
            </TypographyStylesProvider>
          </Collapse>
        </>
      ) : null}
    </>
  );
};

export default TimeLine;
